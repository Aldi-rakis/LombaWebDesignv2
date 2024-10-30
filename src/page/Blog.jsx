import React from 'react';
import berita1 from '../assets/blog/berita-1.jpg'
import berita2 from '../assets/blog/berita-2.jpg'
import berita3 from '../assets/blog/berita-3.jpg'
import berita4 from '../assets/blog/berita-4.jpeg'
import berita5 from '../assets/blog/berita-5.webp'
import { Link } from 'react-router-dom';



const Blog = () => {
  return (
    <div className='py-20 bg-gradient-to-tr from-white to-[rgba(249,225,191,0.85)] min-h-screen'>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          
          {/* Post 1 */}
          <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                src={berita1}                 
                alt="Blog Image" />
              </div>
              <div className="grow">
                <Link to="/blog/detail" >
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                Efek Daya Beli Turun, Food Court Mal Kian Sepi?
                </h3>
                <p className="mt-3 text-gray-600">
                  Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-orange-400 decoration-2 group-hover:underline group-focus:underline font-medium">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
                </Link>
               
              </div>
            </div>
          </a>

          {/* Post 2 */}
          <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                src={berita2}                 
                alt="Blog Image" />            
                  </div>
              <div className="grow">
              <Link to="/blog/detail" >
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  Onsite
                </h3>
                <p className="mt-3 text-gray-600">
                  Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-orange-400 decoration-2 group-hover:underline group-focus:underline font-medium">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
                </Link>
              </div>
            </div>
          </a>

          {/* Post 3 */}
          <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                src={berita3}                 
                alt="Blog Image" />             
                 </div>
              <div className="grow">
              <Link to="/blog/detail" >
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  The complete guide to OKRs
                </h3>
                <p className="mt-3 text-gray-600">
                  How to make objectives and key results work for your company
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-orange-400 decoration-2 group-hover:underline group-focus:underline font-medium">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
                </Link>
              </div>
            </div>
          </a>

          {/* Post 4 */}
          <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                src={berita4}                 
                alt="Blog Image" />              
                </div>
              <div className="grow">
              <Link to="/blog/detail" >
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  People program models
                </h3>
                <p className="mt-3 text-gray-600">
                  Six approaches to bringing your People strategy to life
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-orange-400 decoration-2 group-hover:underline group-focus:underline font-medium">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
                </Link>
              </div>
            </div>
          </a>


           {/* Post 5 */}
           <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                src={berita5}                 
                alt="Blog Image" />            
                  </div>
              <div className="grow">
              <Link to="/blog/detail" >
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  People program models
                </h3>
                <p className="mt-3 text-gray-600">
                  Six approaches to bringing your People strategy to life
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-orange-400 decoration-2 group-hover:underline group-focus:underline font-medium">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
                </Link>
              </div>
            </div>
          </a>

           {/* Post 6 */}
           <a className="group block rounded-xl overflow-hidden focus:outline-none" href="#">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                src={berita1}                 
                alt="Blog Image" />              
                </div>
              <div className="grow">
              <Link to="/blog/detail" >
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  People program models
                </h3>
                <p className="mt-3 text-gray-600">
                  Six approaches to bringing your People strategy to life
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-orange-400 decoration-2 group-hover:underline group-focus:underline font-medium">
                  Read more
                  <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
                </Link>
              </div>
            </div>
          </a>



        </div>
      </div>
    </div>
  );
};

export default Blog;
