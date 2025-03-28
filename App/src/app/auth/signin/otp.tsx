"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Input, Button, message } from 'antd';
import otp_pic from '../../(images)/otp_pic.jpg'; // Replace with your own image
import { useRouter } from 'next/navigation';

export default function OtpVerification() {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleVerifyOtp(e) {
        e.preventDefault();
        setLoading(true);
        try {
            // Example: Call your API endpoint to verify the OTP
            const res = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ otp }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'OTP verification failed');
            }

            // If successful, show success and navigate user
            message.success('OTP verified successfully!');
            router.push('/dashboard'); // or wherever you want to redirect
        } catch (err: any) {
            message.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function handleResendOtp() {
        setLoading(true);
        try {
            // Example: Call an API endpoint to resend OTP
            const res = await fetch('/api/auth/resend-otp', {
                method: 'POST',
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to resend OTP');
            }

            message.success('OTP resent successfully!');
        } catch (err: any) {
            message.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">
                {/* Image Section */}
                <div className="hidden lg:block relative lg:w-1/2 h-[300px]">
                    <Image
                        src={otp_pic}
                        alt="OTP Verification"
                        className="object-cover"
                    />
                </div>

                {/* OTP Form Section */}
                <div className="lg:w-1/2 bg-white/90 backdrop-blur-lg p-8 lg:p-12">
                    <div className="max-w-md mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                OTP Verification
                            </h1>
                            <p className="text-gray-600">
                                Please enter the OTP sent to your email or phone.
                            </p>
                        </div>

                        {/* OTP Form */}
                        <form className="space-y-4" onSubmit={handleVerifyOtp}>
                            <Input
                                size="large"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="h-12 rounded-lg"
                                required
                            />

                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                                className="h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                                loading={loading}
                            >
                                Verify OTP
                            </Button>
                        </form>

                        {/* Resend OTP */}
                        <div className="text-center mt-4">
                            <p className="text-gray-600">
                                Haven’t received the code?
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
