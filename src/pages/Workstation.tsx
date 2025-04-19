import React, { useEffect, useState } from 'react'

const Workstation = () => {
  const images = [
    "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [current]);

  return (
   <>
 
 
    <div className=" relative w-full max-w-2xl mx-auto mt-10 overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-normal duration-1000 ease-linear"
      />

      {/* Navigation Buttons */}
   
     

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
   </>
  )
}

export default Workstation