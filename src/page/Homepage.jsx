import React from 'react'
import people from '../assets/people.png'
import about from '../assets/about.png'
import icon from '../assets/icon-no1.png'
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

                <div className='bg-[#fff]'>

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



        </div>
    )
}

export default Homepage