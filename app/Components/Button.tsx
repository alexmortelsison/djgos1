import React, { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="border rounded-full py-4 px-8 hover:scale-110 hover:bg-teal-300 hover:font-bold hover:cursor-pointer w-[150px]">
      {children}
    </button>
  );
}
