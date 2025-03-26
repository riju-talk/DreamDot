import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Admin Dashboard</div>
                <div className="space-x-4">
                    <Link to={'/'} className="text-gray-300 hover:text-white">Home</Link>
                    <Link to={'/about'} className="text-gray-300 hover:text-white">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;