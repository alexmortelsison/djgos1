"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.inOut" },
    });

    if (open) {
      tl.to(topRef.current, { y: 8, rotate: 45 }, 0)
        .to(middleRef.current, { opacity: 0 }, 0)
        .to(bottomRef.current, { y: -8, rotate: -45 }, 0);
    } else {
      tl.to(topRef.current, { y: 0, rotate: 0 }, 0)
        .to(middleRef.current, { opacity: 1 }, 0)
        .to(bottomRef.current, { y: 0, rotate: 0 }, 0);
    }
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex flex-col justify-center items-center gap-1 hover:cursor-pointer"
      >
        <div ref={topRef} className="w-8 h-1 bg-white rounded" />
        <div ref={middleRef} className="w-8 h-1 bg-white rounded" />
        <div ref={bottomRef} className="w-8 h-1 bg-white rounded" />
      </div>
    </>
  );
}
