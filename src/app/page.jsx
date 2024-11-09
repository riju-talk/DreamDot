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
                        <li><Link href={"#contact"}>Contact</Link></li>
                        <li><Link href={"#more"}>More</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="pr-8 flex justify-center gap-4">
                <button className="text-black font-bold py-2 px-4 rounded outline outline-2">Login</button>
                <button className=" text-black font-bold py-2 px-4 rounded outline outline-2">Register</button>
            </div>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section id="discover">
            <h1 className="text-4xl font-bold">Welcome to Pages</h1>
            <p className="text-lg">This is a simple page with a header and footer</p>
        </section>
        <section id="about">
            <h2>
                We are a not a social media
            </h2>
            <p>A safe space for writers and creative folks to connect and share.</p>
            <p>THis is your place, It doesn't matter who you are</p>
        </section>
        <section id="contact">

        </section>
        <section id="more">

        </section>
    </main>
    <footer></footer>
    </>
  );
}
