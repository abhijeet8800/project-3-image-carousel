import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fallbackImage = 'https://via.placeholder.com/600x400';

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative max-w-xl mx-auto overflow-hidden">
      <div className="flex items-center">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={goToPrev}
        >
          &#10094;
        </button>
        <img
          src={images[currentIndex]}
          alt="carousel"
          onError={(e) => (e.target.src = fallbackImage)}
          className="w-full transition-transform duration-500 ease-in-out"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
