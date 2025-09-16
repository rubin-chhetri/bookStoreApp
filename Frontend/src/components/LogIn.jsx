import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function LogIn() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      {/* Always center the modal */}
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
                id="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 text-sm ">Email is required</span>}
            </div>

            {/* Password Field */}
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500 text-sm ">Password is required</span>}
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
                className="font-medium text-pink-600 dark:text-pink-400 hover:underline"
              >
                Sign Up
              </Link>
            </p>

            {/* Close Button */}
            <div className="modal-action mt-2">
              <button method="dialog" className="w-full">
                <Link to='/' className="btn btn-ghost w-full">Close</Link>
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default LogIn;
