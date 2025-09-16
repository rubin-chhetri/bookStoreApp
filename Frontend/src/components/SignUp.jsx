
import { useNavigate } from "react-router-dom";
import LogIn from "./LogIn";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [authUser, setAuthUser] = useAuth(); // Add context

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
        name: data.name,
        email: data.email,
        password: data.password
      });
      
      console.log('Signup successful:', response.data);
      
      toast.success('Account created successfully!');
      
      // Optionally auto-login user after signup
      if (response.data.user) {
        localStorage.setItem('Users', JSON.stringify(response.data.user));
        setAuthUser(response.data.user); // Update context for immediate login
      }
      
      navigate('/'); // Navigate to home page
      
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      
      // Handle different types of errors
      if (error.response?.status === 409) {
        toast.error('User already exists with this email');
      } else if (error.response?.status === 400) {
        toast.error('Please check your input and try again');
      } else {
        toast.error('Failed to create account. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="w-full max-w-md px-6 py-8 bg-white dark:bg-slate-800 rounded-lg shadow-md">
        <h3 className="font-bold text-2xl text-center mb-6 text-gray-800 dark:text-white">
          Sign Up
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Name Field */}
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="input input-bordered w-full focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700 dark:text-gray-200">
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
            <label htmlFor="password" className="mb-1 font-medium text-gray-700 dark:text-gray-200">
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

          {/* Sign Up Button */}
          <button type="submit" className="btn btn-primary w-full mt-2">
            Sign Up
          </button>

          {/* Already Have an Account */}
          <p className="text-sm text-center mt-2 text-gray-700 dark:text-gray-200">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => document.getElementById("sign_in").showModal()}
              className="text-pink-500 hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Log In
            </button>
          </p>

          {/* Close Button at Bottom Center */}
          <div className="flex justify-center w-full">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-ghost"
            >
              Close
            </button>
          </div>
        </form>
      </div>

      {/* Modal kept outside the form */}
      <LogIn />
    </div>
  );
}

export default SignUp;