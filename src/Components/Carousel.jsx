// src/components/Carousel.js
import React, { useState } from 'react';
import cakesOfTheWeek from '../data/data.js'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cakesOfTheWeek.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cakesOfTheWeek.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 bg-pink-300 relative  h-56 overflow-hidden rounded-lg md:h-96" data-carousel="slide" id=" default-carousel"  >
      <div className="flex items-center justify-between space-x-4 p-4">
        {/* Previous Button */}
        <button onClick={handlePrev} className="text-gray-600 hover:text-gray-900 p-2">
          &#8249; {/* Left arrow */}
        </button>

        {/* Cake Information */}
        
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between bg-pink-200 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Cakes of the Week</h2>
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img src={cakesOfTheWeek[currentIndex].image} alt={cakesOfTheWeek[currentIndex].name} className="w-full h-48 object-cover rounded-lg" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex-1">
            <h3 className="text-2xl font-bold">{cakesOfTheWeek[currentIndex].name}</h3>
            <p className="mt-2 text-gray-600">{cakesOfTheWeek[currentIndex].description}</p>
            <h4 className="mt-4 text-lg font-semibold">{cakesOfTheWeek[currentIndex].price}</h4>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
              Order Now
            </button>
          </div>
        </div>

        {/* Next Button */}
        <button onClick={handleNext} className="text-gray-600 hover:text-gray-900 p-2">
          &#8250; {/* Right arrow */}
        </button>
      </div> 
    </div>
  );
};

export default Carousel;







