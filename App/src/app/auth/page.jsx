"use client";
import { useState } from 'react';
import { Google, Facebook, X, GitHub } from "@mui/icons-material";
import { Input, Button, message } from 'antd';
import Image from 'next/image';
import auth_pic from '../(images)/auth_pic.jpg';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!isLogin && password !== confirmPassword) {
        throw new Error("Passwords don't match!");
      }

      if (isLogin) {
        // Handle login
        await signIn?.create({
          identifier: emailOrPhone,
          password,
        });
        message.success('Logged in successfully!');
      } else {
        // Handle registration
        await signUp?.create({
          emailAddress: emailOrPhone.includes('@') ? emailOrPhone : undefined,
          phoneNumber: !emailOrPhone.includes('@') ? emailOrPhone : undefined,
          password,
        });
        message.success('Account created! Check your email for verification.');
      }
    } catch (err) {
      message.error(err?.errors?.[0]?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="hidden lg:block relative lg:w-1/2 h-[700px]">
          <Image
            src={auth_pic}
            alt="Creative workspace"
            fill
            className="object-cover"
          />
        </div>

        {/* Auth Form Section */}
        <div className="lg:w-1/2 bg-white/90 backdrop-blur-lg p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-gray-600">
                {isLogin ? 'Sign in to continue' : 'Get started with your email or phone'}
              </p>
            </div>

            {/* Social Auth Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['google', 'github', 'facebook', 'twitter'].map((provider) => (
                <Button 
                  key={provider}
                  icon={
                    provider === 'google' ? <Google className="text-red-600" /> :
                    provider === 'github' ? <GitHub className="text-gray-800" /> :
                    provider === 'facebook' ? <Facebook className="text-blue-600" /> :
                    <X className="text-black" />
                  }
                  className="flex items-center justify-center h-12 border hover:border-gray-400"
                  onClick={() => window.location.href = `/api/auth/${provider}`}
                >
                  {provider.charAt(0).toUpperCase() + provider.slice(1)}
                </Button>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center mb-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500">Or continue with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Auth Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                size="large"
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="h-12 rounded-lg"
                required
              />

              <Input.Password
                size="large"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-lg"
                required
                minLength={8}
              />

              {!isLogin && (
                <Input.Password
                  size="large"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-12 rounded-lg"
                  required
                />
              )}

              {isLogin && (
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="form-checkbox rounded text-indigo-600" 
                    />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <a href="/forgot-password" className="text-indigo-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button 
                type="primary" 
                htmlType="submit"
                block 
                size="large"
                className="h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                loading={loading}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            {/* Toggle Auth Mode */}
            <p className="text-center mt-8 text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-indigo-600 font-semibold hover:underline"
              >
                {isLogin ? 'Sign up now' : 'Sign in instead'}
              </button>
            </p>

            {/* Terms */}
            <p className="text-center text-sm text-gray-500 mt-6">
              By continuing, you agree to our{' '}
              <a href="/terms" className="text-indigo-600 hover:underline">Terms</a> and{' '}
              <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}