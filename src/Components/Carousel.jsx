import React, { useState, useEffect, useRef, useCallback } from "react";
import cakesOfTheWeek from "../data/data.js";
import { Icon } from "@iconify/react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesRef = useRef(null);

  // Memoize handleNext to avoid it being redefined on each render
  const handleNext = useCallback(() => {
    if (isAnimating) return; // Prevent spamming buttons while sliding
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === cakesOfTheWeek.length - 1 ? 0 : prevIndex + 1
    );
  }, [isAnimating]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cakesOfTheWeek.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [handleNext]);

  // Reset animation flag after each slide transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Matches the CSS transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-7xl mx-auto py-8 relative h-auto md:h-auto lg:h-96 overflow-hidden rounded-lg">
      <div className="relative overflow-hidden">
        <div
          ref={slidesRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cakesOfTheWeek.map((cake, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              {/* Cake Information */}
              <div className="flex-1 flex flex-col md:flex-row items-center justify-between bg-pink-200 shadow-lg rounded-lg p-6 sm:p-8 w-full">
                <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-40 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left px-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                    {cake.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 mb-4">
                    {cake.description}
                  </p>
                  <h4 className="text-lg sm:text-xl font-semibold mb-4">
                    {cake.price}
                  </h4>
                  <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 p-2"
      >
        <Icon
          icon="iconamoon:arrow-left-2-duotone"
          width="32"
          height="32"
          style={{ color: "#6d4672" }}
        />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 p-2"
      >
        <Icon
          icon="iconamoon:arrow-right-2"
          width="32"
          height="32"
          style={{ color: "#6d4672" }}
        />
      </button>
    </div>
  );
};

export default Carousel;
