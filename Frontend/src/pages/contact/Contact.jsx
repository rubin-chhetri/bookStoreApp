import { useForm } from "react-hook-form";


function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("Contact form submitted:", data);
    alert("Your message has been sent!");
  };

  return (
    <>
 
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-6 py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-700 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Have questions, feedback, or need support? Fill out the form below and we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="input input-bordered w-full dark:bg-slate-600 dark:border-slate-500 dark:text-white"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input input-bordered w-full dark:bg-slate-600 dark:border-slate-500 dark:text-white"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows="5"
              className="textarea textarea-bordered w-full dark:bg-slate-600 dark:border-slate-500 dark:text-white"
              {...register("message", { required: "Message cannot be empty" })}
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full mt-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
