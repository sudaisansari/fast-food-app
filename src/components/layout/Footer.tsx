import React from 'react'
import Wrapper from '../shared/Wrapper'
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai"

const Footer = () => {
    return (
        <Wrapper>
            <div className='bg-black w-full mt-32 flex flex-col gap-y-4 py-2 md:flex-row items-center justify-between'>
                {/* Created By */}
                <div className='font-sans text-xl mx-4 text-white  hover:text-[#EA002A]'>Created By Sudais Ansari</div>
                {/* Links */}
                <div className='flex flex-row gap-x-8 mx-4'>
                    <a
                        href="https://www.linkedin.com/in/sudais-ansari-907930247"
                        rel="noreferrer"
                        target="_blank">
                        <AiFillLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-blue-400"
                            size={56}
                        />
                    </a>
                    <a href="https://github.com/sudaisansari"
                        rel="noreferrer"
                        target="_blank">
                        <AiFillGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-white"
                            size={56}
                        />
                    </a>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer