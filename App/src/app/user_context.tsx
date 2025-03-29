"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    id: string;
    name: string;
    user_name: string;
    email: string;
    profile_picture: string;
    bio: string;
    website: string;
    country: string;
    phone: string;
    date_of_birth: string;
    website_url: string;
    social_links: any;
    // Add other user properties as needed
}

interface UserContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
