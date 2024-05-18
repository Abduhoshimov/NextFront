"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="bg-transparent inline-block cursor-pointer bottom-[50%] z-30  absolute right-[2%] text-black text-[20px]"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="bg-transparent inline-block cursor-pointer bottom-[50%] z-30  absolute left-[2%] text-black text-[20px]"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}


const Carusel = ({ children }: { children: any }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    leftArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}

export default Carusel