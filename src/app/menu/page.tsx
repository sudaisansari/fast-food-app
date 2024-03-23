"use client"


// Import necessary libraries
import Wrapper from '@/components/shared/Wrapper';
import ProductCard from '@/components/shared/ProductCard';
import { productsData } from '@/components/shared/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const Services = () => {
  return (
    <Wrapper>
      <div>
        {/* Regular Meal */}
        <div className='mt-32'>
          <div className='mx-10'>
            <h2 className='text-5xl w-auto tracking-wider font-bold mb-4 font-sans leading-tight'>
              Reguler Meal
            </h2>
            <span className="mx-1 block h-1 w-16 bg-gradient-to-r from-[#dd1818] to-[#333333]"></span>
          </div>
          <div className='mt-8 grid md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] justify-start gap-x-16 mx-4'>
            {productsData.map((product) => (
              <div className="">
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Promotions */}
        <div className='mt-32'>
          <div className='mx-10'>
            <h2 className='text-5xl w-auto tracking-wider font-bold mb-4 font-sans leading-tight'>
              Promotions
            </h2>
            <span className="mx-1 block h-1 w-16 bg-gradient-to-r from-[#dd1818] to-[#333333]"></span>
          </div>
          <div className='mt-8 grid md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] justify-start gap-x-16 mx-4'>
            {productsData.map((product) => (
              <div className="">
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>


        {/* Combo Deals */}
        <div className='mt-32'>
          <div className='mx-10'>
            <h2 className='text-5xl w-auto tracking-wider font-bold mb-4 font-sans leading-tight'>
              Combo Deals
            </h2>
            <span className="mx-1 block h-1 w-16 bg-gradient-to-r from-[#dd1818] to-[#333333]"></span>
          </div>
          <div className='mt-8 grid md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] justify-start gap-x-16 mx-4'>
            {productsData.map((product) => (
              <div className="">
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;