import React from 'react'
import { Button } from '../ui/button'
import HeroI from '/public/hero.jpeg'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'
import Link from 'next/link'

const Hero = () => {
    return (
        <Wrapper>
            <div className='mt-16 flex flex-col lg:flex-row md:items-center '>
                {/* Left Side Content */}
                <div className='md:w-1/2 mt-4 w-full text-center md:text-left animate-slide-down'>
                    {/* Heading */}
                    <h1 className="bg-gradient-to-r from-[#dd1818] to-[#333333]  inline-block text-transparent bg-clip-text text-5xl text-center md:text-left w-auto tracking-wider font-bold mb-4 font-sans leading-tight">Unleashing <br /> Flavor at Your <br /> Fingertips</h1>
                    {/* Text */}
                    <div>
                        <p className='mt-8 text-xl text-center md:text-left  w-full max-w-md leading-8 font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the you can imagine industry's standard dummy text.</p>
                    </div>
                    {/* Button */}
                    <div className='mt-8 mx-2'>
                        <Link href={"/menu"}>
                            <Button variant={"default"} className='bg-[#EA002A]  hover:bg-[#ffffff] hover:text-[#EA002A] hover:translate-y-[2px] hover:ring-2 ring-[#EA002A] font-sans text-2xl font-semibold'>
                                Explore Menu
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* Right Side Image */}
                <div className='mt-8 hidden md:block mx-8 animate-slide-right'>
                    <Image className='md:content-center'
                        height={400}
                        width={500}
                        src={HeroI}
                        alt='Hero image'
                    />
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero