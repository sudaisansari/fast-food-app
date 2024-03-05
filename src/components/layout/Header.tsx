import React from 'react'
import { Button } from '../ui/button'
import Wrapper from '../shared/Wrapper'
import Logo from '/public/logo.png'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='sticky top-0 z-10'>
            <Wrapper>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div>
                        <Image src={Logo} alt="Logo" />
                    </div>
                    {/* Navigation Buttons */}
                    <div className='flex justify-center space-x-8'>
                        <button className='font-sans'>Home</button>
                        <button className='font-sans'>Services</button>
                        <button className='font-sans'>Contact</button>
                    </div>
                    {/* Order Button */}
                    <div>
                    <Button variant={"default"} className='bg-[#EA002A] hover:bg-[#ffffff] hover:text-[#EA002A] hover:translate-y-[2px] hover:ring-2 ring-[#EA002A] font-sans'>Order Now</Button>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header