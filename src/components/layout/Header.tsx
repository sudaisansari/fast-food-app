import React from 'react'
import { Button } from '../ui/button'
import Wrapper from '../shared/Wrapper'
import Logo from '/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { CgBitbucket } from 'react-icons/cg'

const Header = () => {
    return (
        <header className='sticky top-0 bg-black w-full mx-auto sm:px-20 z-50'>
            <Wrapper>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div>
                        <Image src={Logo} alt="Logo" />
                    </div>
                    {/* Navigation Buttons */}
                    <div className='flex justify-center space-x-8'>
                        <Link href={"/"}>
                            <button className='font-sans text-2xl font-semibold'>Home</button>
                        </Link>
                        <Link href={"/menu"}>
                            <button className='font-sans text-2xl font-semibold'>Menu</button>
                        </Link>
                        <Link href={"/about"}>
                            <button className='font-sans text-2xl font-semibold'>About Us</button>
                        </Link>
                    </div>
                    {/* Order Button */}
                    <div className='mx-1 items-center'>
                        <Button variant={"default"} className='bg-[#EA002A] hover:bg-[#ffffff] hover:text-[#EA002A] hover:translate-y-[2px] hover:ring-2 ring-[#EA002A] font-sans text-2xl font-semibold'>
                            Bucket
                            <CgBitbucket className='text-4xl font-semibold' />
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header