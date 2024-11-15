import Link from "next/link";

export default function Home() {
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
                <div className="w-4/12">
                    <nav>
                        <ul className="flex justify-around">
                            <li><Link href={"#discover"}>Discover</Link></li>
                            <li><Link href={"#about"}>About</Link></li>
                            <li><Link href={"#communities"}>Communities</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="pr-8 flex justify-center gap-4">
                    <button className="text-black font-bold py-2 px-4 rounded outline outline-2">Login</button>
                    <button className=" text-black font-bold py-2 px-4 rounded outline outline-2">Register</button>
                </div>
            </header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <section id="discover" className="text-center">
                    <h1 className="text-4xl font-bold">Welcome to Pages</h1>
                    <p className="text-lg">A social blogpost without any nonsence</p>
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

                </section>
            </main>
            <footer className="p-4 bg-zinc-700 text-white max-h-full h-3/4">
                <div className="flex flex-shrink flex-wrap justify-between px-4 h-56">
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
                    <div className="items-center p-8 w-1/3">
                        <h3 className="text-lg font-bold">Learn More</h3>
                        <p>Discover</p>
                        <p>Communities</p>
                    </div>
                    <div className="flex items-center pr-8 w-1/3">
                        <h3 className="text-lg font-bold">Connect with us</h3>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
