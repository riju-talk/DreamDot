"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, message } from "antd";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import otp_pic from "../../(images)/otp_pic.jpg";

export default function OtpVerification({ email, uuid }: { email: string, uuid: string }) {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [layout, setLayout] = useState("default");
  const [attemptCount, setAttemptCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (!email) router.push("/auth/signin");
  }, [email, router]);

  const handleKeyPress = (button: string) => {
    if (button === "{bksp}") {
      setOtp(prev => prev.slice(0, -1));
    } else if (button === "{enter}") {
      handleVerifyOtp();
    } else if (otp.length < 6) {
      setOtp(prev => prev + button);
    }
  };

  const handleVerifyOtp = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/signin/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: uuid, otp }),
      });

      console.log("Response from OTP verification:", res);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "OTP verification failed");
      }

      // Successful verification: Save token and user data.
      const { token, id } = await res.json();

      message.success("OTP verified successfully!");
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(id));
      router.push(`/feed/${id}`);
      
    } catch (err: any) {
      // Increment attempt count if verification fails.
      setAttemptCount(prev => prev + 1);
      message.error(err.message);
      
      // If this was the third failed attempt, send DELETE request.
      if (attemptCount + 1 >= 3) {
        try {
          await fetch("/api/signin/otp", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: uuid }),
          });
          message.info("Maximum attempts reached. OTP has been reset. Please request a new OTP.");
          // Optionally reset the OTP field and attempt counter.
          setOtp("");
          setAttemptCount(0);
          router.refresh()
        } catch (deleteError: any) {
          message.error("Error resetting OTP. Please try resending OTP.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/signin/otp", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: uuid, email, display_name: email }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to resend OTP");
      }

      message.success("New OTP sent to your email!");
      // Reset attempt counter when a new OTP is sent.
      setAttemptCount(0);
      setOtp("");
    } catch (err: any) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">
        <div className="hidden lg:block relative lg:w-1/2 h-[300px]">
          <Image
            src={otp_pic}
            alt="OTP Verification"
            className="object-cover"
            fill
          />
        </div>

        <div className="lg:w-1/2 bg-white/90 backdrop-blur-lg p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                OTP Verification
              </h1>
              <p className="text-gray-600">
                Enter the 6-digit code sent to {email}
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleVerifyOtp}>
              <div className="flex justify-center gap-2 mb-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center text-xl font-bold ${
                      otp[i] ? "border-blue-500 bg-blue-50" : "border-gray-300"
                    }`}
                  >
                    {otp[i] || ""}
                  </div>
                ))}
              </div>

              <div className="virtual-keyboard">
                <Keyboard
                  layoutName={layout}
                  onKeyPress={handleKeyPress}
                  layout={{
                    default: [
                      "1 2 3",
                      "4 5 6",
                      "7 8 9",
                      "0 {bksp}"
                    ]
                  }}
                  theme="hg-theme-default hg-layout-numeric numeric-theme"
                  disableButtonHold
                  physicalKeyboardHighlight
                />
              </div>

              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                loading={loading}
                disabled={otp.length !== 6}
              >
                Verify OTP
              </Button>
            </form>

            <div className="text-center mt-4">
              <p className="text-gray-600">
                Didn't receive code?{" "}
                <button
                  onClick={handleResendOtp}
                  className="text-indigo-600 font-semibold hover:underline ml-1"
                  disabled={loading}
                >
                  Resend OTP
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
