"use client";
import { useEffect, useState } from "react";

export default function LandingHero({ videoUrls }) {
    const [videoIndex, setVideoIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true); // Start fading out
            setTimeout(() => {
                setVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length); // Change video
                setIsTransitioning(false); // Fade back in
            }, 250); // Duration of fade-out
        }, 8000); // Total interval (3s video + 1s transition)

        return () => clearInterval(interval);
    }, [videoUrls.length]);

    return (
        <section id="discover" className="relative flex items-center justify-center">
            {/* Fixed-sized background div */}
            <div className="absolute w-screen max-w-screen h-[500px] bg-black shadow-lg z-0 translate-y-8"></div>

            {/* Transitioning video container */}
            <div
                className={`transition-opacity duration-1000 z-10 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                }`}
            >
                <video
                    src={videoUrls[videoIndex]}
                    autoPlay
                    loop
                    muted
                    disablePictureInPicture
                    disableRemotePlayback
                    className="w-screen h-[500px] object-cover filter brightness-50 translate-y-2"
                />
            </div>

            {/* Overlay text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/2 text-white z-20">
                <h1 className="text-4xl font-bold">Welcome to Pages</h1>
                <p className="text-lg">A social blogpost without any nonsense</p>
            </div>
        </section>
    );
}
