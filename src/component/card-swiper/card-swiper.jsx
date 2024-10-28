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

export default function CardSwiper({ addToCart, deleteFromCart, cartItems }) {
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
                        <div className='bg-white shadow-xl rounded-lg max-h-[675px] h-full'>
                            <div className='relative'>
                                <div className='p-2'>
                                    <img src={burger} alt="" className='bg-centers object-cover w-full' />
                                </div>
                                <div className='bg-white py-1 px-3 rounded-full flex items-center absolute top-4 left-4 gap-2'>
                                    <button className='border-2 rounded-full px-2 border-[#F17228] text-[#F17228] font-bold' onClick={() => removeProduct(item)}> - </button>
                                    <p>{cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0}</p>

                                    <button className='border-2 rounded-full px-2 h-[32px] bg-[#F17228] text-white font-bold' onClick={() => addProduct(item)}> + </button>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='max-h-[200px] h-[100px] sm:h-[120px]'>
                                    <div className='flex items-center justify-between my-1'>
                                        <h1 className="text-sm md:text-lg font-semibold truncate max-w-[65%]" title={item.name}>
                                            {item.name || 'Unnamed Item'}
                                        </h1>
                                        <h4 className='text-sm font-medium'>Rp. {item.price}</h4>
                                    </div>
                                    <p className='text-justify mb-2 text-[10px] sm:text-[14px] font-medium opacity-55'>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, </p>
                                </div>
                                <button className='w-full bg-[#F17228] text-white font-medium p-1 rounded-[5px] text-sm shadow-md shadow-[#f1722858]'>Lihat Detail</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
