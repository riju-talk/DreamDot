

export default function Header(){

    return (
        <header className="flex items-center justify-around p-4 text-black bg-slate-100">
            <div className="pl-8 font-bold flex flex-row gap-2">
            <div>
            <span className="material-symbols-outlined">
                auto_stories
            </span>
            </div>
            <div>
                Pages
            </div>
            </div>
            <div className="w-4/12">
            <nav>
                <ul className="flex justify-around">
                    <li>Home</li>
                    <li>Profile</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </div>
            <div className="pr-8">
                <button className="text-black font-bold py-2 px-4 rounded outline outline-2 mr-2">Login</button>
                <button className=" text-black font-bold py-2 px-4 rounded outline outline-2 ml-2">Register</button>
            </div>
        </header>
    );
}