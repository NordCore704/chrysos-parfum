import React from "react";
import { SectionFiveDisplay, SectionFiveText } from "@/exports";

const SectionFiveMain = () => {
  return (
    <section className='p-5 sm:p-3 md:p-5 lg:p-8 flex flex-col-reverse sm:flex-row gap-5 justify-between'>
      <SectionFiveText />
      <SectionFiveDisplay />
    </section>
  );
};

export default SectionFiveMain;
