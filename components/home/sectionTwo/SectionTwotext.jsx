import Link from "next/link";
import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

const SectionTwotext = () => {
  return (
    <div className="sm:w-[40%] h-full flex flex-col items-center self-center gap-5">
      <div className="flex flex-col gap-2 items-center self-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left capitalize sm:self-start">
          our story
        </h1>
        <p className="text-gray-600 text-center sm:text-left">
          Our journey began with a simple passion: to craft scents that capture
          memories and evoke emotions. From rare ingredients to timeless notes,
          each fragrance tells a story—one that we’re honored to share with you.
          Join us as we transform life’s moments into unforgettable aromas, one
          exquisite bottle at a time.
        </p>
      </div>
      <div className="flex w-full justify-between">
        <BiSolidLeftArrow className=" hover:text-scheme-gold transition-colors duration-300" />
        <Link
          href={"/"}
          className="hover:text-scheme-gold transition-colors duration-300"
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SectionTwotext;
