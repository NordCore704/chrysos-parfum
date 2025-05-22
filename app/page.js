import Image from "next/image";
import { HomeIntro, SectionFiveMain, SectionFourMain, SectionTwo, SliderSectionMain,  } from "@/exports";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <HomeIntro />
      <SectionTwo />
      <SliderSectionMain />
      <SectionFourMain />
      <SectionFiveMain />
    </main>
  );
}
