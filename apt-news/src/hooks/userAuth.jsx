import { createContext,useContext, useEffect, useState } from "react";
import axiosCline from "../api/axiosClient";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([null]);
    const [loading, setLoading] = useState([false]);
    const [error, setError] = useState([true]); 

    const getUser = async () => {
        try {
            const res = await axiosCline.get("/api/auth/me");
            setUser(res.data.user);
            return res.data.user;
        } catch (err) {
            setError(err.response?.data?.message || "failed to fetch user");
            setUser(null);
            return null;
        } finally {
            setLoading(false);
        }
    }; 

    const login = async (email, password) => {
        try{
            await axiosCline.get("/sanctum/csrf-cookie");
            await axiosCline.post("/api/auth/login", { email, password}, { Header : {"Accept" : "text/html"} });
            getUser();
            return "success";
        } catch (err) {
            console.error("Login error :", err.response?.data);
            setError(err.response?.data?.message || "Login failed");
        }
    }; 

    const logout = async () => {
        try {
            const res = await axiosCline.post("/api/auth/logout", {}, {
                headers: { "Accept" : "text/html" }
            }); 
            console.log("Logout response:", res.data);
            setUser(null);
        } catch (err) {
            setError(err.response?.data?.message || "Logout failed");
        }
    }; 

    useEffect(() => {
        getUser();
    }, []); 

    return (
        <AuthContext.Provider value={{ user, error, login, logout, getUser, loading}}>
             {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);