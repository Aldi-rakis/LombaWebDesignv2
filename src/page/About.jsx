import React, { useState } from 'react';
import phone from '../assets/phone.png'
import { FaRegSmile } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiFlag } from "react-icons/fi";
import apple from '../assets/Apple_logo.png'
import playstore from '../assets/playstore.png'
import FAQ from '../assets/faq.png'
const About = () => {
  // State untuk menyimpan status apakah FAQ dibuka atau tidak
  const [openFAQ, setOpenFAQ] = useState(null);

  // Fungsi untuk menangani klik pada FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle antara membuka dan menutup FAQ
  };

  return (
    <div>

       



      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
            <div className="w-full lg:w-1/2 my-16">
              <img
                src={FAQ}
                alt="FAQ tailwind section"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h6 className="text-lg text-center font-medium text-orange-500 mb-2 lg:text-left">
                    FAQ
                  </h6>
                  <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                    Looking for answers?
                  </h2>
                </div>
                <div className="accordion-group">
                  {/* Accordion Item 1 */}
                  <div className="accordion pb-8 border-b border-solid border-gray-200">
                    <button
                      onClick={() => toggleFAQ(1)}
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hoorangetext-orange-500"
                    >
                      <h5 className='text-start'>Apa itu FoodCycle?</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hoorangetext-orange-500 ${openFAQ === 1 ? 'rotate-180' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openFAQ === 1 && (
                      <div className="accordion-content w-full px-0 overflow-hidden pr-4">
                        <p className="text-base font-normal text-gray-600">
                        FoodCycle adalah platform yang menghubungkan pengguna dengan makanan surplus berkualitas dari restoran dan kafe. Kami membantu mengurangi limbah makanan dengan menawarkan makanan sisa yang masih layak dikonsumsi dan lezat dengan harga terjangkau.                        </p>
                      </div>
                    )}
                  </div>
                  {/* Accordion Item 2 */}
                  <div className="accordion py-8 border-b border-solid border-gray-200">
                    <button
                      onClick={() => toggleFAQ(2)}
                      className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hoorangetext-orange-500"
                    >
                      <h5 className='text-start'>Apakah makanan yang ditawarkan aman dikonsumsi??</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hoorangetext-orange-500 ${openFAQ === 2 ? 'rotate-180' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openFAQ === 2 && (
                      <div className="accordion-content w-full px-0 overflow-hidden pr-4">
                        <p className="text-base text-gray-500 font-normal">
                        Ya, semua makanan di FoodCycle berasal dari mitra restoran terpercaya yang memastikan makanan tetap segar dan aman untuk dikonsumsi. Kami sangat menjaga kualitas dan keamanan setiap hidangan.                        </p>
                      </div>
                    )}
                  </div>
                  {/* Accordion Item 3 */}
                  <div className="accordion py-8 border-b border-solid border-gray-200">
                    <button
                      onClick={() => toggleFAQ(3)}
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hoorangetext-orange-500"
                    >
                      <h5 className='text-start'>Metode pembayaran apa saja yang diterima?</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hoorangetext-orange-500 ${openFAQ === 3 ? 'rotate-180' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openFAQ === 3 && (
                      <div className="accordion-content w-full px-0 overflow-hidden pr-4">
                        <p className="text-base text-gray-500 font-normal">
                        Kami menerima berbagai metode pembayaran, termasuk transfer bank, e-wallet, dan pembayaran melalui QR code. Semua transaksi dijamin aman                        </p>
                      </div>
                    )}
                  </div>
                  {/* Accordion Item 4 */}
                  <div className="accordion py-8">
                    <button
                      onClick={() => toggleFAQ(4)}
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hoorangetext-orange-500"
                    >
                      <h5 className='text-start'> Bagaimana cara memesan makanan di FoodCycle?</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hoorangetext-orange-500 ${openFAQ === 4 ? 'rotate-180' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openFAQ === 4 && (
                      <div className="accordion-content w-full px-0 overflow-hidden pr-4">
                        <p className="text-base text-gray-500 font-normal">
                        Cukup pilih makanan yang Anda inginkan dari pilihan yang tersedia, tambahkan ke keranjang, lakukan pembayaran, dan pilih metode pengantaran atau pickup sesuai keinginan Anda. Proses pemesanan sangat mudah dan cepat!                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-start">
                  <button className="mt-8 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-orange-500 border border-transparent rounded-md hover:bg-orange-600 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default About;
