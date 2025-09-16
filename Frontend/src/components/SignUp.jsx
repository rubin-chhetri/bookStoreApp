import { useNavigate } from "react-router-dom";
import LogIn from "./LogIn";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="w-full max-w-md px-6 py-8 bg-white dark:bg-slate-700 rounded-lg shadow-md">
        <h3 className="font-bold text-2xl text-center mb-6 text-gray-800 dark:text-white">
          Sign Up
        </h3>

        <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            {errors.name && <span className="text-red-500 text-sm ">Name is required</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700 dark:bg-slate-700 dark:border-slate-600 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
             {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm ">Email is required</span>}
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
              className="input input-bordered w-full focus:outline-none text-gray-700 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500 text-sm ">Password is required</span>}
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="btn btn-primary w-full mt-2">
            Sign Up
          </button>

          {/* Already Have an Account */}
          <p className="text-sm text-center mt-2 text-gray-700 dark:text-gray-200">
            Already have an account?{" "}
            <button
              type="button"   // ✅ prevents form submit
              onClick={() => document.getElementById("sign_in").showModal()}
              className="text-pink-500 hover:underline"
            >
              Log In
            </button>
          </p>

          {/* Close Button at Bottom Center */}
          <div className="flex justify-center  w-full">
            <button
              type="button"   // ✅ prevents form submit
              onClick={() => navigate("/")}
              className="btn btn-ghost"
            >
              Close
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Keep modal outside the form */}
      <LogIn />
    </div>
  );
}

export default SignUp;
