"use client"

import React, { useState } from 'react';
import { Button } from '../ui/button';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { CgMenu } from 'react-icons/cg'; // Import menu icon
import { CgBitbucket } from 'react-icons/cg'; // Import bucket icon

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    return (
        <header className='sticky top-0 bg-black w-full mx-auto md:px-20 z-50'>
            <Wrapper>
                <div className='flex justify-between items-center'>
                    {/* Logo (visible on larger screens) */}
                    <div className="hidden lg:block ">
                        <Link href="/">
                            <Image src="/Logo.png" alt="Logo" width={130} height={10} />
                        </Link>
                    </div>
                    {/* Navigation Buttons (visible on larger screens) */}
                    <div className='hidden lg:flex justify-center space-x-8'> {/* Hide on small screens */}
                        <Link href={"/"}>
                            <button className='font-sans text-2xl hover:text-[#EA002A] font-semibold'>Home</button>
                        </Link>
                        <Link href={"/menu"}>
                            <button className='font-sans text-2xl hover:text-[#EA002A] font-semibold'>Menu</button>
                        </Link>
                        <Link href={"/about"}>
                            <button className='font-sans text-2xl hover:text-[#EA002A] font-semibold'>About Us</button>
                        </Link>
                    </div>
                    {/* Mobile Menu Icon */}
                    <div className='lg:hidden'>
                        <Button variant={"default"} onClick={toggleMenu}>
                            <CgMenu className='text-4xl font-semibol' />
                        </Button>
                    </div>
                    {/* Bucket Button (always visible) */}
                    <div>
                        <Button variant={"default"} className='bg-[#EA002A] hover:bg-[#ffffff] hover:text-[#EA002A] hover:translate-y-[2px] hover:ring-2 ring-[#EA002A] font-sans text-2xl font-semibold'>
                            Bucket
                            <CgBitbucket className='text-4xl font-semibold' />
                        </Button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`md:hidden rounded-md pb-4 pt-4 flex flex-col justify-center bg-[#1C1816] text-center mt-4 space-y-4 transition-all duration-500 ease-in-out ${isMenuOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                        <Link href={"/"} passHref>
                            <button className='font-sans text-2xl hover:text-[#EA002A] font-semibold' onClick={closeMenu}>Home</button>
                        </Link>
                        <Link href={"/menu"} passHref>
                            <button className='font-sans text-2xl hover:text-[#EA002A] font-semibold' onClick={closeMenu}>Menu</button>
                        </Link>
                        <Link href={"/about"} passHref>
                            <button className='font-sans text-2xl hover:text-[#EA002A] font-semibold' onClick={closeMenu}>About Us</button>
                        </Link>
                    </div>
                )}
            </Wrapper>
        </header>
    );
};

export default Header;