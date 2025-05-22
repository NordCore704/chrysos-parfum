"use client";
import { useRef } from "react";
import {
  goldPetals,
  sliderBottleFourNoBg,
  sliderBottleOneNoBg,
  sliderBottleThreeNoBg,
  sliderBottleTwoNoBg,
} from "@/exports/image-exports";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { recentFour } from "@/utils/data";
import { TbShoppingBagMinus, TbShoppingBagPlus } from "react-icons/tb";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const SliderMain = () => {
  const carouselRef = useRef(null);
  const { addToCart, removeFromCart, cartItems } = useCart();

  const slides = [
    {
      imgSrc: sliderBottleOneNoBg,
      title: "Creed Williams",
      volume: "100ml",
      price: "$15.99",
    },
    {
      imgSrc: sliderBottleTwoNoBg,
      title: "Davis Taylor",
      volume: "100ml",
      price: "$39.66",
    },
    {
      imgSrc: sliderBottleThreeNoBg,
      title: "Elyse Creek",
      volume: "100ml",
      price: "$20.35",
    },
    {
      imgSrc: sliderBottleFourNoBg,
      title: "Black Orchid",
      volume: "100ml",
      price: "$25.69",
    },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Navigation buttons */}
      <div className="flex gap-2 items-center px-5 sm:px-3 md:px-5 lg:px-8">
        <button
          onClick={scrollLeft}
          className="text-xl sm:text-2xl hover:text-scheme-lightGold duration-200 transition-colors"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={scrollRight}
          className="text-xl sm:text-2xl hover:text-scheme-lightGold duration-200 transition-colors"
        >
          <FaArrowRightLong />
        </button>
      </div>
      <div className="w-full flex justify-between gap-5 ">
        {/* Carousel */}

        <section
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth  w-[80%] sm:w-[80%] lg:w-[90%]"
        >
          {recentFour.map((slide, index) => {
            const isInCart = cartItems.some((item) => item.id === slide.id);
            return (
              <div
                key={index}
                className="w-[250px] h-[250px] p-2 bg-scheme-goldThree flex-shrink-0 flex flex-col gap-3 justify-between group hover:bg-black transition-colors duration-300 bg-opacity-30"
              >
                <Link href={`/shop/${slide.id}`} className="relative w-full h-[60%] hover:scale-110 transition-transform duration-200">
                  <Image
                    src={slide.image}
                    alt="bottle"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md object-contain"
                  />
                </Link>

                <article className="flex flex-col gap-2 items-center">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl uppercase text-center group-hover:text-white">
                      {slide.name}
                    </h3>
                    <p className="text-center group-hover:text-white">
                      {slide.capacity}
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="text-center text-xl group-hover:text-white">
                      {slide.price}
                    </p>
                    {isInCart ? (
                      <button
                        className="text-xl self-end  duration-300 transition-colors group-hover:text-white hover:text-red-500"
                        onClick={() => removeFromCart(slide.id)}
                      >
                        <TbShoppingBagMinus />
                      </button>
                    ) : (
                      <button
                        className="text-xl self-end hover:text-scheme-gold duration-300 transition-colors"
                        onClick={() => addToCart(slide)}
                      >
                        <TbShoppingBagPlus />
                      </button>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </section>
        <div className="w-[20%] sm:w-[10%] relative lg:w-[5%] flex  ">
          {/* <Image src={goldPetals} className='absolute -right-48 -z-10' alt="petals" /> */}
        </div>
      </div>
    </div>
  );
};

export default SliderMain;
