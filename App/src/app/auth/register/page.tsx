"use client";
import { useState } from 'react';
import { Input, Button, message, DatePicker, Select } from 'antd';
import Image from 'next/image';
import onboarding_pic from '../../(images)/auth_pic.jpg';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Handle onboarding submission
            await submitOnboardingDetails({
                fullName,
                email,
                phone,
                dob,
                gender,
                address,
            });
            message.success('Onboarding completed successfully!');
        } catch (err) {
            message.error(err.message);
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
                        src={onboarding_pic}
                        alt="Onboarding"
                        className="object-cover"
                    />
                </div>

                {/* Onboarding Form Section */}
                <div className="lg:w-1/2 bg-white/90 backdrop-blur-lg p-8 lg:p-12">
                    <div className="max-w-md mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                Complete Your Profile
                            </h1>
                            <p className="text-gray-600">
                                Please provide your details to complete the onboarding process.
                            </p>
                        </div>

                        {/* Onboarding Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <Input
                                size="large"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="h-12 rounded-lg"
                                required
                            />

                            <Input
                                size="large"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-12 rounded-lg"
                                required
                            />

                            <Input
                                size="large"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="h-12 rounded-lg"
                                required
                            />

                            <DatePicker
                                size="large"
                                placeholder="Date of Birth"
                                value={dob}
                                onChange={(date) => setDob(date)}
                                className="h-12 rounded-lg w-full"
                                required
                            />

                            <Select
                                size="large"
                                placeholder="Gender"
                                value={gender}
                                onChange={(value) => setGender(value)}
                                className="h-12 rounded-lg w-full"
                            >
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                                <Select.Option value="other">Other</Select.Option>
                            </Select>

                            <Input
                                size="large"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
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
                                Complete Onboarding
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function submitOnboardingDetails(details) {

}