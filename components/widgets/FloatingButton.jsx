"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoIosArrowUp } from "react-icons/io";

const FloatingButton = () => {

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <Link href="/get-directions">
            <button
                className={`fixed bottom-[90px] md:right-4 right-4 p-4 md:p-6 z-30 drop-shadow-2xl 
              rounded-full bg-[#1c1c1c] text-white cursor-pointer 
              transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#2a2a2a]`}
            >
                <FaMapLocationDot className="text-4xl" />
            </button>
        </Link>
    );
};

export default FloatingButton;

