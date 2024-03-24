"use client"


// Import necessary libraries
import Wrapper from '../shared/Wrapper';
import ProductCard from '../shared/ProductCard';
import { productsData } from '@/components/shared/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const Services = () => {
  return (
    <Wrapper>
      <div className='mb-20 mt-32'>
        <div className='mx-10'>
          <h2 className='text-5xl w-auto tracking-wider font-bold mb-4 font-sans leading-tight'>
            Best Selling
          </h2>
          <span className="mx-1 block h-1 w-16 bg-gradient-to-r from-[#dd1818] to-[#333333]"></span>
        </div>
        <div className='mt-8'>
          <Swiper
            spaceBetween={5}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            autoplay={{ delay: 2000 }}
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.id}>
                <div key={product.id} className="">
                  <ProductCard
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;