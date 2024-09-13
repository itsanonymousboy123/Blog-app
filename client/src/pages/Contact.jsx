import React from "react";
import GithubLogo from "../assets/images/github.png";
import LinkedinLogo from "../assets/images/linkedin.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        Contact Us
      </h1>
      <div className="flex flex-wrap justify-center gap-16 w-full max-w-7xl">
        <div className="w-full sm:w-[60%] md:w-[45%] lg:w-[35%] flex flex-col items-center bg-white rounded-3xl shadow-xl p-10 transition-transform transform hover:scale-105">
          <img className="w-32 h-32 object-contain mb-8" src={GithubLogo} alt="GitHub" />
          <a
            href="https://github.com/itsanonymousboy123"
            className="relative inline-flex items-center justify-center px-10 py-5 md:px-14 md:py-7 overflow-hidden font-sans font-semibold tracking-tighter text-white bg-gray-800 dark:bg-gray-900 rounded-lg group text-xl md:text-2xl"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-80 group-hover:h-80"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Github Profile</span>
          </a>
        </div>

        <div className="w-full sm:w-[60%] md:w-[45%] lg:w-[35%] flex flex-col items-center bg-white rounded-3xl shadow-xl p-10 transition-transform transform hover:scale-105">
          <img className="w-32 h-32 object-contain mb-8" src={LinkedinLogo} alt="LinkedIn" />
          <a
            href="https://www.linkedin.com/in/gaurav-dwivedi-46bb38223/"
            className="relative inline-flex items-center justify-center px-10 py-5 md:px-14 md:py-7 overflow-hidden font-sans font-semibold tracking-tighter text-white bg-gray-800 dark:bg-gray-900 rounded-lg group text-xl md:text-2xl"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-80 group-hover:h-80"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
