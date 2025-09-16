
function About() {
  return (<>
  
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-6 py-10">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-700 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          About Us
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Welcome to <span className="font-semibold text-pink-500">Our Website</span>! 
          We are passionate about creating meaningful experiences and providing high-quality services to our users.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Our mission is to bring simplicity, efficiency, and elegance to everything we build. 
          With a focus on innovation and user satisfaction, we strive to deliver solutions that truly make a difference.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Whether you’re here to explore, learn, or connect, we’re glad to have you as part of our journey. 
          Our team is dedicated to constant improvement, adapting to modern technologies, and always putting our community first.
        </p>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-left inline-block">
            <li>✅ Dedicated and skilled team</li>
            <li>✅ User-first design and functionality</li>
            <li>✅ Constant updates and improvements</li>
            <li>✅ Commitment to quality and reliability</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
