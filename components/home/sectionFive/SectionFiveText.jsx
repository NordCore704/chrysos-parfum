import Link from "next/link";
import React from "react";

const SectionFiveText = () => {
  return (
    <div className="sm:w-[40%] sm:h-full flex flex-col items-center self-center gap-5 w-full">
      <div className="flex flex-col gap-2 items-center self-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left capitalize sm:self-start">
          Shop Now!
        </h1>
        <p className="text-gray-600 text-center sm:text-left">
        Unleash your scent journey! Dive into our curated collection and find your signature fragrance. Ready to make every moment unforgettable? Your new favorite scent awaits—just a click away!
        </p>
        <Link href={'/'} className='p-2 bg-scheme-gold hover:bg-scheme-goldThree text-white duration-300 transition-colors self-start mt-2'>Go Now</Link>
      </div>
 
    </div>
  );
};

export default SectionFiveText;
