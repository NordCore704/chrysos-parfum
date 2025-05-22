"use client";
import React, { useState } from "react";
import { ShopGrid, Cart } from "@/exports";
import { TbShoppingBag } from "react-icons/tb";
import { useCart } from "@/context/CartContext";

const ShopMain = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <section className="p-5 sm:p-3 md:p-5 lg:p-8 flex flex-col gap-4 w-full">
      <div className="flex justify-between">
        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-semibold text-scheme-gold">
          Our Best Collection
        </h3>
        <button
          className="hover:text-scheme-gold duration-300 transition-colors relative"
          onClick={toggleCart}
        >
          {cartItems.length === 0 && (
            <div className="absolute top-3.5 sm:top-2 lg:top-4 -left-1 w-3 h-3 rounded-full bg-scheme-gold animate-ping transition-transform duration-200"></div>
          )}
          <TbShoppingBag className="" size={25} />
          {cartItems.length > 0 && (
            <span className="absolute top-2 sm:-top-1 lg:top-1 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      <ShopGrid />
      {/* Conditional rendering for Cart */}
      {isCartOpen && <Cart onClose={toggleCart} />}
    </section>
  );
};

export default ShopMain;
