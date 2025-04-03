"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import message from "antd/es/message";

import { useRouter } from "next/navigation";


import CryptoJS from 'crypto-js';

interface DecryptPrivateKeyParams {
  encryptedPrivateKey: string;
  password: string;
  salt: string;
  iv: string;
}

function decryptPrivateKey(
  encryptedPrivateKey: DecryptPrivateKeyParams["encryptedPrivateKey"],
  password: DecryptPrivateKeyParams["password"],
  salt: DecryptPrivateKeyParams["salt"],
  iv: DecryptPrivateKeyParams["iv"]
): string {

  try {
  // Convert the salt from Base64 back to WordArray
  const saltWordArray = CryptoJS.enc.Base64.parse(salt);
  
  // Convert the iv from Base64 back to WordArray
  const ivWordArray = CryptoJS.enc.Base64.parse(iv);
  
  // Derive the key using the password and salt
  const key = CryptoJS.PBKDF2(password, saltWordArray, { keySize: 256 / 8, iterations: 1000 });

  
  const decrypted = CryptoJS.AES.decrypt(
    encryptedPrivateKey,
    key,
    { iv: ivWordArray, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
  );
  const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
  
  if (!decryptedString) {
    throw new Error("Decryption failed: empty result.");
  }
  
  console.log("Decrypted Private Key:", decryptedString);
  return decryptedString;
  } catch (error) {
    
  }  
}

// Example: Fetch and decrypt private key on login
// const response = await fetch(`/api/getPrivateKey?userId=${userId}`);
// const encryptedData = await response.json();
// const privateKey = await decryptPrivateKey(encryptedData, userPassword);
// localStorage.setItem("privateKey", privateKey);  // Store it locally again


export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  // Extract the login function from your context
  const router = useRouter();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || "Sign-in failed");
      }
      
      const result = await response.json();
      console.log(result);
      message.success(result.message);
      const uuid = result.uuid;
      const token = result.token;
      
      // Update context using the login function
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(result.user));
      // const encryptedData={"encryptedPrivateKey": result.encryptedPrivateKey, "salt": result.salt};
      console.log("here")
      // const privateKey = decryptPrivateKey(result.encryptedPrivateKey, password, result.salt, result.iv);
      console.log("Result",result.user)
      // const privateKey= CryptoJS.AES.decrypt(result.user["encryptedPrivateKey"].toString(), password).toString(CryptoJS.enc.Utf8);
      // localStorage.setItem('privateKey', privateKey);
      window.location.href = `/feed/${uuid}`;
      
    } catch (err) {
      setError((err as Error).message);
    }
  };
  
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
        >
        <h2 className="text-3xl font-bold text-center mb-8">Sign In</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Password:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
}
