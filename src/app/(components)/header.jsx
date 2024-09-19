export default function Header(){
    return (
        <header className="flex items-center justify-between p-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/dashboard">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard/pages">Pages</a>
                    </li>
                    <li>
                        <a href="/dashboard/settings">Settings</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}