import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';
const Course = () => {
  return (
    <div className="min-h-screen flex flex-col pt-30 bg-gray-50 dark:bg-slate-900 dark:text-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 text-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          We are glad to have you <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
          Welcome to our learning platform! Here, you will find a variety of courses designed to improve your skills and expand your knowledge. Dive in, explore, and enjoy the learning journey we have prepared just for you.
        </p>
        <Link to='/'>
        <button className="bg-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded mt-6 hover:bg-pink-700 transition duration-200">
          Back
        </button>
        </Link>
      </div>

      {/* Cards Section */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-wrap justify-center gap-6">
          {list.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
