import Image from 'next/image'
import React from 'react'
import { CgBitbucket } from 'react-icons/cg'


const ProductCard = (
    props: {
        price: number,
        image: any,
        title: string,
        id: string
    }
) => {
    return (
        <div id={props.id} className='mt-4 mx-10 mb-2 w-auto max-w-64 h-auto items-center bg-[#1C1816] text-center rounded-xl overflow-hidden'>
            <button>
                <div className='bg-[#EA002A] w-12 mx-auto rounded-b-md hover:bg-white animate-slide-down'>
                    <CgBitbucket className='text-4xl text-white hover:text-[#EA002A] items-center mx-[5px] font-semibold' />
                </div>
            </button>
            <div className='mx-auto transform hover:scale-105 transition-transform'>
                <Image
                    width={250}
                    height={300}
                    src={props.image}
                    className=''
                    alt='Product Card'
                />
            </div>

            <div className='mb-4 mx-[1px]'>
                <p className='font-extrabold text-xl italic'>{props.title}</p>
            </div>

            <div className='bg-[#EA002A] w-24 mx-auto rounded-t-md animate-slide-up'>
                <p>
                    $<span className='text-2xl mx-1 font-semibold'>{props.price}</span>
                </p>
            </div>
        </div>

    )
}

export default ProductCard