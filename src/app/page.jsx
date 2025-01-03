import Link from "next/link";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Pinterest } from "@mui/icons-material";
import { Reddit } from "@mui/icons-material";
import LaptopIcon from '@mui/icons-material/Laptop';
import { getAllVideoLanding } from "../lib/media_fetching";

import LandingHero from "./(components)/landing_hero";

export default async function Home() {

    const videoUrls = await getAllVideoLanding();

    return (
        <>
            <header className="flex items-center justify-around p-4 text-black bg-slate-100 flex-shrink flex-wrap text-wrap">
                <div className="pl-8 font-bold flex flex-row gap-2 justify-center items-center">
                    <div>
                        <span className="material-symbols-outlined">
                            <p className="text-3xl">
                                auto_stories
                            </p>
                        </span>
                    </div>
                    <div className="text-xl">
                        Pages
                    </div>
                </div>
                <div className="pr-8 flex justify-center gap-4">
                    <button className="text-black font-bold py-2 px-4 rounded outline outline-2">Login</button>
                    <button className=" text-black font-bold py-2 px-4 rounded outline outline-2">Register</button>
                </div>
            </header>
            <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-gradient-to-r from-gray-200 via-gray-300  to-gray-400 h-screen w-full">
                <section id="discover" className="text-center">
                    <LandingHero videoUrls={videoUrls}/>
                </section>
                <section id="about">
                    <h2 className="text-2xl font-bold">
                        We are a not just a social media
                    </h2>
                    <div>
                        <p>We are an encouring creative space</p>
                        <p>No sensorship, no jargon, just creativity at it's summit</p>
                    </div>
                </section>
                <section id="communities">
                    <h2 className="text-2xl font-extrabold">Communities</h2>
                    <div>Here you mean something, A place where you belong.</div>
                    <div><p>Joing some notable communities, and let out your inner self. Express your ideas and connect with like minded people.</p></div>
                </section>
                <section id="more">
                    <h2 className="text-2xl font-extrabold">More</h2>
                    <div><p>Join us today and let out your inner self.</p></div>
                </section>
            </main>
            <footer className=" bg-zinc-700 text-white h-max p-6">
                <div className="flex flex-shrink flex-wrap justify-between px-4">
                    <div className="w-1/3">
                        <div className="pl-8 font-bold flex flex-row gap-2 items-center py-4">
                            <div>
                                <span className="material-symbols-outlined">
                                    <p className="text-4xl">
                                        auto_stories
                                    </p>
                                </span>
                            </div>
                            <div className="text-2xl">
                                Pages
                            </div>
                        </div>
                        <div className="text-sm py-3 px-8">
                            <p>Pages is a social blogpost without any nonsence. A place where you can express yourself without any fear of sensorship.</p>
                            <p>Join us today and let out your inner self.</p>
                            <p className="pt-7">© 2024 Pages. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="items-center p-8 w-1/6">
                        <h3 className="text-lg font-bold pb-6">What we give</h3>
                        <p className="text-sm py-2">Blogs</p>
                        <p className="text-sm py-2">Communities</p>
                        <p className="text-sm py-2">Authorship</p>
                        <p className="text-sm py-2">Canvases</p>
                    </div>
                    <div className="items-center p-8 w-1/3">
                        <h3 className="text-lg font-bold pb-6">Connect</h3>
                        <ul className="flex flex-shrink flex-wrap gap-5">
                            <li><Facebook/></li>
                            <li><Instagram/></li>
                            <li><Twitter/></li>
                            <li><LinkedIn/></li>
                            <li><Pinterest/></li>
                            <li><Reddit/></li>
                            <li><GitHub/></li>
                            <li><LaptopIcon/></li>
                        </ul>
                        <h3 className="text-lg font-bold pt-6 pb-4">About the Author</h3>
                        <p className="text-sm">I am a full stack developer, devops engineer and a machine learning engineer</p>
                        <p className="text-sm"> and I enjoy building things that are useful to people.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
