'use client'
import React from "react";
import { SliderMain, SliderSectionPerfumeMain } from "@/exports";

const SliderSectionMain = () => {
  return (
    <section className="py-3 lg:py-5 flex flex-col gap-5 justify-between max-w-full">
      <SliderSectionPerfumeMain />
      <SliderMain />
    </section>
  );
};

export default SliderSectionMain;
