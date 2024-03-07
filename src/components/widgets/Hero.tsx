import React from 'react'
import { Button } from '../ui/button'
import HeroI from '/public/hero.jpeg'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'
import Link from 'next/link'

const Hero = () => {
    return (
        <Wrapper>
            <div className='mt-16 flex flex-col lg:flex-row md:items-center'>
                {/* Left Side Content */}
                <div className='w-1/2 mx-8 mt-4 animate-slide-down'>
                    {/* Heading */}
                    <h1 className="text-5xl w-auto tracking-wider font-bold mb-4 font-sans leading-tight">Unleashing <br /> Flavor at Your <br /> Fingertips</h1>
                    {/* Text */}
                    <p className='mt-8 text-lg max-w-md leading-8 font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the you can imagine industry's standard dummy text.</p>
                    {/* Button */}
                    <div className='mt-8 mx-2'>
                        <Link href={"/menu"}>
                            <Button variant={"default"} className='bg-[#EA002A] hover:bg-[#ffffff] hover:text-[#EA002A] hover:translate-y-[2px] hover:ring-2 ring-[#EA002A] font-sans text-2xl font-semibold'>
                                Explore Menu
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* Right Side Image */}
                <div className='mt-8 mx-8 animate-slide-right'>
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