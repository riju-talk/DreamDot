import { useState } from 'react';
import Collections from "./Collections";
import Items from "./Items";
import Users from "./Users";
import { Revenue, Requests } from "./Deliveries";

export default function Home() {
    const [activeTab, setActiveTab] = useState("collections");

    const renderContent = () => {
        switch (activeTab) {
            case "collections":
                return <Collections />;
            case "items":
                return <Items />;
            case "orders":
                return <Requests />;
            case "creators":
                return <Revenue />;
            case "customers":
                return <Users />;
            default:
                return <Collections />;
        }
    };

    // A helper function to handle the dynamic class names
    const getButtonClass = (tabName: string) => {
        // If this button is the active one, give it a solid blue background.
        // Otherwise, give it the default background plus hover states.
        const isActive = activeTab === tabName;
        const baseClasses = "flex-1 font-bold py-2 px-4 border border-blue-500";
        const activeClasses = "bg-blue-700 text-white";
        const inactiveClasses = "bg-blue-100 text-black hover:bg-blue-700 hover:text-white";

        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    };

    return (
        <div className="container mx-auto py-28 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">DreamDot</h1>
            <p className="mt-4">Welcome to the Admin Dashboard</p>
            <div className="mt-8 w-full max-w-4xl mx-auto">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab("collections")}
                        className={`${getButtonClass("collections")} rounded-l focus:outline-slate-950`}
                    >
                        Collections
                    </button>
                    <button
                        onClick={() => setActiveTab("items")}
                        className={getButtonClass("items")}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab("orders")}
                        className={getButtonClass("orders")}
                    >
                        Blacklisted Users
                    </button>
                    <button
                        onClick={() => setActiveTab("creators")}
                        className={getButtonClass("creators")}
                    >
                        Creators
                    </button>
                    <button
                        onClick={() => setActiveTab("customers")}
                        className={`${getButtonClass("customers")} rounded-r`}
                    >
                        Customers
                    </button>
                </div>
            </div>
            <div className="mt-8 w-full max-w-4xl">
                {renderContent()}
            </div>
        </div>
    );
}
