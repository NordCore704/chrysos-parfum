import Image from "next/image";
import { HomeIntro, SectionFiveMain, SectionFourMain, SectionTwo, SliderSectionMain, ShopMain,  } from "@/exports";

export default function Shop() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <ShopMain />
    </main>
  );
}
