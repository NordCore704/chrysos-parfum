import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const ContactDisplayOne = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-8 justify-between w-full sm:h-[60%] p-5 sm:p-3 md:p-5 lg:p-8">
      <h2 className="text-2xl sm:text-5xl lg:text-6xl ">
        {" "}
        <span className="text-scheme-gold">We are </span> <br />{" "}
        <span className="ml-14">more than </span>
        <br /> <span className="ml-28 md:ml-32"> just a collection</span>
      </h2>

      <div className="flex gap-2 w-full">
        <div className="rounded-full p-4 h-10 w-10 bg-scheme-gold self-start relative">
          <FaArrowRightLong className="text-black text-xl font-semibold absolute top-[28%] -right-[32%]" />
        </div>
        <p className="text-bold text-black uppercase ml-3 self-center">
          Let's talk
        </p>

        <Link href={"/contact"} className='self-center text-black duration-200 transition-colors font-semibold hover:text-scheme-gold'>
          <FaWhatsapp />
        </Link>
        <Link href={"/contact"} className='self-center text-black duration-200 transition-colors font-semibold hover:text-scheme-gold'>
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default ContactDisplayOne;
