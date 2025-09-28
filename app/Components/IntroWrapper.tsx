"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";

export default function IntroWrapper() {
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black">
          <video
            ref={videoRef}
            src="/intro.mp4"
            playsInline
            autoPlay
            muted
            className="w-full h-full object-cover hidden lg:block"
          />
          <video
            ref={videoRef}
            src="/intro2.mp4"
            playsInline
            autoPlay
            muted
            className="w-full h-full object-cover lg:hidden"
          />
        </div>
      )}

      <main
        className={`transition-opacity duration-1000 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero />
      </main>
    </>
  );
}
