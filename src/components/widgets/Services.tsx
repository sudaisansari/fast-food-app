"use client"

import Wrapper from '../shared/Wrapper';
import ProductCard from '../shared/ProductCard';
import { productsData } from '@/components/shared/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { cn } from '@/lib/utils';

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
        <div
          className={cn(
            "scroller relative z-20 mt-8 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          )}
        >
          <Swiper
            spaceBetween={5}
            loop={true}
            autoplay={{ delay: 1000 }}
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
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
