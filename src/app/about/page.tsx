import Wrapper from '@/components/shared/Wrapper'
import React from 'react'
import Image from 'next/image'
import Foodmaking from '/public/foodmaking.jpg'
import Foodmakingold from '/public/foodmakingold.png'



const page = () => {
  return (
    <Wrapper>
      <div className='mt-24'>
        <div className=''>
          <h1 className="text-5xl text-center tracking-wider font-bold mb-4 font-sans leading-tight">About Us</h1>
        </div>
        <div className='bg-[#1C1816] rounded-xl p-10 w-full mt-16'>
          {/* upper div */}
          <div className='flex flex-col lg:flex-row bg-[#EA002A] rounded-lg justify-center items-center'>
            {/* Right Image */}
            <div className='m-8 lg:w-auto'>
              <Image className='md:content-center'
                height={300}
                width={300}
                src={Foodmaking}
                alt='Hero image'
              />

            </div>
            {/* Left Text */}
            <div className='lg:w-1/2 w-full lg:text-left text-center'>
              <p className='font-extrabold text-3xl italic'>
                Hygienic Food
              </p>
              <p className='lg:mt-8 mt-4 text-xl max-w-auto leading-8 font-sans mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero eligendi quibusdam quaerat. Numquam eveniet neque eum nam officiis totam assumenda, sunt iusto quod aperiam quas dignissimos iste, voluptates excepturi.
              </p>
            </div>
          </div>
          {/* lower div */}
          <div className='flex flex-col lg:flex-row mt-16 bg-[#EA002A] rounded-lg justify-center items-center'>
            {/* Right Text */}
            <div className='lg:w-1/2 mt-8 w-full lg:text-left text-center'>
              <p className='font-extrabold text-3xl italic'>
                Rich History
              </p>
              <p className='lg:mt-8 mt-4 text-xl max-w-auto leading-8 font-sans '>
                dolor sit amet consectetur adipisicing elit. Eaque libero eligendi quibusdam quaerat. Numquam eveniet neque eum nam officiis totam assumenda, sunt iusto quod aperiam quas dignissimos iste, voluptates excepturi.
              </p>
            </div>
            {/* Left Image */}
            <div className='lg:w-auto m-8'>
              <Image className='md:content-center'
                height={300}
                width={300}
                src={Foodmakingold}
                alt='Hero image'
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default page