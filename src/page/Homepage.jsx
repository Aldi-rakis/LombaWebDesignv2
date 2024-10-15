import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { Pagination } from 'swiper/modules';


import people from '../assets/people.png'
import about from '../assets/about.png'
import icon from '../assets/icon-no1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import discount from '../assets/discount.png'
import cs from '../assets/cs.png'
import quickdelivery from '../assets/quickdelivery.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Homepage = () => {
  return (
    <div>


      {/* <!-- Section Home --> */}
      <section id="home">
        <nav class="flex nav justify-between items-center px-[100px] max-lg:px-[0px] fixed w-full z-50 bg-white shadow-xl">
          {/* <!-- Logo --> */}
          <p className='text-3xl text-[#FB9331] font-poppins font-bold'>FoodCycle</p>

          <ul class="flex text-lg py-5 px-5 text-[#575757] poppins text-[24px] font-poppins font-medium  lg:flex">
            <li class="mx-3  section-link hover:font-bold" data-section="home"><a href="#home">Home</a></li>
            <li class="mx-3 section-link hover:font-bold" data-section="produk"><a href="#produk">Produk</a></li>
            <li class="mx-3 section-link hover:font-bold" data-section="mitra"><a href="#mitra">Mitra</a></li>
            <li class="mx-3 section-link hover:font-bold" data-section="hubungi"><a href="#hubungi">Hubungi kami</a></li>
          </ul>

          {/* <!-- Mobile Menu Button --> */}
          {/* <button id="menu-btn" class="lg:hidden flex items-center px-3 py-2  rounded text-white border-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button> */}

          {/* <!-- Mobile Menu --> */}
          {/* <div id="mobile-menu" class=" fixed pt-2 w-full z-[-1] text-white bg-[#0367b3]  flex flex-col justify-center items-center  ">
            <a href="#home" class="text-xl  py-2 px-4 hover:font-bold " data-section="home">Home</a>
            <a href="#produk" class="text-xl py-2 px-4 hover:font-bold " data-section="produk">Produk</a>
            <a href="#mitra" class="text-xl py-2 px-4 hover:font-bold" data-section="mitra">Mitra</a>
            <a href="#hubungi" class="text-xl py-2 px-4 hover:font-bold " data-section="hubungi">Hubungi kami</a>
        </div> */}

          <button className='bg-[#FB9333] text-white px-5 py-2 rounded-lg max-lg:hidden'>sign in</button>
        </nav>

        <header id="home" class="py-20 bg-gradient-to-tr from-[rgb(255,255,255)] to-[rgba(249,225,191,0.85)] max-sm:h-[700px] h-fit px-[40px] bg-[url('<?php echo base_url('assets/main/image/bg-atas.jpg'); ?>')] flex items-center flex-col sm:flex-row gap-10 sm:gap-0">
          {/* <!-- Kolom Teks --> */}
          <div data-aos="fade-up"
            data-aos-duration="1000"
            className="ml-[80px] mt-[70px] max popins max-md:mt-20px] max-md:ml-[0px] max-lg:text-center order-2 sm:order-1">
            <div class="flex max-lg:justify-center ">

              <h1 className="text-black max-sm:text-md text-5xl max-lg:text-3xl font-poppins font-extrabold"> <span className='text-[#FB9333]'>Rescue Food, </span> Save <span className='text-[#3BB469]'> the Planet</span></h1>
            </div>
            <div className=" max-lg:px-[10px] mt-5 max-lg:mt-2">
              <p class="text-5xl font-poppins font-semibold text-black max-md:text-[18px]  max-lg:text-sm">
                Mari bersama Menjaga Bumi dan Mengurangi sampah makanan
              </p>

              <p className='text-xl mt-6 font-medium text-[#828282]'>Enjoy quality meals at discounted prices while reducing food waste.</p>

            </div>

            <div className='flex gap-5 mt-10'>
              <a href="<?php echo base_url('assets/main/company-profile-adhivasindo2.pdf'); ?>" target="_blank" class="bg-[#FB9333] hover:bg-[#ff9f45] mt-5 py-2 text-lg px-3 max-lg:text-md  rounded-xl inline-block">
                <p class="text-white  font-semibold max-lg:text-sm"> Order Food</p>
              </a>

              <p className='text-xl mt-5 font-medium bg-[#FFF0DC] py-2 px-3 rounded-xl inline-block max-lg:text-md max-lg:mt-0 max-lg:px-[10px] text-[#FB9333]'>#1  Best Healthy Salad</p>

            </div>

            <div className='flex gap-10 mt-10'>

              <div >
                <p className='text-[24px] font-semibold '>5000+</p>
                <p className='text-[14px] font-medium text-[#828282]'>Customers</p>
              </div>

              <div >
                <p className='text-[24px] font-semibold '>8.000+</p>
                <p className='text-[14px] font-medium text-[#828282]'>Delivery</p>
              </div>

              <div >
                <p className='text-[24px] font-semibold '>1.000+</p>
                <p className='text-[14px] font-medium text-[#828282]'>Ratings</p>
              </div>

            </div>




          </div>

          {/* <!-- Kolom Gambar --> */}
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            class="pt-[20px] order-1 sm:order-2">
            <img class="w-[1200px]   max-md:w-[350px] max-lg:w-[400px] max-md:pt-[20px]" src={people} alt="'); ?>" />

          </div>

        </header>
      </section>

      <section id='about'>

        <div className='bg-[#fff] my-[100px] py-[1'>

          <div className="card bg-[#fff] m-20 shadow-[0_14px_20px_rgba(151,109,0,0.2),_0_2px_4px_rgba(255,255,255,0.2)] rounded-[50px] transition-shadow duration-300 hover:shadow-[0_20px_30px_rgba(151,109,0,0.3),_0_4px_6px_rgba(255,255,255,0.3)]">
            <p className="text-2xl font-bold text-center">Welcome to FoodCycle!</p>

            <div className='flex justify-center items-center relative'>
              <div className='w-3/4 px-[70px]'>
                <p className='text-[20px]'>
                  Di FoodCycle, kami percaya bahwa makanan tidak seharusnya terbuang. Misi kami adalah menciptakan sistem pangan yang berkelanjutan dengan menghubungkan Anda dengan makanan sisa yang lezat dari UMKM, restoran, dan kafe yang masih segar dan aman untuk dinikmati. Kami berusaha mengurangi limbah makanan sambil menyediakan pilihan makan yang terjangkau untuk semua orang.
                </p>
                <button className='bg-[#FB9333] hover:bg-[#ff9f45] mt-5 py-2 px-5 rounded-2xl inline-block text-white font-regular'>
                  learn more
                </button>
              </div>

              <div className='relative py-5 px-[70px] hover:scale-101 '>
                {/* <!-- Gambar utama --> */}
                <img className='w-[300px] rounded-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400' src={about} alt="" />

                {/* <!-- Gambar kecil di sudut kanan atas --> */}
                <img className='absolute top-0 right-10 w-[80px] rounded-full transform translate-x-2 translate-y-[-10px]' src={icon} alt="small overlay" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id='menu' className='bg-[#fff]'>
        <div className='bg-[#fff] px-5 py-5'>
          <div className='flex justify-center items-center m-auto gap-10 h-[100px] my-10 text-center px-[140px]'>
            <div className='flex w-[65%] items-center justify-center'>
              <p className='text-[40px] font-semibold text-start'>WHY CHOOSE US <hr />FOR <span className='text-[#FB9333]'> YOUR HEALTHY FOOD</span> </p>
            </div>

            <div className='flex w-3/4 items-center justify-center'>
              <p className='text-[18px] text-justify text-[#828282]'>Nikmati makanan sehat dan seimbang tanpa menguras kantong. Kami menyediakan bahan-bahan berkualitas tinggi dari mitra tepercaya untuk memberikan Anda pilihan bergizi dengan harga yang Anda sukai.</p>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            {/* <!-- Grid untuk card --> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center px-[5px] items-center mt-10'>

              {/* <!-- Card 1 --> */}
              <div className='bg-[#fff] rounded-[10px] p-5 h-[auto] w-[350px] mx-2 flex flex-col justify-between shadow-[0_10px_20px_rgba(151,109,0,0.2),_0_2px_4px_rgba(255,255,255,0.2)] 
      hover:shadow-[0_20px_40px_rgba(151,109,0,0.4),_0_4px_8px_rgba(255,255,255,0.2)] 
      transform hover:scale-105 transition-all duration-300'>
                <div>
                  <img className='w-[80px]' src={icon2} alt="" />
                </div>
                <div className='mt-10'>
                  <p className='text-[22px] font-bold'>Mendukung Keberlanjutan</p>
                  <p className='mt-2'> berkontribusi pada lingkungan yang lebih baik. Setiap hidangan yang Anda pilih di FoodCycle membantu mengurangi dampak negatif terhadap planet kita.</p>
                  <button className='mt-3'>learn more</button>
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <div className='bg-[#fff] rounded-[10px] p-5 h-[auto] w-[350px] mx-6 flex flex-col justify-between shadow-[0_10px_20px_rgba(151,109,0,0.2),_0_2px_4px_rgba(255,255,255,0.2)] 
      hover:shadow-[0_20px_40px_rgba(151,109,0,0.4),_0_4px_8px_rgba(255,255,255,0.2)] 
      transform hover:scale-105 transition-all duration-300'>
                <div>
                  <img className='w-[80px]' src={icon3} alt="" />
                </div>
                <div className='mt-10'>
                  <p className='text-[22px] font-bold'>#Makanan Berkualitas , Harga Terjangkau</p>
                  <p className='mt-2'> Nikmati berbagai pilihan makanan lezat yang masih segar dan berkualitas tinggi, semuanya dengan harga yang lebih terjangkau.</p>
                  <button className='p-2 mt-3 hover:bg-[#FB9331] hover:p-2 rounded-lg'>learn more</button>
                </div>
              </div>

              {/* <!-- Card 3 --> */}
              <div className='bg-[#fff] rounded-[10px] p-5 h-[auto] w-[350px] mx-6 flex flex-col justify-between shadow-[0_10px_20px_rgba(151,109,0,0.2),_0_2px_4px_rgba(255,255,255,0.2)] 
      hover:shadow-[0_20px_40px_rgba(151,109,0,0.4),_0_4px_8px_rgba(255,255,255,0.2)] 
      transform hover:scale-105 transition-all duration-300'>
                <div>
                  <img className='w-[80px]' src={icon2} alt="" />
                </div>
                <div className='mt-10'>
                  <p className='text-[22px] font-bold'>Dukungan untuk Komunitas Lokal</p>
                  <p className='mt-2'> Kami juga mendukung bisnis lokal kepada UMKM, restoran dan kafe untuk mengurangi limbah makanan</p>
                  <button className='mt-3'>learn more</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section id='Testimonial' className='bg-[#FFF2E1] justify-center items-center'>
        <div className='flex justify-center items-center mx-[100px] mt-[100px]'>
          <div className='w-1/3 justify-center '>

            <p className='text-[#333333] text-[48px] font-semibold'>What Are People
              Saying About Us</p>

            <p className='mt-5'>We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.</p>

          </div>

          <div className='w-2/3 py-10 '>

            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className='rounded-[10px] bg-black p-5 flex flex-col items-center' >
                <div className='w-20 mb-5' >
                  <img className='w-3 rounded-full' src="" alt="" />

                </div>

                <div className=' h-[150px]     flex flex-col  items-center   rounded-[10px]'>

                  <p className='text-[18px] font-semibold'>Selena Gomez</p>
                  <p className='mt-2 text-[12px] text-start'>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className='rounded-[10px] bg-black p-5 flex flex-col items-center' >
                <div className='w-20 mb-5' >
                  <img className='w-3 rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                </div>

                <div className=' h-[150px]     flex flex-col  items-center   rounded-[10px]'>

                  <p className='text-[18px] font-semibold'>Selena Gomez</p>
                  <p className='mt-2 text-[12px] text-start'>The lorem50 salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className='rounded-[10px] bg-black p-5 flex flex-col items-center' >
                <div className='w-20 mb-5' >
                  <img className='w-3 rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                </div>

                <div className=' h-[150px]     flex flex-col  items-center   rounded-[10px]'>

                  <p className='text-[18px] font-semibold'>Selena Gomez</p>
                  <p className='mt-2 text-[12px] text-start'>The lorem50 salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide className='rounded-[10px] bg-black p-5 flex flex-col items-center' >
                <div className='w-20 mb-5' >
                  <img className='w-3 rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                </div>

                <div className=' h-[150px]     flex flex-col  items-center   rounded-[10px]'>

                  <p className='text-[18px] font-semibold'>Selena Gomez</p>
                  <p className='mt-2 text-[12px] text-start'>The lorem50 salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.</p>
                </div>
              </SwiperSlide>



            </Swiper>
          </div>

        </div>

      </section>


      <section id='service' className='bg-[#FEEFD0] flex justify-center items-center'>

        <div className='bg-white p-10 rounded-[20px] my-20 mx-[200px] flex w-full gap-16'>
          <div className='w-1/3 flex items-center justify-center'>
            <img src={discount} alt="" />
            <p
              className="text-[35px] font-semibold"
              style={{
                background: 'linear-gradient(to right, #FB3C00, #FFB800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Daily Discounts
            </p>
          </div>

          <div className='w-1/3 flex items-center justify-center'>
            <img src={cs} alt="" />
            <p
              className="text-[35px] font-semibold"
              style={{
                background: 'linear-gradient(to right, #FB3C00, #FFB800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              24/7Customer Support</p>
          </div>

          <div className='w-1/3 flex items-center justify-center'>
            <img src={quickdelivery} alt="" />
            <p
              className="text-[35px] font-semibold"
              style={{
                background: 'linear-gradient(to right, #FB3C00, #FFB800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Quick Delivery</p>
          </div>


        </div>


      </section>





    </div>
  )
}

export default Homepage