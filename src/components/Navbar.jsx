import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-black text-white shadow-lg">
            <div className="mx-auto px-8 lg:px-40 xl:px-48 py-2 lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <div className="w-48 font-bold text-3xl">
                        <a href="#">
                            <span className=" text-red-600">Joe</span>Fitness
                        </a>
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Navigation links */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } mt-4 lg:flex items-center text-center lg:mt-0`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:pr-8">
                        <a
                            href="#"
                            className=" hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium hover:text-lime-500"
                        >
                            Result
                        </a>
                        <a
                            href="#"
                            className=" hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium hover:text-lime-500"
                        >
                            Process
                        </a>
                        <a
                            href="#"
                            className=" hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium hover:text-lime-500"
                        >
                            About
                        </a>
                        <div className="flex flex-col justify-between mt-4 md:mt-0 gap-4 rounded-full hover:bg-white lg:flex-row">
                            <a
                                href="#"
                                className=" p-2 px-4 lg:flex rounded-xl font-medium xl:font-semibold text-white bg-black border-2 border-red-600"
                            >
                                Login

                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </nav>
    );
};
