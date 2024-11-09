


export default function Header(){

    return (
        <header className="flex items-center justify-around p-4 text-white">
            <div className="pl-8 font-bold" >Pages</div>
            <div className="flex-1">
            <nav>
                <ul className="flex justify-evenly">
                    <li>Home</li>
                    <li>Profile</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </div>
            <div className="pr-8">
                <button className="text-white font-bold py-2 px-4 rounded">Login</button>
                <button className=" text-white font-bold py-2 px-4 rounded">Register</button>
                <></>
            </div>
        </header>
    );
}