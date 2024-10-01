"use client";
import React from "react";
import SlickSlider, { Settings } from "react-slick";
import { mockTestImages } from "../../constants";
import { NextImage } from "../../components/NextImage";
import { DownIcon } from "@/shared/icons/down";
import "./slider.style.css";

export const Slider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    prevArrow: (
      <div>
        <DownIcon className="size-5 fill-white" />
      </div>
    ),
    nextArrow: (
      <div>
        <DownIcon className="size-5 fill-white" />
      </div>
    ),
  };

  return (
    <div className="container-block mb-6 pb-6">
      <SlickSlider {...settings}>
        {Object.values(mockTestImages).map((img) => (
          <div key={img.src} className="px-2">
            <NextImage src={img} className="h-[500px]" />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};
