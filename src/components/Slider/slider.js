import React, { useState } from "react";
import "./slider.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = () => {
  const slides = [
    {
      url: "/static/pixelcut4.jpeg",
    },
    {
      url: "/static/pixelcut3.jpeg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="slider-container"
      ></div>
      <div className="Bs-Left">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="Bs-Right">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Slider;
