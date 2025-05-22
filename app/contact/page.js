import Image from "next/image";
import { ContactMainDisplay, ContactSliderMain,  } from "@/exports";

export default function ContactMain() {
  return (
    <main className="flex flex-col items-stretch sm:items-start sm:flex-row">
    <ContactMainDisplay />
    <ContactSliderMain />
    </main>
  );
}
