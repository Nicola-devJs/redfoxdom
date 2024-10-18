"use client";
import React from "react";
import SlickSlider, { Settings } from "react-slick";
import { mockTestImages } from "../../constants/mockData";
import { NextImage } from "../../components/NextImage";
import { DownIcon } from "@/shared/icons/down";
import "./slider.style.css";

interface IProps {}

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
        <DownIcon className="size-5 fill-white max-md:size-4" />
      </div>
    ),
    nextArrow: (
      <div>
        <DownIcon className="size-5 fill-white max-md:size-4" />
      </div>
    ),
  };

  return (
    <div className="container-block mb-6 pb-6">
      <SlickSlider {...settings}>
        {Object.values(mockTestImages).map((img) => (
          <div key={img.src} className="p-2">
            <NextImage src={img} className="h-full" alt="slide" />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};
