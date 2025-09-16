
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    
    const handleLogout = () => {
        try {
            // Clear localStorage
            localStorage.removeItem('Users');
            localStorage.removeItem('token'); // Remove token if you store it
            
            // Update context immediately - this triggers navbar re-render
            setAuthUser(null);
            
            toast.success('Logout successful!');
            
            // Remove page reload - context will handle UI updates
            
        } catch (error) {
            console.error('Logout error:', error);
            toast.error('Logout failed. Please try again.');
        }
    };

    return (
        <div>
            <button 
                onClick={handleLogout} 
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition-colors"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
