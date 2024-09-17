
// import React, { useState } from 'react';
import cake from '../assets/cake-one.png'
import cake3 from '../assets/cake3.png'
import Layout from '../Components/Layout'
// import Preview from './Preview';


const Gallery = () => {

  

  return (
    <Layout>
    <div className="bg-pink-100" >
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full ">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">Coffee store</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   
      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4"
           
              >
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake} alt="Product 1" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Espresso</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">10
          </h4>
          <button 
              
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

    

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake3} alt="Product 2" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Mocha Madness</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$12
            {/* <strike
            className="text-gray-400 ml-2 font-medium">$17</strike> */}
          </h4>

          <button 
             
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>



      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake} alt="Product 3" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Caramel Cream Delight</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$14
          </h4>
          <button 
               
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake3} alt="Product 3" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Hazelnut Heaven Blend</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$12 <strike
            className="text-gray-400 ml-2 font-medium">$17</strike>
          </h4>
          <button 
             
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake} alt="Product 3" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Vanilla Velvet Brew</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$15 
          </h4>
          <button 
               
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake3} alt="Product 3" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Double Shot Symphony</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$14 
          </h4>
          <button 
              
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake} alt="Product 3" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Irish Cream Dream</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$11 
          </h4>
          <button 
              
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake3}alt="Product 3" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Coconut Bliss Coffee</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$13 
          </h4>
          <button 
               
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake} alt="Product 1" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Espresso Elegante</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$10 
          </h4>
          <button 
            
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake} alt="Product 1" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Espresso Elegante</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$10 
          </h4>
          <button 
                
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake} alt="Product 1" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Espresso Elegante</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$10 
          </h4>
          <button 
                
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
       
      </div>

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
        <div className="p-6">
          <div
            className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={cake} alt="Product 1" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="text-center bg-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800">Espresso Elegante</h3>
          <h4 className="text-lg text-gray-800 font-bold mt-6">$10 
          </h4>
          <button 
                
                className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                View Description
              </button>
        </div>
       
      </div>
    </div>
    </div>
</div>
</Layout>

  )
}

export default Gallery