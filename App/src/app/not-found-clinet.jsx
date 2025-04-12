// File: app/NotFoundClient.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFoundClient() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Safely accessing localStorage on the client side only.
        const id = localStorage.getItem("user");
        setUser(id);
        console.log(id);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="relative h-screen overflow-hidden">
                {/* Blurred hero image as a tranquil backdrop */}
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/coffee-cup.jpg')` }}>
                    <div className="inset-0 bg-black opacity-50"></div>
                </div>

                <div className="container relative z-10 mx-auto px-6 py-24 md:px-12 lg:px-24">
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <h1 className="text-5xl font-bold leading-tight text-purple-400">
                            404 Not Found
                        </h1>
                        <p className="max-w-md text-center text-lg text-gray-300">
                            The page you're looking for doesn't exist on DreamDot.
                        </p>
                        <div className="space-x-4">
                            {user ? (
                                <Link href={`/feed/${user}`} className="btn btn-primary">
                                    Return to feed
                                </Link>
                            ) : (
                                // Optionally, handle the case if the user id isn't found
                                <span className="btn btn-disabled">Loading...</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
