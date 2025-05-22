"use client";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import {
  whitePictureOne,
  whitePictureSix,
  whitePictureTwo,
  skeletonNoBg,
  whitePictureEight,
  whitePictureNine,
  whitePictureTen,
  whitePictureEleven,
  whitePictureTwelve,
} from "@/exports/image-exports";

const images = [
  skeletonNoBg,
  whitePictureTen,
  whitePictureEleven,
  whitePictureTwelve,
];

const ContactSliderOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const goToNext = () => setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <div className="relative flex flex-col gap-5 sm:gap-8 justify-between items-stretch w-full sm:h-[70%] h-[400px]">
      {/* Slider Images */}
      <div className="overflow-hidden h-full w-full">
        <div
          className="flex items-stretch transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full min-h-full ">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover ${
                  "grayscale" ? index === 1 : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Control Buttons */}
      <div className="flex gap-2 items-center absolute bottom-4 left-4">
        <button
          onClick={goToPrevious}
          className="text-black hover:text-scheme-gold transition-colors duration-300"
        >
          <FaArrowLeftLong size={15} />
        </button>
        <button
          onClick={goToNext}
          className="text-black hover:text-scheme-gold transition-colors duration-300"
        >
          <FaArrowRightLong size={15} />
        </button>
      </div>
    </div>
  );
};

export default ContactSliderOne;
