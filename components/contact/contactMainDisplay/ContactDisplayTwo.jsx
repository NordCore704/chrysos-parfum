import React from "react";
import Image from "next/image";
import { debonair, krish } from "@/exports/image-exports";

const ContactDisplayTwo = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:h-[40%] border-y">
      <div className="sm:w-[40%]">
        <Image
          src={debonair}
          alt="display"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:w-[30%] h-full p-2 flex flex-col gap-3 ">
        <div className="flex gap-2 items-center">
          <span className="w-4 h-4 bg-scheme-lightGold rounded-full"></span>{" "}
          <h3 className="text-bold md:text-lg uppercase"> Fragrance</h3>
        </div>

        <p className="sm:text-xs md:text-base">
          Our fragrances capture memories and moods, crafted from the finest
          ingredients for an unforgettable, lasting impression. From exotic
          florals to deep amber and rare woods, each scent tells a unique story.
          Experience quality that lingers beautifully, adding elegance and
          sophistication to every moment.
        </p>
      </div>
      <div className="sm:w-[30%]">
        <Image
          src={krish}
          alt="display"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactDisplayTwo;
