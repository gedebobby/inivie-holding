import { useState } from "react";

export default function BurgerButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-start"
      aria-label="Menu"
    >
      <span
        className={`absolute h-[1px] w-8 bg-white transition-all duration-500
        ${open ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
      />
      <span
        className={`absolute h-[1px] w-6 bg-white transition-all duration-500
        ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute h-[1px] w-8 bg-white transition-all duration-500
        ${open ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
      />
    </button>
  );
}
