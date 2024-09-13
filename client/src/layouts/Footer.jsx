import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer container className="text-center border-t bg-gray-900 text-white py-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="text-lg sm:text-xl font-semibold">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white"
            >
              <span className="px-3 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                Gaurav's
              </span>
              <span>Blog</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-4 lg:mt-0">
            <div className="flex flex-col items-start">
              <Footer.Title title="About" className="text-white" />
              <Footer.LinkGroup className="flex flex-col items-start">
                <Link to={'/about'} className="hover:text-pink-500">
                  Gaurav's Blog
                </Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex flex-col items-start">
              <Footer.Title title="Follow us" className="text-white" />
              <Footer.LinkGroup className="flex flex-col items-start">
                <a
                  href="https://github.com/itsanonymousboy123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  Github
                </a>
              </Footer.LinkGroup>
            </div>
            <div className="flex flex-col items-start">
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup className="flex flex-col items-start">
                <a href="#" className="hover:text-pink-500">
                  Privacy Policy
                </a>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="my-8 border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <Footer.Copyright
            href="#"
            by="Gaurav Dwivedi"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-pink-500">
              <BsFacebook size={24} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <BsInstagram size={24} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <BsTwitter size={24} />
            </a>
            <a href="https://github.com/itsanonymousboy123" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <BsGithub size={24} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <BsDribbble size={24} />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
