import Link from "next/link";

export default function Header() {

    return (
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
                        <li><Link href={"/"}>Discover</Link></li>
                        <li><Link href={"/About"}>About</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                        <li><Link href={"/profile"}>More</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="pr-8 flex justify-center gap-4">
                <button className="text-black font-bold py-2 px-4 rounded outline outline-2">Login</button>
                <button className=" text-black font-bold py-2 px-4 rounded outline outline-2">Register</button>
            </div>
        </header>
    );
}