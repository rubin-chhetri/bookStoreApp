import { Link , useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

function LogIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [authUser, setAuthUser] = useAuth(); // Add context
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/login', {
        email: data.email,
        password: data.password
      });
      
      console.log('Login successful:', response.data);
      
      // Store user data in localStorage
      localStorage.setItem('Users', JSON.stringify(response.data.user));
      
      // Update context immediately - this triggers navbar re-render
      setAuthUser(response.data.user);
      
      toast.success('Login successful!');
      document.getElementById("sign_in").close(); // Close the modal
      navigate('/');
      // Remove page reload - context will handle UI updates
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      
      // Handle different types of errors
      if (error.response?.status === 401) {
        toast.error('Invalid email or password');
      } else if (error.response?.status === 404) {
        toast.error('User not found. Please check your email or sign up.');
      } else if (error.response?.status === 400) {
        toast.error('Please enter valid email and password');
      } else {
        toast.error('Login failed. Please try again.');
      }
    }
  };
  
  return (
    <div>
      <dialog id="sign_in" className="modal modal-middle">
        <div className="modal-box w-full max-w-xs px-6 py-6 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-lg">
          <h3 className="font-bold text-2xl text-center mb-6">Log In</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
            {/* Email Field */}
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
              
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            {/* Password Field */}
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
              
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
            >
              Log In
            </button>

            {/* Sign Up Link */}
            <p className="text-sm text-center mt-2">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                onClick={() => document.getElementById("sign_in").close()}
                className="font-medium text-pink-600 dark:text-pink-400 hover:underline"
              >
                Sign Up
              </Link>
            </p>

            {/* Close Button */}
            <div className="modal-action mt-2 w-full">
              <button
                type="button"
                onClick={() => document.getElementById("sign_in").close()}
                className="btn btn-ghost w-full"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default LogIn;