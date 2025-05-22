"use client";
import React from "react";
import { perfumeData } from "@/utils/data";
import Image from "next/image";
import { TbShoppingBagPlus, TbShoppingBagMinus } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const ShopGrid = () => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full">
      {perfumeData.map((perfume) => {
        const isInCart = cartItems.some((item) => item.id === perfume.id);

        return (
          <div
            key={perfume.id}
            className="rounded-lg bg-gray-200 shadow-lg p-4 flex flex-col justify-between items-center gap-4 relative"
          >
            <button className="rounded-full h-10 w-10 p-3 bg-white absolute top-5 right-5 text-black hover:text-scheme-gold duration-300 transition-colors text-center flex items-center">
              <p className="self-center">
                <FaHeart className="" />
              </p>
            </button>

            <Link href={`/shop/${perfume.id}`} className="hover:scale-110 transition-transform duration-200">
              <Image
                src={perfume.image}
                alt={perfume.name}
                width={100}
                height={100}
                className="w-full self-center"
              />
            </Link>

            <div className="flex gap-4 items-center rounded-xl bg-white p-2 w-full justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-black">
                  {perfume.name}
                </h3>
                <p className="text-base text-black ">{perfume.price}</p>
              </div>

              {isInCart ? (
                <button
                  className="text-xl self-end hover:text-red-500 duration-300 transition-colors"
                  onClick={() => removeFromCart(perfume.id)}
                >
                  <TbShoppingBagMinus />
                </button>
              ) : (
                <button
                  className="text-xl self-end hover:text-scheme-gold duration-300 transition-colors"
                  onClick={() => addToCart(perfume)}
                >
                  <TbShoppingBagPlus />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopGrid;
