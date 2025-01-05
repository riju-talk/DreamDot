"use client";

import Image from "next/image";
import community_landing from "../images/community.jpg";;

export default function CommunityLanding() {

    return (
        <div className="flex items-center justify-center h-80 w-4/6 my-20">
            <div className="lex flex-col justify-center my-9 bg-slate-100 h-96 w-full p-8 gap-5 rounded-l-lg">
                <div>
                    <h2 className="text-2xl font-extrabold">Communities</h2>
                    <p>Here you mean something, A place where you belong.</p>
                    <p>Joing some notable communities, and let out your inner self. Express your ideas and connect with like minded people.</p>
                </div>
                <div className="pt-5">
                    <h2 className="text-xl font-extrabold">Find your people</h2>
                    <p>Join some of the most active communities on the platform.</p>
                    <p className="py-3 font-bold">Or</p>
                    <h2 className="text-xl font-extrabold">Create Yout Own Community</h2>
                    <p>Let others join your cursades</p>
                </div>
            </div>
            <div className="bg-zinc-800 h-96 w-4/6 rounded-r-lg">
                <Image src={community_landing} className="h-full object-center object-cover rounded-r-lg">
                </Image>
            </div>
        </div>
    );
}