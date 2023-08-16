import React, { useState, useEffect } from "react";


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-full relative">
      {images.map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt="RecipiesImages"
          className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 translate-y-0" : "opacity-40 -translate-y-full"
          }`}
        />
      ))}

  
    </div>
  );
};

export default ImageSlider;
