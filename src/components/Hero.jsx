import React from 'react'
import heroImg from '../assets/hero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className='heroSlider'
          >
            <SwiperSlide>
              <div className='max-h-[550px] relative'>
                  {/* overlay */}
                  <div className='absolute w-full h-full text-gray-200 max-h-[550px] bg-black/40 flex flex-col  justify-center pl-10'>
                      <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                      <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Burgers </span>Taste</h1>
                  </div>
                  <img src={heroImg} 
                      alt="hero"
                      className='w-full max-h-[550px] object-cover' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='max-h-[550px] relative'>
                  {/* overlay */}
                  <div className='absolute w-full h-full text-gray-200 max-h-[550px] bg-black/40 flex flex-col  justify-center center pl-10'>
                      <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                      <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Pizza </span>Taste</h1>
                  </div>
                  <img src="https://images.pexels.com/photos/5848258/pexels-photo-5848258.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-5848258.jpg&fm=jpg"
                      alt="hero"
                      className='w-full max-h-[550px] object-cover' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='max-h-[550px] relative'>
                  {/* overlay */}
                  <div className='absolute w-full h-full text-gray-200 max-h-[550px] bg-black/40 flex flex-col  justify-center center pl-10'>
                      <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                      <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Chicken </span>Taste</h1>
                  </div>
                  <img src="https://images.pexels.com/photos/6692148/pexels-photo-6692148.jpeg?cs=srgb&dl=pexels-yesim-kaya-6692148.jpg&fm=jpg"
                      alt="hero"
                      className='w-full max-h-[550px] object-cover' />
              </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Hero