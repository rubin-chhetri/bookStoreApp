
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const getInitialAuthUser = () => {
        try {
            const user = localStorage.getItem('Users');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error('Error parsing user data:', error);
            return null;
        }
    };

    const [authUser, setAuthUser] = useState(getInitialAuthUser);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);