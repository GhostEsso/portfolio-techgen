"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import TrustedBrands from "./TrustedBrands";

export default function LampDemo() {
  return (
    <>
      <Navbar />
      <br />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          id="why-nexgen"
          className=" bg-gradient-to-br mt-72 md:text-center from-slate-300 to-white bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl m-[-100px]"
        >
          <strong>TechGen, <br /></strong><strong>new generation</strong> <br /> of{" "}
          <strong>Tech Services</strong>
          <br />
          <div className="text-center pt-10">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              With access to top-notch developers <br />
              and over 10 specialized coding services, <br /> we&apos;ve got
              your back.
            </p>
          </div>
          <br />
          <button className=" bg-white text-black text-xl py-2 px-32  rounded-xl hover:bg-slate-200 mt-6 md:px-6 md:py-4">
            See our plans
          </button>
        </motion.h1>
      </LampContainer>
      <div className="mt-[-32] mt">
        <TrustedBrands />
      </div>
    </>
  );
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const calendlyLink = "https://calendly.com/lilipitaham/book-call";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#020C1E] text-white flex justify-between items-center px-6 py-4 pt-2 z-50 mb-5 pb-1">
      <TechGenLogo />
      <div className="hidden md:flex items-center space-x-4">
        <a href="#why-nexgen" className="hover:underline">
          Why TechGen?
        </a>
        <a href="#how-it-works" className="hover:underline">
          How it works
        </a>
        <a href="#pricing" className="hover:underline">
          Pricing
        </a>
        <a href="#our-work" className="hover:underline">
          Our work
        </a>
        <button className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600"
        onClick={() => window.open(calendlyLink, "_blank")}
        >
          Book Call
        </button>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-12 left-0 w-full text-black flex flex-col items-center space-y-4 py-4 md:hidden bg-white rounded-xl transition">
          <a
            href="#why-nexgen"
            className="hover:underline text-xl"
            onClick={closeMenu}
          >
            Why TechGen?
          </a>
          <a
            href="#how-it-works"
            className="hover:underline text-xl"
            onClick={closeMenu}
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="hover:underline text-xl"
            onClick={closeMenu}
          >
            Pricing
          </a>
          <a
            href="#our-work"
            className="hover:underline text-xl"
            onClick={closeMenu}
          >
            Our work
          </a>
          <button
            className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 text-xl"
            onClick={() => window.open(calendlyLink, "_blank")}
          >
            Book Call
          </button>
        </div>
      )}
    </nav>
  );
};

const TechGenLogo = () => (
  <svg
    width="90"
    height="40"
    viewBox="0 0 100 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="15"
      fill="#0EB2CE"
      fontSize="18"
      fontFamily="system-ui"
      fontWeight="bold"
    >
      TechGen
    </text>
  </svg>
);

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 mt-32">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
