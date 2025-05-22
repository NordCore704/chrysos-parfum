"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { IoIosCloseCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="fixed top-0 right-0 w-[60%] sm:w-80 h-full bg-white shadow-lg p-3 sm:p-6 z-50 border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-black hover:text-scheme-gold transition-colors duration-300"
        >
          <IoIosCloseCircle size={20}/>
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center my-2"
            >
              <span>{item.name}</span>
              <span>{item.price}</span>
              <button
                className="text-red-500 hover:text-red-400 duration-200 transition-colors"
                onClick={() => removeFromCart(item.id)}
              >
                <MdDelete size={20}/>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
