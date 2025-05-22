
import Image from "next/image";
import { SinglePerfume } from "@/exports";
import { perfumeData } from "@/utils/data";

export default function PerfumeDetail({ params }) {
  const { id } = params;

  // Find the perfume based on the ID

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <SinglePerfume id={id}/>
    </main>
  );
}
