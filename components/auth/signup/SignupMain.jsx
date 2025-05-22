import React from "react";
import { SignupHero, SignupForm } from "@/exports";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/exports/image-exports";

const SignupMain = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:h-screen relative">
      <Link
        href={"/"}
        className="absolute top-5 sm:top-3 md:top-5 lg:top-5 left-5 sm:left-3 md:left-5 lg:left-8"
      >
        <Image src={logo} alt={""} className="w-9" />
      </Link>
      <SignupForm />
      <SignupHero />
    </section>
  );
};

export default SignupMain;
