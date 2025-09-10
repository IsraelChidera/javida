"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Image from 'next/image';

const Sliders = () => {
  return (
    <div>
      <div >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          speed={1000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          breakpoints={{
            200: {
              slidesPerView: 2.5,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 0
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 0
            }
          }}
          loop={true}
          allowTouchMove={false}
          centeredSlides={true}
          className="h-full"
        >

          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-2.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-6.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>

          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-7.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>

          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-9.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>

          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-10.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>

          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-11.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>

          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-12.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>

          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-13.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>

          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-14.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-15.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-16.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-center items-center h-full">
              <Image
                src="/gallery-18.jpg"
                alt="gallery"
                width={700}
                height={1280}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Sliders