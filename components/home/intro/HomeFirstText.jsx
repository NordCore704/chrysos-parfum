import Link from "next/link";
import React from "react";

const HomeFirstText = () => {
  return (
    <div className="flex flex-col gap-3 items-start sm:mt-8 sm:w-[55%] lg:w-[40%] z-10">
      <p className="bg-scheme-purpleThree text-scheme-purple uppercase rounded-xl sm:w-52 w-52 font-semibold text-sm text-center sm:text-left sm:self-start self-center">
        tell your story
      </p>
      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left sm:self-start self-center">
          Explore, indulge, and let your senses guide you
        </h1>
        <p className="text-gray-600 text-center sm:text-left">
          From bold and daring to subtle and sensual, we have a fragrance for
          every personality. Whether {`you're`} looking for a signature scent or the
          perfect gift, let us guide you on a sensory journey where each bottle
          holds a new experience.
        </p>
      </div>
      <Link
        href={"/auth/signup"}
        className={
          "py-1.5 px-3 bg-scheme-gold text-white shadow-md hover:bg-scheme-lightGold self-center sm:self-start"
        }
      >
        Shop Now
      </Link>
    </div>
  );
};

export default HomeFirstText;
