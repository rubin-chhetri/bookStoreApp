import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900 px-4 py-12">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Contact Me
        </h1>

        <p className="text-center text-gray-700 dark:text-gray-200 mb-6">
          I’d love to hear from you! Whether you have questions, business inquiries, or just want to say hi, feel free to reach out through any of the following channels:
        </p>

        <div className="space-y-4 text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h2a2 2 0 0 1 2 2v4H4v-4a2 2 0 0 1 2-2h2"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0 0V8m0 4h4m-4 0H8"></path>
            </svg>
            <span>Email: <a href="mailto:yourname@example.com" className="text-pink-500 hover:underline">rubeen.adhikari2017@gmail.com</a></span>
          </div>

          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1.68 5.37a2 2 0 0 0 1.94 1.63h7.76a2 2 0 0 0 1.94-1.63L19 5h2"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 17a4 4 0 0 1-8 0"></path>
            </svg>
            <span>Phone: <a href="tel:+1234567890" className="text-pink-500 hover:underline">+977-9806691289</a></span>
          </div>

          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7-5 7 5v8l-7 5-7-5V8z"></path>
            </svg>
            <span>Address: Gharipatan-17 Pokhara, Nepal</span>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-700 dark:text-gray-200">
          <p>
            You can also reach me via social media or follow my work online:
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.instagram.com/rubin_adhikari/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/rubin-chhetri-4b62422a5/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/rubin-chhetri" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-blue-500 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
