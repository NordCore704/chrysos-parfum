import React from "react";
import Image from "next/image";
import { blackBigNoBg, blackGoldNoBg } from "@/exports/image-exports";
import { FaCartPlus } from "react-icons/fa6";
import { BiCartAdd } from "react-icons/bi";
import { mostRecent } from "@/utils/data";
import { useCart } from "@/context/CartContext";
import { TbShoppingBagPlus, TbShoppingBagMinus } from "react-icons/tb";
import Link from "next/link";

const SliderSectionPerfumeMain = () => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  return (
    <div className="flex flex-col gap-5 w-full p-5 sm:p-3 md:p-5 lg:p-8 ">
      <div className="flex flex-col gap-3">
        <p className=" uppercase rounded-xl sm:w-52 w-52 font-semibold text-sm text-center sm:text-left sm:self-start self-center">
          shop
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left sm:self-start self-center">
          Our Recent Perfumes
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        {mostRecent.map((item, index) => (
          <figure className=" sm:flex sm:items-center sm:flex-col sm:self-stretch sm:w-[40%] md:w-[60%]" key={index}>
            <Link href={`/shop/${item.id}`} className='sm:w-full sm:h-full hover:scale-110 transition-transform duration-200'>
            <Image src={item.image} alt={"perfume-bottle"} className='sm:w-full sm:h-full object-cover' />
            </Link>
          
          </figure>
        ))}
        {mostRecent.map((perfume, index) => {
          const isInCart = cartItems.some((item) => item.id === perfume.id);
          return (
            <figcaption
              key={index}
              className="flex flex-col gap-4 sm:w-[60%] md:w-[40%] items-start sm:self-stretch"
            >
              <div className="flex flex-col gap-2">
                <h3 className="uppercase text-xl sm:text-2xl ">
                  {perfume.name}
                </h3>
                <p className="uppercase text-gray-700 ">
                  {perfume.description}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-700 capitalize">
                  Gender: {perfume.gender}
                </p>
                <p className="text-gray-700 capitalize">Form: {perfume.form}</p>
                <p className="font-semibold capitalize">
                  Capacity: {perfume.capacity}
                </p>
                <p className="text-gray-700 capitalize">
                  Scent: {perfume.scent}
                </p>
                <p className="text-gray-700 capitalize">
                  Container: {perfume.container}
                </p>
                <p className="text-gray-700 capitalize">
                  State: {perfume.state}
                </p>
              </div>
              <div className="flex justify-between w-full gap-2">
                <h3 className="uppercase text-xl sm:text-2xl ">
                  {perfume.price}
                </h3>
                {isInCart ? (
                  <button
                    className={
                      "py-1.5 px-3 bg-scheme-gold text-white shadow-md hover:bg-scheme-lightGold self-center sm:self-start flex gap-2 items-center text-center sm:w-48"
                    }
                    onClick={() => removeFromCart(perfume.id)}
                  >
                    <TbShoppingBagMinus className="text-lg" />
                     Remove from cart
                  </button>
                ) : (
                  <button
                    className={
                      "py-1.5 px-3 bg-scheme-gold text-white shadow-md hover:bg-scheme-lightGold self-center text-center sm:self-start flex gap-2 items-center sm:w-48"
                     
                    }
                    onClick={() => addToCart(perfume)}
                  >
                    <TbShoppingBagPlus className="text-lg" />
                    Add item to cart
                  </button>
                )}
              </div>
            </figcaption>
          );
        })}
      </div>
    </div>
  );
};

export default SliderSectionPerfumeMain;
