import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import brand from '../../../../asset/images/trawell_logo_white.png'
import UserProfile from "./UserProfile";
import {AuthContext} from '../../../../AuthProvider/AuthProvider'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const {user} = useContext(AuthContext)

  return (
    <nav className="lg:absolute z-10 w-full bg-gray-800 lg:bg-transparent dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto  lg:my-3 rounded">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/"
              >
              <img src={brand} alt="" />
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setOpen(!isOpen)}
                type="button"
                className="text-white text-lg dark:text-gray-200 hover:text-slate-200 dark:hover:text-gray-400 focus:outline-none focus:text-slate-100 dark:focus:text-slate-200"
                aria-label="toggle menu"
              >
                  {
                     !isOpen ?
                     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                :
                
                <svg
                  
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                }
                

              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-10">
              <Link
                to="/"
                className="px-3 py-2 mx-6 lg:mr-2 mt-2 text-white font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-slate-200 dark:hover:bg-gray-700"
              >
                Join Slack
              </Link>
              <Link
                to="/"
                className="px-3 py-2 mx-6 lg:mr-2 mt-2 text-white font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-slate-200 dark:hover:bg-gray-700"
              >
                Browse Topics
              </Link>
              <Link
                to="/"
                className="px-3 py-2 mx-6 lg:mr-2 mt-2 text-white font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-slate-200 dark:hover:bg-gray-700"
              >
                Random Item
              </Link>
              <Link
                to="/"
                className="px-3 py-2 mx-6 lg:mr-2 lg:ml-0 mt-2 text-white font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-slate-200 dark:hover:bg-gray-700"
              >
                Experts
              </Link>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              {
                user?.uid?
                <div className="flex items-center -ml-1 lg:ml-0">
                <UserProfile />
                <h3 className="mx-2 text-white dark:text-gray-200 lg:hidden">
                  {user?.displayName}
                </h3>
              </div>
               :
               <>
               <Link to='/login'
                className=" mx-2 text-slate-50 transition-colors duration-300 transform font-semibold lg:block dark:text-gray-200 hover:text-slate-200 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                Login
              </Link>
               <Link to='/registration'
                className=" mx-2 text-slate-50 transition-colors duration-300 transform font-semibold lg:block dark:text-gray-200 hover:text-slate-200 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                Sign Up
              </Link>
              </>
              }
              

              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
