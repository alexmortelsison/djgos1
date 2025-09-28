"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function EventsPage() {
  const dateRef = useRef(null);
  const locRef = useRef(null);
  const monthRef = useRef(null);

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
    <div className="h-full bg-black text-white flex w-full">
      <div className="md:mt-52 w-full md:pl-48 pl-4 mt-30 schedule">
        <h1 className="text-4xl tracking-tighter font-bold font-goldman flex justify-self-center md:justify-self-start -translate-x-120 month">
          October
        </h1>
        <div className="flex mt-8 items-center border-b mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-pink-500 -translate-y-20 opacity-0 date">
            5
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0">
            Society Lounge
          </p>
        </div>
        <div className="flex mt-8 items-center border-b mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-pink-500 -translate-y-20 opacity-0 date">
            7
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0">
            Sanctuary
          </p>
        </div>
        <div className="flex mt-8 items-center border-b mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-pink-500 -translate-y-20 opacity-0 date">
            10
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0">
            The Vault
          </p>
        </div>
        <div className="flex mt-8 items-center border-b mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-pink-500 -translate-y-20 opacity-0 date">
            14
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0">
            Sanctuary
          </p>
        </div>
        <div className="flex mt-8 items-center border-b mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-pink-500 -translate-y-20 opacity-0 date">
            22
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0">
            Sanctuary
          </p>
        </div>
        <div className="flex mt-8 items-center border-b mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-pink-500 -translate-y-20 opacity-0 date">
            24
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0">
            Aurum
          </p>
        </div>
        <div className="flex mt-8 items-center border-b mx-24 my-24 hover:bg-gray-900 py-8 px-6 rounded-t-4xl">
          <h2 className="text-7xl font-londrina text-pink-500 -translate-y-20 opacity-0 date">
            25
          </h2>
          <p className="text-7xl pl-4">|</p>
          <p className="font-londrina text-4xl md:text-6xl pl-4 location opacity-0">
            Society Lounge
          </p>
        </div>
      </div>
    </div>
  );
}
