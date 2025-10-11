import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user-info")) || null);

    const value = {
        authUser,
        setAuthUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};