import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './card-swiper.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import burger from '../../assets/image/burger.png';
import clock from '../../assets/icon/clock.png'

export default function CardSwiper() {
    const [swiperRef, setSwiperRef] = useState(null);

    const dummy = [
        {
            id: 1,
            name: "Cheese Burger",
            price: "Rp.10.000",
            desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
        },
        {
            id: 2,
            name: "Toffe’s Cake",
            price: "Rp.10.000",
            desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
        },
        {
            id: 3,
            name: "Dancake",
            price: "Rp.10.000",
            desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
        },
        {
            id: 4,
            name: "Crispy Sandwitch",
            price: "Rp.10.000",
            desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
        },
        {
            id: 5,
            name: "Thai Soup",
            price: "Rp.10.000",
            desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
        },
        {
            id: 6,
            name: "Cheese Burger",
            price: "Rp.10.000",
            desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
        },
        {
            id: 7,
            name: "Cheese Burger",
            price: "Rp.10.000",
            desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
        },
    ]

    return (
        <>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={5}
                spaceBetween={13}
                navigation={true}
                virtual
                breakpoints={{
                    // When window width is >= 320px (small screens)
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // When window width is >= 640px (medium screens)
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    // When window width is >= 768px (tablet screens)
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // When window width is >= 1024px (desktop screens)
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                    // When window width is >= 1280px (larger screens)
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 13,
                    },
                }}
            >
                {dummy.map((item, index) => (
                    <SwiperSlide key={item.id} virtualIndex={index}>
                        <div className='relative'>
                            <img src={burger} alt="" className='bg-centers object-cover' />
                            <div className='flex items-center absolute top-2 left-2 gap-2'>
                                <div className='bg-white p-2 rounded-full px-3 font-bold text-[#F17228]'>
                                    <p className='text-[14px]'>{item.price}</p>
                                </div>
                                <div className='bg-[#FFB20E] p-2 rounded-full px-4 font-bold text-white flex items-center gap-2'>
                                    <img src={clock} alt="" />
                                    <p className='text-[14px]'>Fast</p>
                                </div>
                            </div>
                            <div className=' relative w-full'>
                                <div className='absolute translate-x-20 -translate-y-14 bg-white py-1 px-3 rounded-full flex items-center justify-center gap-3 top-0'>
                                    <button className='border-2 rounded-full px-2 border-[#F17228] text-[#F17228] font-bold'> - </button>
                                    <p>0</p>
                                    <button className='border-2 rounded-full px-2 h-[32px] bg-[#F17228] text-white font-bold'> + </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between my-2'>
                            <h1 className='text-xl font-bold'>{item.name}</h1>
                            <h4 className='text-base font-medium'>4.5</h4>
                        </div>
                        <p className='text-justify text-[14px] font-medium opacity-55'>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, </p>
                        <button className='w-full my-3 bg-[#F17228] text-white font-medium p-1 rounded-[5px] shadow-md shadow-[#f1722858]'>Lihat Detail</button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
