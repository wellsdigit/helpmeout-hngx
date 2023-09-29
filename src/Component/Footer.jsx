import React from 'react';
import Logo from '../assets/images/logo-dark.png'

function Footer() {
  return (
    <footer className="bg-[#120B48] px-8 md:px-20 py-20 text-white">
        <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                <img
                    src={Logo}
                    className="mr-3 mb-12 min-w-[20px] max-w-[35%] md:max-w-[30%]"
                    alt="Logo"
                />
                </a>
            </div>
            <div className="grid grid-cols-2 gap-16 sm:gap-48 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-base font-semibold capitalize text-white">
                        Menu
                    </h2>
                    <ul className="text-white font-medium">
                        <li className="mb-4">
                        <a href="#" className="hover:underline text-sm font-light">
                            Home
                        </a>
                        </li>
                        <li className="mb-4">
                        <a href="#" className="hover:underline text-sm font-light">
                            Converter
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline text-sm font-light">
                            How it Works
                        </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-base font-semibold capitalize text-white">
                        About us
                    </h2>
                    <ul className="text-white font-medium">
                        <li className="mb-4">
                        <a href="#" className="hover:underline text-sm font-light">
                            About
                        </a>
                        </li>
                        <li className="mb-4">
                        <a href="#" className="hover:underline text-sm font-light">
                            Contact Us
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline text-sm font-light">
                            Privacy Policy
                        </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-base font-semibold capitalize text-white">
                        Screen Record
                    </h2>
                    <ul className="text-white font-medium">
                        <li className="mb-4">
                        <a href="#" className="hover:underline text-sm font-light">
                            Browser Window
                        </a>
                        </li>
                        <li className="mb-4">
                        <a href="#" className="hover:underline text-sm font-light">
                            Desktop
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline text-sm font-light">
                            Application
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;