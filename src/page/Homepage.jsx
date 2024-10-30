import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// import './styles.css';
import { Pagination } from 'swiper/modules';

import chatbot from '../component/chatbot'
import Navbar from '../component/Navbar';

import people from '../assets/people.png'
import about from '../assets/about.png'
import icon from '../assets/icon_no1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import discount from '../assets/discount.png'
import cs from '../assets/cs.png'
import quickdelivery from '../assets/quickdelivery.png'
import phone from '../assets/phone.png'
import apple from '../assets/Apple_logo.png'
import playstore from '../assets/playstore.png'
import ChatBot from '../component/chatbot';
import berita1 from '../assets/blog/berita-1.jpg'
import berita2 from '../assets/blog/berita-2.jpg'
import berita3 from '../assets/blog/berita-3.jpg'
import berita4 from '../assets/blog/berita-4.jpeg'

const Homepage = () => {

 useEffect(() => {
    AOS.init();
  }, [] )
 

  return (
    <div>


<section id="home">


      <header
        id="home"
        className="py-20 bg-gradient-to-tr from-white to-[rgba(249,225,191,0.85)] h-max lg:h-[100vh] px-8 sm:px-[80px]  bg-cover flex flex-col sm:flex-row items-center gap-10"
      >
        {/* Kolom Teks */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col gap-5 text-center sm:text-left sm:ml-[60px] mt-[0px] lg:mt-20 sm:order-1"
        >
          <h1 className="text-start text-3xl lg:text-4xl font-poppins font-extrabold text-black">
            <span className="text-[#FB9333]">Rescue Food,</span> Save <span className="text-[#3BB469]">the Planet</span>
          </h1>
          <p className="text-start text-md leading-5 lg:text-4xl font-poppins font-semibold text-black">
            Mari bersama Menjaga Bumi dan Mengurangi sampah makanan
          </p>
          <p className="text-start text-md lg:text-lg font-medium text-[#828282] leading-5">
            Enjoy quality meals at discounted prices while reducing food waste.
          </p>

          <div className="flex gap-5 justify-center sm:justify-start mt-5">
            <a
              href="/path/to/company-profile.pdf"
              target="_blank"
              className="bg-[#FB9333] hover:bg-[#ff9f45] py-2 px-3 rounded-xl text-white font-semibold text-sm"
            >
              Order Food
            </a>
            <p className="bg-[#f1f0ef] py-2 px-3 rounded-xl text-[#FB9333] font-medium text-sm">
              #1 Best Healthy Salad
            </p>
          </div>

          <div className="flex gap-5 lg:gap-10 justify-center sm:justify-start mt-2 lg:mt-10">
            <div>
              <p className="text-2xl font-semibold">5000+</p>
              <p className="text-sm text-[#828282]">Customers</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">8.000+</p>
              <p className="text-sm text-[#828282]">Delivery</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">1.000+</p>
              <p className="text-sm text-[#828282]">Ratings</p>
            </div>
          </div>
        </div>

        {/* Kolom Gambar */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="order-2 sm:order-2"
        >
          <img
            className="w-full lg:w-[1000px]"
            src={people}
            alt="People Eating Healthy Food"
          />
        </div>
      </header>
    </section>

      <section id='about'>
  <div  data-aos="fade-down"
          data-aos-duration="1000" className='bg-[#fff] my-[50px] md:my-[100px] py-5 md:py-[20px]'>
    <div className="card bg-[#fff] mx-4 md:mx-20 shadow-[0_14px_20px_rgba(151,109,0,0.2),_0_2px_4px_rgba(255,255,255,0.2)] rounded-[20px] md:rounded-[50px] transition-shadow duration-300 hover:shadow-[0_20px_30px_rgba(151,109,0,0.3),_0_4px_6px_rgba(255,255,255,0.3)]">
      <p className="text-xl md:text-2xl font-bold text-center p-4">Welcome to FoodCycle!</p>

      <div className='flex flex-col md:flex-row justify-center items-center relative'>
        <div className='w-full md:w-3/4 px-5 md:px-[30px] md:py-[30px] lg:px-[70px]'>
          <p className='text-justify text-[16px] md:text-[15px] lg:text-[18px]'>
            Di FoodCycle, kami percaya bahwa makanan tidak seharusnya terbuang. Misi kami adalah menciptakan sistem pangan yang berkelanjutan dengan menghubungkan Anda dengan makanan sisa yang lezat dari UMKM, restoran, dan kafe yang masih segar dan aman untuk dinikmati. Kami berusaha mengurangi limbah makanan sambil menyediakan pilihan makan yang terjangkau untuk semua orang.
          </p>
          <button className='bg-[#FB9333] hover:bg-[#ff9f45] mt-5 py-2 px-4 md:px-5 rounded-2xl inline-block text-white font-regular'>
            Learn more
          </button>
        </div>

        <div className='w-full md:w-1/3 relative py-5 px-5 md:px-[70px] hover:scale-101'>
          {/* Gambar utama */}
          <img className='w-[100%] md:w-[300px] rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400' src={about} alt="" />

          {/* Gambar kecil di sudut kanan atas */}
          <img className='absolute top-0 right-5 md:right-10 w-[50px] md:w-[80px] rounded-full transform translate-x-1 md:translate-x-2 translate-y-[-5px] md:translate-y-[-10px]' src={icon} alt="small overlay" />
        </div>
      </div>
    </div>
  </div>
</section>


<section id='menu' className='bg-[#fff]'>
  <div className='bg-[#fff] px-3 md:px-5 py-5'>
    <div className='flex flex-col md:flex-row justify-center items-center m-auto gap-5 md:gap-10 h-auto md:h-[100px] my-5 md:my-10 text-center px-4 md:px-[140px]'>
      <div className='flex w-full md:w-[65%] items-center justify-center'>
        <p className='text-[24px] md:text-[40px] font-semibold text-start'>
          WHY CHOOSE US 
        
          FOR <span className='text-[#FB9333]'> YOUR HEALTHY FOOD</span>
        </p>
      </div>

      <div className='flex w-full md:w-3/4 items-center justify-center mt-0 md:mt-0'>
        <p className='text-[16px] md:text-[18px] text-justify text-[#828282]'>
          Nikmati makanan sehat dan seimbang tanpa menguras kantong. Kami menyediakan bahan-bahan berkualitas tinggi dari mitra tepercaya untuk memberikan Anda pilihan bergizi dengan harga yang Anda sukai.
        </p>
      </div>
    </div>

    <div className='flex justify-center items-center'>
      {/* Grid untuk card */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 px-2 md:px-[5px] items-center mt-5 md:mt-10 relative z-0'>
        
        {/* Card 1 */}
        <div data-aos="flip-left" data-aos-duration="1000"
         className='bg-[#fff] rounded-[10px] p-4 md:p-5 h-auto w-full sm:w-[300px] md:w-[350px] mx-auto flex flex-col justify-between shadow-[0_10px_20px_rgba(151,109,0,0.2),_0_2px_4px_rgba(255,255,255,0.2)] 
        hover:shadow-[0_20px_40px_rgba(151,109,0,0.4),_0_4px_8px_rgba(255,255,255,0.2)] 
        transform hover:scale-105 transition-all duration-300'>
          <div>
            <img className='w-[60px] md:w-[80px]' src={icon2} alt="" />
          </div>
          <div className='mt-5 md:mt-10'>
            <p className='text-[18px] md:text-[22px] font-bold'>Mendukung Keberlanjutan</p>
            <p className='mt-2 text-[14px] md:text-[16px]'>Berpartisipasi dalam lingkungan yang lebih baik. Setiap hidangan yang Anda pilih di FoodCycle membantu mengurangi dampak negatif terhadap planet kita.</p>
            <button className='mt-3 text-[14px] bg-[#FB9333] hover:bg-[#ff9f45] py-2 px-4 rounded-lg text-white'>
              Learn more
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div data-aos="flip-left"  data-aos-duration="1000"
         className='bg-[#fff] rounded-[10px] p-4 md:p-5 h-auto w-full sm:w-[300px] md:w-[350px] mx-auto flex flex-col justify-between shadow-[0_10px_20px_rgba(151,109,0,0.2),_0_2px_4px_rgba(255,255,255,0.2)] 
        hover:shadow-[0_20px_40px_rgba(151,109,0,0.4),_0_4px_8px_rgba(255,255,255,0.2)] 
        transform hover:scale-110 transition-all duration-300'>
          <div>
            <img className='w-[60px] md:w-[80px]' src={icon3} alt="" />
          </div>
          <div className='mt-5 md:mt-10'>
            <p className='text-[18px] md:text-[22px] font-bold'>Makanan Berkualitas, Harga Terjangkau</p>
            <p className='mt-2 text-[14px] md:text-[16px]'>Nikmati berbagai pilihan makanan lezat yang masih segar dan berkualitas tinggi, semuanya dengan harga yang lebih terjangkau.</p>
            <button className='mt-3 text-[14px] bg-[#FB9333] hover:bg-[#ff9f45] py-2 px-4 rounded-lg text-white'>
              Learn more
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div data-aos="flip-left" data-aos-duration="1000"  className='bg-[#fff] rounded-[10px] p-4 md:p-5 h-auto w-full sm:w-[300px] md:w-[350px] mx-auto flex flex-col justify-between shadow-[0_10px_20px_rgba(151,109,0,0.2),_0_2px_4px_rgba(255,255,255,0.2)] 
        hover:shadow-[0_20px_40px_rgba(151,109,0,0.4),_0_4px_8px_rgba(255,255,255,0.2)] 
        transform hover:scale-105 transition-all duration-300'>
          <div>
            <img className='w-[60px] md:w-[80px]' src={icon2} alt="" />
          </div>
          <div className='mt-5 md:mt-10'>
            <p className='text-[18px] md:text-[22px] font-bold'>Dukungan untuk Komunitas Lokal</p>
            <p className='mt-2 text-[14px] md:text-[16px]'>Kami juga mendukung bisnis lokal kepada UMKM, restoran, dan kafe untuk mengurangi limbah makanan.</p>
            <button className='mt-3 text-[14px] bg-[#FB9333] hover:bg-[#ff9f45] py-2 px-4 rounded-lg text-white'>
              Learn more
            </button>
          </div>
        </div>

      </div>
    </div>

  </div>
</section> 

<section id='berita' className="container mx-auto px-4 py-6 lg:px-[100px] ">
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    {/* Card 1 */}
    <div className="group relative flex flex-col h-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full transition-all transform hover:shadow-lg hover:scale-105">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={berita1}
          alt="card-image"
          className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex-grow">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">Sinergi Tingkatkan Efisiensi Rantai Pangan, Berantas Food Loss and Waste. </h6>
        <p className="text-slate-600 leading-normal font-light">
        “Permasalahan food waste juga dapat disebabkan karena tidak diterapkannya cara distribusi/peredaran pangan olahan yang baik (CPerPOB),         </p>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <button className="w-full rounded-md bg-[#FB9333] py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:bg-[#FB9333]">
          Read more
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="group relative flex flex-col h-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full transition-all transform hover:shadow-lg hover:scale-105">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={berita2}        
          alt="card-image"
          className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex-grow">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">Nilai Sisa Sampah Makanan Tembus Rp 500 Triliun</h6>
        <p className="text-slate-600 leading-normal font-light">
        Nilai Sisa Sampah Makanan Tembus Rp 500 Triliun yang menyebabkan kerugian negara yang harus diambil langkah tegas untuk mengtasinya.      </p>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <button className="w-full rounded-md bg-[#FB9333] py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:bg-[#ffa047]">
          Read more
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="group relative flex flex-col h-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full transition-all transform hover:shadow-lg hover:scale-105">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={berita3}          
          alt="card-image"
          className="object-cover w-full h-full  transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex-grow">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">Melek Isu "Food Loss" dan "Food Waste"</h6>
        <p className="text-slate-600 leading-normal font-light">
        Isu “Food Loss” dan “Food Waste” semakin menjadi perhatian global, terutama karena dampaknya yang signifikan terhadap ketahanan pangan dan lingkungan.         </p>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <button className="w-full rounded-md bg-[#FB9333] py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:bg-[#FB9333]">
          Read more
        </button>
      </div>
    </div>

    {/* Card 4 */}
    <div className="group relative flex flex-col h-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full transition-all transform hover:shadow-lg hover:scale-105">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
         src={berita4}
          alt="card-image"
          className="object-cover w-full h-full  transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex-grow">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">Aplikasi untuk Makanan Berlebih dari Hotel, Katering, Restoran</h6>
        <p className="text-slate-600 leading-normal font-light">
        Inisiatif ini tidak hanya membantu mengurangi food waste, tetapi juga mendukung mereka yang kurang mampu dengan menyediakan akses terhadap makanan berkualitas        </p>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <button className="w-full rounded-md bg-[#FB9333] py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:bg-[#FB9333]">
          Read more
        </button>
      </div>
    </div>
  </div>
</section>



<section id='Testimonial' className='bg-[#FFF2E1] justify-center items-center'>
  <div className='flex flex-col lg:flex-row justify-center items-center mx-5 lg:mx-[100px] mt-[50px] lg:mt-[100px]'>
    <div data-aos="fade-up"
     className='w-full lg:w-1/3 justify-center text-center lg:text-left mb-1 lg:mb-0'>
      <p className='text-[#333333] mt-2 leading-8 lg:leading-normal text-[26px] lg:text-[48px] font-semibold'>
        What Are People Saying About Us
      </p>
      <p className='mt-5 text-[12px] lg:text-[16px]'>
        We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.
      </p>
    </div>

    <div data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='w-3/4 lg:w-2/3 py-5 lg:py-10'>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className='rounded-[10px] bg-white p-5 flex flex-col items-center'>
          <div className='w-16 lg:w-20 mb-5'>
            <img className='rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
          </div>
          <div className='h-[150px] flex flex-col items-center rounded-[10px]'>
            <p className='text-[16px] lg:text-[18px] font-semibold'>Selena Gomez</p>
            <p className='mt-2 text-[12px] lg:text-[14px] text-center'>
              The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='rounded-[10px] bg-white p-5 flex flex-col items-center'>
          <div className='w-16 lg:w-20 mb-5'>
            <img className='rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
          </div>
          <div className='h-[150px] flex flex-col items-center rounded-[10px]'>
            <p className='text-[16px] lg:text-[18px] font-semibold'>Selena Gomez</p>
            <p className='mt-2 text-[12px] lg:text-[14px] text-center'>
              The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='rounded-[10px] bg-white p-5 flex flex-col items-center'>
          <div className='w-16 lg:w-20 mb-5'>
            <img className='rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
          </div>
          <div className='h-[150px] flex flex-col items-center rounded-[10px]'>
            <p className='text-[16px] lg:text-[18px] font-semibold'>Selena Gomez</p>
            <p className='mt-2 text-[12px] lg:text-[14px] text-center'>
              The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.
            </p>
          </div>
        </SwiperSlide>

        {/* Other SwiperSlides go here */}

      </Swiper>
    </div>
  </div>
</section>


<section id='service' className='bg-[#FEEFD0] flex justify-center items-center'>
  <div className='bg-white p-5 lg:px-10 rounded-[20px] my-10 lg:my-20 mx-5 lg:mx-[100px] flex flex-col lg:flex-row w-full gap-8 lg:gap-16'>
    <div className='w-full lg:w-1/3 flex flex-col lg:flex-row items-center justify-center mb-5 lg:mb-0'>
      <img className='w-16 lg:w-auto' src={discount} alt="Discount Icon" />
      <p
        className="text-[24px] lg:text-[35px] font-semibold text-start mt-2 lg:mt-4"
        style={{
          background: 'linear-gradient(to right, #FB3C00, #FFB800)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Daily Discounts
      </p>
    </div>

    <div className='w-full lg:w-1/3 flex flex-col lg:flex-row  items-center justify-center mb-5 lg:mb-0'>
      <img className='w-16 lg:w-auto' src={cs} alt="Customer Support Icon" />
      <p
        className="text-[24px] lg:text-[35px] font-semibold text-center mt-2 lg:mt-4"
        style={{
          background: 'linear-gradient(to right, #FB3C00, #FFB800)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        24/7 Customer Support
      </p>
    </div>

    <div className='w-full lg:w-1/3 flex flex-col lg:flex-row  items-center justify-center'>
      <img className='w-16 lg:w-auto' src={quickdelivery} alt="Quick Delivery Icon" />
      <p
        className="text-[24px] lg:text-[35px] font-semibold text-start mt-2 lg:mt-4"
        style={{
          background: 'linear-gradient(to right, #FB3C00, #FFB800)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Quick Delivery
      </p>
    </div>
  </div>
</section>


<section className="bg-gradient-to-b from-[#FEEFD0] to-[#FEE298] py-5 lg:py-5 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-7xl px-5">
        {/* Phone Mockups */}
        <div className="flex w-2/3 justify-center items-center gap-5">
          
          <img
            src={phone}
            alt="Phone Mockup 2"
            className="w-[200px] md:w-[300px] lg:w-[600px]"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFB800] mb-4">
            Install the app
          </h2>
          <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-md">
            It's never been easier to order food. Look for the finest discounts
            and you'll be lost in a world of delectable food.
          </p>
          <div className="flex justify-center lg:justify-start gap-2">
            <a
              href="#"
              className="bg-[#ffffff] text-[12px] text-black px-2 py-2 lg:text-[16px] lg:px-4 lg:py-4 rounded-md flex items-center gap-2 hover:bg-[#dfdede]"
            >
              <img
                src={playstore}
                alt="Google Play"
                className=" w-5 lg:w-10"
              />
              Get it on Google Play
            </a>
            <a
              href="#"
              className="bg-[#ffffff] text-[12px] text-black px-2 py-1 lg:text-[16px] lg:px-4 lg:py-4  rounded-md flex items-center gap-2 hover:bg-[#dfdede]"
            >
              <img
                src={apple}
                alt="App Store"
                className=" w-5 lg:w-10"
              />
              Download on the App Store
            </a>
          </div>
        </div>
      </div>
</section>

  <ChatBot />


    
<footer className="bg-gray-900 text-gray-400 py-10 px-6 lg:px-20">
  {/* Top Cities Section */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
    <div>
      <h3 className="text-white text-lg mb-2">Our top cities</h3>
      <ul className="space-y-1">
        <li className="hover:text-white transition-colors">Jakarta</li>
        <li className="hover:text-white transition-colors">Bandung</li>
        <li className="hover:text-white transition-colors">Surabaya</li>
        <li className="hover:text-white transition-colors">Medan</li>
        <li className="hover:text-white transition-colors">Makassar</li>
      </ul>
    </div>
    <div>
      <ul className="space-y-1 mt-6 sm:mt-0">
        <li className="hover:text-white transition-colors">Yogyakarta</li>
        <li className="hover:text-white transition-colors">Semarang</li>
        <li className="hover:text-white transition-colors">Palembang</li>
        <li className="hover:text-white transition-colors">Bali</li>
        <li className="hover:text-white transition-colors">Balikpapan</li>
      </ul>
    </div>
    <div>
      <ul className="space-y-1 mt-6 sm:mt-0">
        <li className="hover:text-white transition-colors">Manado</li>
        <li className="hover:text-white transition-colors">Padang</li>
        <li className="hover:text-white transition-colors">Pontianak</li>
        <li className="hover:text-white transition-colors">Batam</li>
        <li className="hover:text-white transition-colors">Banjarmasin</li>
      </ul>
    </div>
    <div>
      <ul className="space-y-1 mt-6 sm:mt-0">
        <li className="hover:text-white transition-colors">Malang</li>
        <li className="hover:text-white transition-colors">Kupang</li>
        <li className="hover:text-white transition-colors">Pekanbaru</li>
        <li className="hover:text-white transition-colors">Jayapura</li>
        <li className="hover:text-white transition-colors">Ambon</li>
      </ul>
    </div>
  </div>

  {/* Company, Contact, Legal, Social and Subscription Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
    {/* Company Section */}
    <div>
      <h3 className="text-white text-lg mb-2">Company</h3>
      <ul className="space-y-1">
        <li className="hover:text-white transition-colors">About us</li>
        <li className="hover:text-white transition-colors">Team</li>
        <li className="hover:text-white transition-colors">Careers</li>
        <li className="hover:text-white transition-colors">Blog</li>
      </ul>
    </div>

    {/* Contact Section */}
    <div>
      <h3 className="text-white text-lg mb-2">Contact</h3>
      <ul className="space-y-1">
        <li className="hover:text-white transition-colors">Help & Support</li>
        <li className="hover:text-white transition-colors">Partner with us</li>
        <li className="hover:text-white transition-colors">Ride with us</li>
      </ul>
    </div>

    {/* Legal Section */}
    <div>
      <h3 className="text-white text-lg mb-2">Legal</h3>
      <ul className="space-y-1">
        <li className="hover:text-white transition-colors">Terms & Conditions</li>
        <li className="hover:text-white transition-colors">Refund & Cancellation</li>
        <li className="hover:text-white transition-colors">Privacy Policy</li>
        <li className="hover:text-white transition-colors">Cookie Policy</li>
      </ul>
    </div>

    {/* Social Media and Subscription Section */}
    <div>
      <h3 className="text-white text-lg mb-2">FOLLOW US</h3>
      <div className="flex space-x-4 mb-4">
        {/* Social Media Icons */}
        <a href="#" className="hover:text-white transition-colors">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="mb-2">Receive exclusive offers in your mailbox</p>
      <form className="flex flex-col lg:flex-row">
        <input
          type="email"
          placeholder="Enter Your email"
          className="w-full text-sm md:text-lg px-3 py-2 rounded-l-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded-r-md transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</footer>






    </div>
  )
}

export default Homepage