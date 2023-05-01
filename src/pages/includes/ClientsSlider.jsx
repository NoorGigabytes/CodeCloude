import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientsSlider() {
    const sliderRef = useRef(null)
    const images = [
        './assets/img/clients/ada.jpg',
        './assets/img/clients/ayj-logo.jpg',
        './assets/img/clients/cutis-hospital.jpg',
        './assets/img/clients/dell-logo.jpg',
        './assets/img/clients/hp-logo.jpg',
        './assets/img/clients/panda-kitchen-logo.jpg',
        './assets/img/clients/toshiba-logo.jpg',
        './assets/img/clients/tucana-lights-logo.jpg',
    ]

    const handleDragStart = (e) => {
        e.preventDefault();
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        touchMove: true,
        centerMode: true,
        centerPadding: "10px",
      }

  return (
    <div
      className="relative"
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="py-4 focus:outline-none">
            <img className="w-auto filter grayscale mx-0 h-auto hover:filter-none transition-all ease-out duration-300 delay-200" src={image} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
