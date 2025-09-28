"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    gsap.to(navRef.current, {
      opacity: 1,
      y: 0,
      delay: 6,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav
      className="bg-transparent fixed top-0 left-0 w-full mt-12 md:px-48 px-8 flex items-center justify-between z-20 opacity-0 -translate-y-20 text-white font-goldman"
      ref={navRef}
    >
      <Link href={"/"} className="hidden md:block">
        <Image src="/goslogo.png" alt="Logo" width={150} height={150} />
      </Link>
      <Link href={"/contact"}>
        <button className="md:block hidden border px-16 py-4 bg-gray-900 rounded-full hover:cursor-pointer hover:scale-110 hover:bg-teal-500 duration-150">
          Get In Touch
        </button>
      </Link>
      <div className="hover:cursor-pointer md:hidden font">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <Hamburger />
          </PopoverTrigger>
          <PopoverContent className="bg-black h-screen w-screen mt-2 text-white font-goldman">
            <Link
              onClick={() => setOpen(false)}
              href={"/"}
              className="flex justify-center text-center mt-16 text-2xl hover:bg-pink-500 py-4 px-2 rounded-full  duration-150"
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href={"/events"}
              className="flex justify-center text-center text-2xl hover:bg-pink-500 py-4 px-2 rounded-full  duration-150"
            >
              Events
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href={"/contact"}
              className="flex justify-center text-center text-2xl hover:bg-pink-500 py-4 px-2 rounded-full  duration-150"
            >
              Contact
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
