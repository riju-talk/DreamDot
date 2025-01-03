"use client";
import { useEffect, useState } from "react";

export default function LandingHero({ videoUrls }) {
    const [videoIndex, setVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
        }, 4000); // Change video every 2 seconds

        return () => clearInterval(interval);
    }, [videoUrls.length]);

    return (
        <section
            id="discover"
            className="relative flex items-center w-[100vw] justify-center h-[700px] overflow-hidden"
        >
            {/* Fixed-sized background div */}
            <div className="absolute w-full h-full bg-black shadow-lg z-0"></div>

            {/* Transitioning video container */}
            <video
                key={videoUrls[videoIndex]} // Ensures re-render on video change
                src={videoUrls[videoIndex]}
                autoPlay
                muted
                disablePictureInPicture
                disableRemotePlayback
                className="absolute w-full h-full object-cover filter brightness-50 z-0"
            ></video>

            {/* Centered overlay text */}
            <div className="absolute z-10 flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-4xl font-bold">Welcome to Pages</h1>
                <p className="text-lg mt-2">
                    A social blogpost without any nonsense
                </p>
            </div>
        </section>
    );
}
