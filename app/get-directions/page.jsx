"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Container from "../../components/elements/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Link from 'next/link';

const page = () => {
  const [from, setFrom] = useState();

  return (
    <main className="py-[38px] bg-[url('/bg-2.png')] bg-[#FFFCEF] bg-cover min-h-screen relative">
      <Image src="/right-2.png" alt="Background" width={256} height={726} className="absolute bottom-0 right-0" />
      <Image src="/left-2.png" alt="Background" width={163} height={327} className="absolute top-0 left-0" />

      <div className='flex justify-center'>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={130} height={37} />
        </Link>
      </div>

      <div className='mt-6'>
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
                src="/gallery-8.jpg"
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


      <Container className="py-[38px]">


        <h2 className='text-center text-[28px] font-extrabold text-[#3E3E3E] mb-8'>
          Directions to the Venue
        </h2>
        <div className="max-w-md mx-auto bg-white/90 rounded-2xl shadow-lg p-8 border border-[#f3e9c7]">
          <form className="flex flex-col gap-6">
            <label htmlFor="from" className="text-lg font-semibold text-[#3E3E3E]">Where are you coming from?</label>
            <select
              id="from"
              name="from"
              className="rounded-lg border border-[#e2e8f0] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#f3e9c7] bg-[#FFFCEF] text-[#3E3E3E] shadow-sm"
              onChange={e => setFrom(e.target.value)}
              value={from}
            >
              <option value="">Select an option</option>
              <option value="lagos">Outside Lagos</option>
              <option value="nigeria">Outside Nigeria</option>
              <option value="directions">I am in Lagos</option>
            </select>
            <div className="mt-4 min-h-[120px] bg-[#f9f6ee] rounded-lg p-4 border border-[#f3e9c7] text-[#3E3E3E] text-base transition-all duration-300">
              {from === "lagos" && (
                <span>
                  <b>Coming from Outside Lagos:</b> Take a bus or flight to Lagos. From any major terminal, follow the directions below for Lagos residents.
                </span>
              )}
              {from === "nigeria" && (
                <span>
                  <b>Coming from Outside Nigeria:</b> Arrive at Murtala Muhammed International Airport, Lagos. Take a taxi or ride-hailing service to Ikorodu, then follow the directions below for Lagos residents.
                </span>
              )}
              {from === "directions" && (
                <span>
                  <b>Directions:</b> Buses to Ikorodu can easily be boarded from TBS/CMS BRT Station, Oshodi (Charity Bus Stop or the Oshodi BRT Terminal 3), Ketu Bus Stop, or Costain BRT Terminal. These terminals and bus stops have a straight one-bus route heading to Ikorodu Garage. Alight at Benson Bus Stop, locate the Zenith Bank by the roadside, and the church hall is just behind the Zenith Bank on the road.
                </span>
              )}
              {!from && (
                <span className="text-[#b0a98b]">Select where you are coming from to see directions.</span>
              )}
            </div>
          </form>
        </div>

        <footer className="relative z-50 text-center p-4 mt-4">
          <p className="text-sm lg:text-base">
            Designed and developed by <a href="https://www.linkedin.com/in/israel-chidera-97bbab89/" target="_blank" className="underline-offset-4 underline hover:no-underline">Israel Chidera</a> with ❤️
          </p>
        </footer>
      </Container>
    </main>
  )
}

export default page