import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import "./nav.css";
import Home from "../home/home";

const Nav = () => {
  /* Functionality */

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /* Tailwind jsx */
  return (
    <div className="">
      <nav class="px-2 bg-gray-900/50 sm:px-4 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" class="flex items-center">
            <img
              src={Logo}
              width={70}
              className="md:w-20 w-12"
              alt="Flowbite Logo"
            />
          </a>
          <div class="flex md:order-2">
            <button
              type="button"
              class="text-cyan-300 border tracking-widest border-cyan-300 hover:bg-red-50/10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 pt-2.5 pb-2  text-center mr-3 md:mr-0 ">
              Resume
            </button>
            {/* responsive button */}
            <button
              onClick={toggleMenu}
              id="btn"
              data-dropdown-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>

          {/* List MENU'S */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:block items-center justify-between w-full md:order-1 md:w-auto bg-gray-900/60 rounded-3xl`}
            id="navbar-sticky">
            <ul
              role={"none"}
              class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <a
                  href={Home}
                  class="block py-2 pl-3 cursor-pointer pr-4 text-cyan-300 bg-blue-700 rounded md:bg-transparent md:p-0 "
                  aria-current="page">
                  <span className="text-cyan-300">01.</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <span className="text-cyan-300">02.</span> Experience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <span className="text-cyan-300">03.</span> Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <span className="text-cyan-300">04.</span> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
