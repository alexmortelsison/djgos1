"use client";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(titleRef.current, {
      opacity: 1,
      duration: 1,
      delay: 4,
      ease: "power2.out",
    })
      .to(textRef.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        ease: "power2.out",
      })
      .to(buttonRef.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        ease: "power2.out",
      });
  }, []);

  return (
    <div className="flex bg-purple-500 relative h-screen overflow-hidden z-0 text-white font-goldman">
      <div className="w-full h-full z-0">
        <video
          src="/herovid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute inset-0 justify-center items-center text-center mt-36">
        <h1
          ref={titleRef}
          className="md:text-[300px] text-[150px] lg:tracking-[100px] font-black right-10 opacity-0 text-teal-300 font-goldman mt-16 md:mt-0"
        >
          GOS
        </h1>
        <div className="flex justify-center">
          <p
            className="md:max-w-1/2 px-8 opacity-0 text-gray-400"
            ref={textRef}
          >
            Join the rhythm revolution and elevate your senses with every beat.
            GOS brings you a sonic experience like no other—crafted for
            dreamers, dancers, and night owls alike. Let the music move you.
          </p>
        </div>
        <div className="mt-18 space-x-24 opacity-0" ref={buttonRef}>
          <Link href={"/events"}>
            <Button>Events</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
