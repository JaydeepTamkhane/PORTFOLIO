import React from "react";
import { FaLink } from "react-icons/fa";

function DsaCp() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center px-4 py-6 ">
      {/* LeetCode Card */}
      <div className="flex flex-col justify-between items-center gap-6 transform transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-lg border-2 border-gray-600 rounded-xl w-[90%] sm:w-full max-w-2xl p-6 text-gray-200 md:min-h-[500px]">
        <img
          src="https://leetcard.jacoblin.cool/jaydeeptamkahne?theme=dark&ext=contest"
          alt="LeetCode Stats"
          className="rounded-xl w-full max-w-md h-[200px] md:h-[400px] object-contain"
        />
        <a
          href="https://leetcode.com/jaydeeptamkahne/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl border-2 border-gray-600 px-6 py-2 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:bg-gray-100 hover:text-black w-2/3"
        >
          <FaLink />
          Visit
        </a>
      </div>

      {/* CodeChef Card */}
      <div className="flex flex-col justify-between items-center gap-6 transform transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-lg border-2 border-gray-600 rounded-xl w-[90%] sm:w-full max-w-2xl p-6 text-gray-200 md:min-h-[500px]">
        <img
          src="https://codechef-readme-stats.onrender.com/jaydeeptamkahn?v=1"
          alt="CodeChef Stats"
          className="rounded-xl w-full max-w-md h-[200px] md:h-[400px] object-contain"
        />
        <a
          href="https://www.codechef.com/users/jaydeeptamkahn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl border-2 border-gray-600 px-6 py-2 text-lg transition-all duration-300 hover:scale-105 hover:border-white hover:bg-gray-100 hover:text-black w-2/3"
        >
          <FaLink />
          Visit
        </a>
      </div>
    </div>
  );
}

export default DsaCp;
