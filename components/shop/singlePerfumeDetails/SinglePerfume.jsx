"use client";
import { perfumeData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SinglePerfume = ({ id }) => {
  const perfume = perfumeData.find((item) => item.id === parseInt(id));

  if (!perfume) {
    // Redirect to 404 if perfume not found
    notFound();
  }
  return (
    <div className="p-6 flex flex-col items-center gap-6 w-full">
      <Image
        src={perfume.image}
        alt={perfume.name}
        width={300}
        height={300}
        className="rounded-lg"
      />
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{perfume.name}</h1>
        <p className="text-xl text-gray-700 mt-2">{perfume.price}</p>
        <p className="mt-4 text-gray-600">
          {perfume.description || "No description available."}
        </p>
        <Link
          href={""}
          className=" self-center hover:bg-scheme-lightGold duration-300 transition-colors p-2 text-white bg-scheme-gold "
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default SinglePerfume;
