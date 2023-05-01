import React from 'react'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTwitter, FaYoutube, FaLinkedin, FaPinterest, FaDiscord, FaSkype, FaLine } from 'react-icons/fa'
import LogoFooter from './LogoFooter';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className='flex justify-center items-center text-gray-500 mb-10 font-semibold tracking-widest'>
            <LogoFooter/>
        </div>

        <div className='flex justify-center items-center text-gray-500 mb-10 font-semibold uppercase tracking-widest text-center'>
            <p>
                <a href='/' className='hover:text-sky-400 transition-all duration-300 ease-out'>Virginia</a> / 
                <a href='/' className='hover:text-sky-400 transition-all duration-300 ease-out'> Denver</a> / 
                <a href='/' className='hover:text-sky-400 transition-all duration-300 ease-out'> Hamilton</a> / 
                <a href='/' className='hover:text-sky-400 transition-all duration-300 ease-out'> Amsterdam</a> / 
                <a href='/' className='hover:text-sky-400 transition-all duration-300 ease-out'> Ahmedabad</a>
            </p>
        </div>

        <div className="flex justify-center md:order-2 mb-16">
                <ul className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
                    <li>
                        <a
                        href="/"
                        id="facebook"
                        className="border-2 hover:border-blue-500 border-gray-600 bg-transparent text-2xl hover:bg-blue-500 text-gray-600 hover:text-white w-8 h-8 transform rounded-full duration-500 flex items-center justify-center"
                        >
                        <GrFacebookOption size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="instagram"
                        className="border-2 hover:border-pink-500 border-gray-600 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull text-gray-600 hover:text-white bg-transparent w-8 h-8  transform rounded-full duration-500 flex items-center justify-center"
                        >
                        <AiOutlineInstagram size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="whatsapp"
                        className="bg-transparent duration-500 w-8 h-8 border-2 rounded-full border-gray-600 hover:border-green-600 transform text-2xl hover:bg-green-600 text-gray-600 hover:text-white flex items-center justify-center"
                        >
                        <AiOutlineWhatsApp size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="twitter"
                        className="bg-transparent border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-400 hover:bg-blue-400 hover:text-white text-2xl flex items-center justify-center"
                        >
                        <FaTwitter size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="youtube"
                        className="bg-transparent transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-red-500 hover:bg-red-500 hover:text-white text-2xl flex items-center justify-center"
                        >
                        <FaYoutube size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="linkedin"
                        className="bg-transparent transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex items-center justify-center"
                        >
                        <FaLinkedin size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="pinterest"
                        className="bg-transparent transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-red-500 hover:bg-red-500 hover:text-white text-2xl flex items-center justify-center"
                        >
                        <FaPinterest size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="discord"
                        className="bg-transparent transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl flex justify-center items-center"
                        >
                        <FaDiscord size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="skype"
                        className="bg-transparent  transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-400 hover:bg-blue-400 hover:text-white text-2xl flex justify-center items-center"
                        >
                        <FaSkype size="1rem" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="/"
                        id="line"
                        className="bg-transparent transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-green-400 hover:bg-green-400 hover:text-white text-2xl flex justify-center items-center"
                        >
                        <FaLine size="1rem" />
                        </a>
                    </li>
                </ul>
            </div>


        <div className="md:flex md:items-center md:justify-between pb-10">

          <div className="flex justify-center md:order-2">
            <p className="text-center text-gray-400">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center md:order-1">
            <a href="/" className="inline-flex items-center justify-center px-4 py-2 border border-sky-400 text-base font-normal text-sky-400 bg-transparent hover:bg-sky-400 hover:text-white md:py-2 md:text-lg md:px-6 transition-all duration-300 delay-200 ease-out md:mt-0 mt-5">
                Subscribe
            </a>
          </div>

          <div className="flex justify-center md:order-3">
            <a href="/contact-us" className="inline-flex items-center justify-center px-4 py-2 border border-sky-400 text-base font-normal text-sky-400 bg-transparent hover:bg-sky-400 hover:text-white md:py-2 md:text-lg md:px-6 transition-all duration-300 delay-200 ease-out md:my-0 mt-5">
                Contact Us
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
