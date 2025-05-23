"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { logo, } from "@/exports/image-exports";
import MobileNavbar from "./MobileNavbar";
import gsap, { Power3 } from "gsap";
import { RiCloseFill, RiMenu4Fill } from "react-icons/ri";
import { Inter, Poppins, Archivo, Alatsi, Alata } from "next/font/google";
import { signOut, useSession } from "next-auth/react";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  subsets: ["latin"],
});
const alatsi = Alatsi({
  subsets: ["latin"],
  weight: "400",
});

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  // const { data: session, status } = useSession();

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  const router = useRouter();
  const currentRoute = usePathname();

  const navRef = useRef();
  const logoRef = useRef();
  const listRefOne = useRef();
  const listRefTwo = useRef();
  const listRefThree = useRef();
  const listRefFour = useRef();
  let timeline = gsap.timeline();

  // const getButtonText = () => {
  //   if (!session) return 'Log In';

  //   if (session?.user?.role === 'admin') {
  //     return currentRoute === '/adminDashboard' ? 'Log Out' : 'Dashboard';
  //   }

  //   if (session?.user?.role === 'user') {
  //     return currentRoute === '/dashboard' ? 'Log Out' : 'Dashboard';
  //   }

  //   return 'Log In';
  // };

  // const handleButtonClick = () => {
  //   if (!session) {
  //     router.push('/auth/login');
  //     return;
  //   }

  //   if (session?.user?.role === 'admin') {
  //     if (currentRoute !== '/adminDashboard') {
  //       router.push('/adminDashboard');
  //     } else {
  //       signOut();
  //     }
  //     return;
  //   }

  //   if (session?.user?.role === 'user') {
  //     if (currentRoute !== '/dashboard') {
  //       router.push('/dashboard');
  //     } else {
  //       signOut();
  //     }
  //   }
  // };

  useEffect(() => {
    timeline
      .to(logoRef.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        duration: 0.6,
      })
      .to(listRefOne.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefTwo.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefThree.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefFour.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.8,
      });
  });

  const listAnimationVariant = {
    init: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  useEffect(() => {
    !toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggle]);

  return (
    <header
      className={`header overflow-hidden px-5 sm:px-3 md:px-5 lg:px-8 py-2`}
      ref={navRef}
    >
      <nav className=" flex justify-between items-center h-12 ">
        <div
          className=" py-3 flex justify-center items-center h-[64px] opacity-0 -translate-x-8"
          ref={logoRef}
        >
          <Link href={"/"}>
            <Image src={logo} height={40} alt={"logo"} />
            {/* <p
              className={`text-xl font-extrabold self-end ${alatsi.className}`}
            ></p> */}
          </Link>
        </div>
        <div className="flex items-center">
          {toggle ? (
            <button
              alt="hamburger"
              onClick={toggleNav}
              className="hamburger flex cursor-pointer md:hidden lg:hidden sm:hidden transition-opacity duration-300 hover:text-scheme-gold text-2xl"
            >
              <RiMenu4Fill />
            </button>
          ) : (
            <button
              onClick={toggleNav}
              className="hamburger flex cursor-pointer z-40 md:hidden lg:hidden sm:hidden transition-opacity duration-300 hover:text-scheme-gold text-2xl"
              alt="closeburger"
            >
              <RiCloseFill />
            </button>
          )}
          <motion.ul
            variants={listAnimationVariant}
            animate="animate"
            initial="init"
            transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
            className={`gap-4 hidden list-none lg:flex md:flex sm:flex font-semibold rounded-full bg-scheme-darkerGrey py-1.5 px-5`}
          >
            <li
              className="-translate-x-8 opacity-0 hover:text-scheme-lightGold text-white transition-colors duration-300"
              ref={listRefOne}
            >
              <Link
                href={"/"}
                className={currentRoute === "/" ? "text-scheme-gold" : ""}
              >
                Home
              </Link>
            </li>
  
            <li
              className="-translate-x-8 opacity-0 hover:text-scheme-lightGold text-white transition-colors duration-300"
              ref={listRefTwo}
            >
              <Link
                href={"/shop"}
                className={
                  currentRoute === "/shop" ? "text-scheme-gold" : ""
                }
              >
                {" "}
                Shop
              </Link>
            </li>
            <li
              className="-translate-x-8 opacity-0 hover:text-scheme-lightGold text-white transition-colors duration-300"
              ref={listRefThree}
            >
              <Link
                href={"/contact"}
                className={
                  currentRoute === "/contact" ? "text-scheme-gold" : ""
                }
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        </div>
        <motion.div
          className="hidden sm:flex"
          variants={listAnimationVariant}
          animate="animate"
          initial="init"
          transition={{ duration: 0.4, type: "spring" }}
        >
          {
            <button
              
              className={`bg-scheme-gold hover:bg-gradient-to-br hover:bg-scheme-lightGold  px-3 py-1 text-white hidden sm:flex  transition-colors duration-300 ${
                currentRoute === "/dashboard" ? "active" : ""
              }`}
            >
              Log In
            </button>
          }
          {/* ====== */}
        </motion.div>

        {!toggle ? (
          <MobileNavbar alata={alata} setToggle={setToggle} toggle={toggle} />
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
