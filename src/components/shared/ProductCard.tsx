import Image from 'next/image'
import React from 'react'
import Burger from '/public/burger.png'

const ProductCard = (
    props: {
        price: number,
        image: any,
        title: string,
        id: string
    }
) => {
    return (
        <div id={props.id} className='mt-4 mb-2 w-60 items-center h-80 bg-[#1C1816] text-center rounded-xl'>
            <div className='bg-[#EA002A] w-24 mx-[72px] rounded-b-md'>
                <p>
                    $<span className='text-2xl mx-1 font-semibold '>{props.price}</span>
                </p>
            </div>
            <div className='mx-1'>
                <Image
                    width={250}
                    height={300}
                    src={props.image}
                    className=''
                    alt='Male Products' />
            </div>
            <div className='mb-4'>
                <p className='font-extrabold text-xl italic'>{props.title}</p>
            </div>
        </div>
    )
}

export default ProductCard