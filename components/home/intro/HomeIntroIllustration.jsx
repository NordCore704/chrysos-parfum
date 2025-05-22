import React from "react";
import {
  blackGoldNoBg,
  brickNoBg,
  fatBottleNoBg,
  allGoldNoBg,
  blackBigNoBg,
  clearNoBg,
  longBottleNoBg,
  twoBlackGoldNoBg,
  goldPetals,
} from "@/exports/image-exports";
import Image from "next/image";

const HomeIntroIllustration = () => {
  return (
    <div className="sm:w-[55%] lg:w-[55%] flex flex-col items-center justify-center lg:justify-between mt-5 sm:mt-0 relative overflow-hidden">
      <Image alt="image-perfume" src={clearNoBg} className='z-10 lg:self-end lg:justify-self-end' />
      <Image src={goldPetals} alt='petals' className='absolute right-0 bottom-0 hidden sm:block md:w-[40%] lg:w-[45%] lg:-bottom-3'/>
    </div>
  );
};

export default HomeIntroIllustration;
