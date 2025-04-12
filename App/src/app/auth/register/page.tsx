"use client";
import { useState } from 'react';
import { Input, Button, message, DatePicker, Select } from 'antd';
import Image from 'next/image';
import onboarding_pic from '../../(images)/auth_pic.jpg';
import { useRouter } from 'next/navigation';
import CryptoJS from 'crypto-js';

export default function Register() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        dob: null,
        gender: '',
        username: '',
        password: '',
        confirmPassword: '',
        country: '',
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        if (currentStep === 1) {
            // Validate first step fields
            if (!formData.fullName || !formData.username || !formData.gender ||
                !formData.email || !formData.phone || !formData.dob) {
                throw new Error('Please fill all required fields');
            }
            setCurrentStep(2);
        } else {
            // Validate passwords
            if (formData.password !== formData.confirmPassword) {
                throw new Error('Passwords do not match');
            }

            // Modern password pattern validation
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{12,}$/;
            if (!passwordPattern.test(formData.password)) {
                throw new Error(
                    'Password must be at least 12 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).'
                );
            }

            // Generate ECDH keys and proceed
            // const keyPair = await generateECDHKeys();
            // const privateKey = await crypto.subtle.exportKey("jwk", keyPair.privateKey);
            // const publicKey = await crypto.subtle.exportKey("jwk", keyPair.publicKey);

            // // Encrypt private key with the user's password
            // const encryptedPrivateKey = CryptoJS.AES.encrypt(JSON.stringify(privateKey), formData.password).toString();

            const validated_data = {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                dob: formData.dob ? formData.dob.format('YYYY-MM-DD') : null,
                gender: formData.gender,
                username: formData.username,
                password: formData.password,
                country: formData.country,
                // publicKey: JSON.stringify(publicKey),
                // encryptedPrivateKey: encryptedPrivateKey,
            };

            console.log("Validated Data", validated_data);
            await submitRegistration(validated_data, router);
            message.success('Registration successful!');
        }
    } catch (err) {
        message.error(err.message);
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">
                <div className="hidden lg:block relative lg:w-1/2 h-[700px]">
                    <Image
                        src={onboarding_pic}
                        alt="Onboarding"
                        className="object-cover"
                    />
                </div>

                <div className="lg:w-1/2 bg-white/90 backdrop-blur-lg p-8 lg:p-12">
                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                {currentStep === 1 ? 'Complete Your Profile' : 'Create Password'}
                            </h1>
                            <p className="text-gray-600">
                                {currentStep === 1
                                    ? 'Please provide your details to continue'
                                    : 'Set a secure password to finish registration'}
                            </p>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {currentStep === 1 ? (
                                <>
                                    <Input
                                        size="large"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                                        className="h-12 rounded-lg"
                                        required
                                    />

                                    <Input
                                        size="large"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={(e) => handleInputChange('username', e.target.value)}
                                        className="h-12 rounded-lg"
                                        required
                                    />

                                    <Select
                                        size="large"
                                        placeholder="Gender"
                                        value={formData.gender}
                                        onChange={(value) => handleInputChange('gender', value)}
                                        className="h-12 rounded-lg w-full"
                                    >
                                        <Select.Option value="male">Male</Select.Option>
                                        <Select.Option value="female">Female</Select.Option>
                                        <Select.Option value="other">Other</Select.Option>
                                    </Select>

                                    <Input
                                        size="large"
                                        placeholder="Email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="h-12 rounded-lg"
                                        required
                                    />

                                    <Input
                                        size="large"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="h-12 rounded-lg"
                                        required
                                    />

                                    <Input
                                        size="large"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={(e) => handleInputChange('country', e.target.value)}
                                        className="h-12 rounded-lg"
                                        required
                                    />

                                    <DatePicker
                                        size="large"
                                        placeholder="Date of Birth"
                                        value={formData.dob}
                                        onChange={(date) => handleInputChange('dob', date)}
                                        className="h-12 rounded-lg w-full"
                                        required
                                    />
                                </>
                            ) : (
                                <>
                                    <Input.Password
                                        size="large"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={(e) => handleInputChange('password', e.target.value)}
                                        className="h-12 rounded-lg"
                                        required
                                    />

                                    <Input.Password
                                        size="large"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                        className="h-12 rounded-lg"
                                        required
                                    />
                                </>
                            )}

                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                                className="h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                                loading={loading}
                            >
                                {currentStep === 1 ? 'Next' : 'Register'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function submitRegistration(details, router) {
    const registrationData = details;
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const result = await response.json();
        message.success(result.message);
        router.push(`/auth/signing`);
    } catch (error) {
        message.error(error.message);
        throw error; // Re-throw to handle in handleSubmit
    }
}