import React from 'react'
import { FaCopyright, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-black text-white px-8 lg:px-40 xl:px-48 py-8 gap-8 flex flex-col
         border-t-red-800 border-t-4'>
            <div className='flex flex-col md:flex-row items-center md:justify-between gap-4 '>
                <div className='text-2xl font-bold flex items-center' >
                    <h1><span className=' text-red-500'>Joe</span>Fitness</h1>
                </div>
                <div className=' flex flex-col md:flex-row gap-4 md:gap-10 text items-center'>
                    <a href="#">
                        Result
                    </a>
                    <a href="#">
                        Process
                    </a>
                    <a href="#">
                        About
                    </a>
                    <a className=' rounded border-2 px-4 py-2 border-red-500' href="#">
                        Login
                    </a>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center md:justify-between gap-4 '>
                <div className='flex gap-2 justify-center items-center text-center'><FaCopyright />JOEFITNESS 2023 , ALL RIGHTS RESERVED.</div>
                <div className='flex gap-6'>
                <a href="#"><FaFacebookF className=' text-red-500' /></a> 
                <a href="#"><FaTwitter className=' text-red-500' /> </a>
                <a href="#"><FaInstagram className=' text-red-500' /> </a>
                <a href="#"><FaLinkedin className=' text-red-500' /></a>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row items-center md:justify-between gap-4 '>
                <div>
                    <p>Made with love by Manpreet.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-4 '>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of use</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
