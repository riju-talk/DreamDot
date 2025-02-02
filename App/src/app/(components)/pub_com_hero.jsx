"use client";
import Image from "next/image";
import publishingImage from "../(images)/webnovels.jpg";
import communityImage from "../(images)/community.jpg";

export function PublishingLanding() {
    return (
        <div className="flex justify-center pb-12 items-center">
            <div className="flex flex-col lg:flex-row items-stretch max-w-6xl w-full shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="relative lg:w-1/2 h-96">
                    <Image
                        src={publishingImage}
                        alt="Writing workspace"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Craft Your Content
                    </h2>
                    <p className="text-lg text-gray-600">
                        Express yourself freely in our censorship-free zone. 
                        Publish blogs, articles, and stories with complete creative control.
                    </p>
                    <div className="space-y-6">
                        <div className="border-l-4 border-indigo-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Powerful Publishing Tools
                            </h3>
                            <p className="text-gray-600">
                                Write, edit, and format with our intuitive editor. 
                                Schedule posts and track engagement analytics.
                            </p>
                        </div>
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors w-fit">
                            Start Writing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CommunityLanding() {
    return (
        <div className="flex justify-center items-center pt-12 bg-gray-50">
            <div className="flex flex-col lg:flex-row-reverse items-stretch max-w-6xl w-full shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="relative lg:w-1/2 h-96">
                    <Image
                        src={communityImage}
                        alt="Community discussion"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Find Your Tribe
                    </h2>
                    <p className="text-lg text-gray-600">
                        Connect with passionate creators in specialized communities. 
                        Collaborate, share feedback, and grow together.
                    </p>
                    <div className="space-y-6">
                        <div className="border-l-4 border-indigo-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Build Meaningful Connections
                            </h3>
                            <p className="text-gray-600">
                                Join existing groups or establish your own community 
                                around shared interests and creative pursuits.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                                Explore Communities
                            </button>
                            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                                Create Community
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}