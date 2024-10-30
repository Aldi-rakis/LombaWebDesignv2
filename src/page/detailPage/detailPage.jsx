import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'leaflet/dist/leaflet.css';

import './style.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import dummy from '../../data';
import { useParams } from 'react-router-dom';

// Mengatur ikon default Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

window.screenY = 0

const DetailPage = ({ addProduct, removeProduct, cartItems }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { id } = useParams();
    const item = dummy.find((item) => item.id === parseInt(id));

    const ratingStars = Array.from({ length: 5 }, (_, index) => {
        const ratingValue = index + 1;
        return (
            <FaStar
                key={index}
                className={`text-2xl ${ratingValue <= item.rating
                    ? ratingValue >= 4.5
                        ? 'text-green-500'
                        : ratingValue >= 3.5
                            ? 'text-yellow-400'
                            : 'text-orange-400'
                    : 'text-gray-300'
                    }`}
            />
        );
    });

    return (
        <>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-3 px-10 pt-14 lg:max-h-[527px] mb-32 sm:mb-5'>
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
                    <div className='flex items-center gap-3 mt-3 mb-2 max-lg:justify-between'>
                        <h2 className='text-lg font-medium'>{item.name}</h2>
                        <h2 className='text-lg text-red-400 font-medium'>Sisa {item.remainingDays} hari</h2>
                    </div>
                    <div className='h-[4vh] mb-3'>
                        <div className='flex'>{ratingStars}</div>
                    </div>
                    <div className='flex justify-between flex-col h-60 sm:h-80'>
                        <p className='text-sm sm:text-base'>{item.desc}</p>
                        <div className="h-full mt-2 mb-1">
                            <div className="w-full h-full overflow-x-auto flex items-center space-x-3 py-3snap-x snap-mandatory scroll-smooth">
                                {item.testimonials && item.testimonials.map((testimonial, index) => (
                                    <div key={index} className="bg-red-400 shadow-xl h-[20vh] w-40 flex-shrink-0 p-2 rounded-lg text-white">
                                        <p className="font-semibold text-sm">{testimonial.user}</p>
                                        <div className='flex'>{ratingStars}</div>
                                        <p className="text-xs mt-1 py-3">{testimonial.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            
                        </div>
                        {
                            cartItems.find(cartItem => cartItem.id === item.id)?.quantity > 0 ? (
                                <>
                                    <div className="bg-white py-1 px-3 rounded-full justify-center flex items-center  gap-2">
                                        <button
                                            className="border-2 rounded-full px-2 border-[#F17228] text-[#F17228] font-bold"
                                            onClick={() => removeProduct(item)}
                                        >
                                            -
                                        </button>
                                        <p>{cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0}</p>
                                        <button
                                            className="border-2 rounded-full px-2 h-[32px] bg-[#F17228] text-white font-bold"
                                            onClick={() => addProduct(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => addProduct(item)} className='w-full p-3 rounded bg-[#F17228] hover:brightness-110 transition-all font-medium text-white'>Add to Cart</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </section>


            <div className='px-10 pb-10'>
                <h1 className='text-xl font-bold'>Lokasi Warung</h1>
                <MapContainer center={[-6.1751, 106.8650]} zoom={13} className="w-full h-96 mt-4 rounded-md shadow-md">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[-6.1751, 106.8650]}>
                        <Popup>
                            Lokasi Warung: <br /> Menyajikan makanan lezat!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
}

export default DetailPage;
