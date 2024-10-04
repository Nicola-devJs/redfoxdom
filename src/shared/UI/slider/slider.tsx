"use client";
import React from "react";
import SlickSlider, { Settings } from "react-slick";
import { mockTestImages } from "../../constants/property";
import { NextImage } from "../../components/NextImage";
import { DownIcon } from "@/shared/icons/down";
import "./slider.style.css";

export const Slider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <DownIcon />,
    nextArrow: <DownIcon />,
  };

  return (
    <div className="container-block mb-6 pb-6">
      <SlickSlider {...settings}>
        {Object.values(mockTestImages).map((img) => (
          <div key={img.src} className="px-2">
            <NextImage src={img} className="h-[400px]" />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};
