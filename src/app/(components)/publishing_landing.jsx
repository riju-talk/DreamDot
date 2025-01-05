"use client";

import Image from "next/image";
import community_landing from "../(images)/webnovels.jpg";;

export default function PublishingLanding() {

    return (
        <div className="flex items-center justify-center h-80 w-4/6 my-20">
            <div className="bg-zinc-800 h-96 w-4/6 rounded-l-lg my-9">
                <Image src={community_landing} className="h-full object-center object-cover rounded-l-lg">
                </Image>
            </div>
            <div className="flex flex-col justify-center my-9 bg-slate-100 h-96 w-full p-8 gap-5 rounded-r-lg">
                <div className="pt-5">
                    <h2 className="text-2xl font-extrabold">Web Novels</h2>
                    <p>Still in Development phase</p>
                    <p>Write your own wev novels for free without any restrictions or censorship. Take control of</p>
                </div>
                <div className="pt-5">
                    <h2 className="text-xl font-extrabold">Find your people</h2>
                    <p>Join some of the most active communities on the platform.</p>
                    <p className="py-3 font-bold">Or</p>
                    <h2 className="text-xl font-extrabold">Create Yout Own Community</h2>
                    <p>Let others join your cursades</p>
                </div>
            </div>
        </div>
    );
}