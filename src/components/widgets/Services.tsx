"use client"


// Import necessary libraries
import React, { useRef, useEffect } from 'react';
import Wrapper from '../shared/Wrapper';
import ProductCard from '../shared/ProductCard';
import { productsData } from '@/components/shared/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const Services = () => {
  const animatedContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animatedContainerRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Adjust this threshold based on when you want the animation to start
        const threshold = window.innerHeight / 2;

        // Check if the container is in the viewport
        if (
          !animatedContainerRef.current.classList.contains('animate') &&
          scrollTop > (animatedContainerRef.current.offsetTop || 0) - threshold
        ) {
          animatedContainerRef.current.classList.add('animate');
        }
      }
    };

    // Check visibility on component mount
    handleScroll();

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <div ref={animatedContainerRef} className='mb-20 mx-10 mt-32 services-container'>
        <div className='mx-10'>
          <h2 className='text-5xl tracking-wider font-bold mb-4 font-sans leading-tight'>
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
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{ delay: 2000 }}
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="">
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