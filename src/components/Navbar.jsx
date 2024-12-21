import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo.png"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex bg-[#08377b] text-white items-center p-2 justify-between max-sm:justify-center'>
        <div className='flex items-center text-center mx-3 justify-center cursor-pointer text-sm font-semibold'>
          <MdOutlineEmail className='font-bold text-[20px] ml-2 mr-1 max-[325px]:ml-0' />
          <p>rsshinde25@gmail.com</p>

          <FaPhoneAlt className='font-bold ml-4 mr-1' />
          <p>07387758523</p>
        </div>

        <div className=' sm:flex items-center text-center mx-3 justify-center cursor-pointer hidden'>
          <FaFacebook className='font-bold text-[19px] ml-2 mr-1' />
          <FaWhatsapp className='font-bold text-[20px] ml-2 mr-6' />
        </div>

      </div>



      <nav className="bg-white w-full z-20  border-b border-gray-200">
        <div className="flex items-center justify-between p-4 max-sm:p-2 flex-col xl:flex-row">
          <div className='flex flex-row gap-2 items-center'>
          <img src={Logo} alt=""  className="w-[400px] max-sm:w-[300px] max-[325px]:w-[250px]"/>
          <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto  md:order-1 ${isMenuOpen ? "block" : "hidden"
              }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li className="block  py-2 px-3  text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                  Home
              </li>
              <li
                  className="block py-2 px-3 max-md:px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                
              </li>
              <li
                  className="block py-2 px-3 max-md:px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Academics
               
              </li>
              <li
                  className="block py-2 px-3 max-md:px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Department
               
              </li>
              <li
                
                  className="block py-2 px-3 max-md:px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Administration
                
              </li>
              <li
                  className="block py-2 px-3 max-md:px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Activity
              
              </li>

              <li
                  className="block py-2 px-3 max-md:px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Gallery
               
              </li>


              <li
                  className="block py-2 px-3 max-md:px-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
               
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar
