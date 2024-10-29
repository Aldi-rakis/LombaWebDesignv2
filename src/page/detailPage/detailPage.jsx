import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import './style.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import dummy from '../../data';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { id } = useParams('id')
    const item = dummy.find((item) => item.id === parseInt(id))


    return (
        <>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-3 px-10 py-14 lg:max-h-[527px]'>

                <div className='h-full lg:h-1/2'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='h-fit'>
                    <h1 className='text-3xl font-bold'>Rp. {item.price}</h1>
                    <div className='flex items-center gap-3 mt-3 mb-2'>
                        <h2 className='text-lg font-medium'>{item.name}</h2>
                        <h2 className='text-lg text-red-400 font-medium'>Sisa 20 hari</h2>
                    </div>
                    <div className='h-[4vh] bg-yellow-300 mb-3'>

                    </div>
                        <div className='flex justify-between flex-col h-80'>
                        <p className='text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium, aut alias ad et necessitatibus neque fugit? Qui voluptates quos fuga error rem labore iste officiis nemo maxime in nesciunt explicabo magni optio iusto illum deserunt vel sint, sit, aperiam accusamus, unde distinctio animi. Quia natus fuga reprehenderit perferendis quae.</p>
                        <button className='w-full p-3 rounded bg-orange-300'>Add to Cart</button>
                        </div>
                </div>

            </section>

            <div className='px-10'>
                <div className='bg-blue-200 w-full h-[30vh] '>

                </div>
            </div>
        </>
    )
}

export default DetailPage