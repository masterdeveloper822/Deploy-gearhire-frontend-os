import React, { createContext, useContext, useEffect, useState } from "react"

interface User {
    name: string;
    profileImage: string;
    role: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
<<<<<<< HEAD
    isLoading: boolean;
=======
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem("user");
        console.log("Loading user from localStorage:", stored);
        if (stored) {
            try {
                const userData = JSON.parse(stored);
                console.log("Parsed user data:", userData);
                setUser(userData);
            } catch (error) {
                console.error("Error parsing user data:", error);
                localStorage.removeItem("user");
            }
        }
        setIsLoading(false);
=======

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            setUser(JSON.parse(stored));
        }
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }
    return (
<<<<<<< HEAD
        <UserContext.Provider value={{ user, setUser, logout, isLoading }}>
=======
        <UserContext.Provider value={{ user, setUser, logout }}>
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const ctx = useContext(UserContext);
    if (!ctx) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return ctx;
}