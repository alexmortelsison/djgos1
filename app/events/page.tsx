"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

export default function EventsPage() {
  useEffect(() => {
    gsap.to(".date", {
      opacity: 1,
      duration: 2,
      delay: 1,
      y: -20,
      ease: "back.inOut",
    });
    gsap.to(".location", {
      opacity: 1,
      duration: 2,
      delay: 1,
      y: -20,
      ease: "back.inOut",
    });
    gsap.to(".month", {
      opacity: 1,
      x: -40,
      delay: 0.5,
      duration: 1,
      ease: "back.inOut",
    });
  });

  return (
    <div className="h-full text-white flex w-full px-16 md:px-0 relative">
      <div className="-z-40 bg-black/40 absolute inset-0"></div>
      <div className="-z-50 absolute inset-0 flex">
        <Image src={"/bg2.png"} fill alt="bg" className="object-cover" />
      </div>
      <div className="md:mt-52 w-full lg:pl-48 md:pl-24 mt-30 schedule">
        <h1 className="tracking-tighter font-bold font-goldman flex justify-self-center md:justify-self-start -translate-x-120 month text-3xl">
          October
        </h1>
        <div className="flex mt-8 items-center border-b md:mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-teal-300 font-bold -translate-y-20 opacity-0 date">
            5
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0 font-bold">
            Society Lounge
          </p>
        </div>
        <div className="flex mt-8 items-center border-b md:mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-teal-300 font-bold -translate-y-20 opacity-0 date">
            7
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0 font-bold">
            Sanctuary
          </p>
        </div>
        <div className="flex mt-8 items-center border-b md:mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-teal-300 font-bold -translate-y-20 opacity-0 date">
            10
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0 font-bold">
            The Vault
          </p>
        </div>
        <div className="flex mt-8 items-center border-b md:mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-teal-300 font-bold -translate-y-20 opacity-0 date">
            14
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0 font-bold">
            Sanctuary
          </p>
        </div>
        <div className="flex mt-8 items-center border-b md:mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-teal-300 font-bold -translate-y-20 opacity-0 date">
            22
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0 font-bold">
            Sanctuary
          </p>
        </div>
        <div className="flex mt-8 items-center border-b md:mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-teal-300 font-bold -translate-y-20 opacity-0 date">
            24
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0 font-bold">
            Aurum
          </p>
        </div>
        <div className="flex mt-8 items-center border-b md:mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-teal-300 font-bold -translate-y-20 opacity-0 date">
            25
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0 font-bold">
            Society Lounge
          </p>
        </div>
      </div>
    </div>
  );
}
