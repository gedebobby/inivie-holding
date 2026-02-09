"use client";

import { useEffect, useRef } from "react";

export default function BookingPanel({ open, onClose }) {
  const panelRef = useRef(null);

  // Lock scroll + ESC close + cleanup
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  // Prevent overlay click when clicking inside panel
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center transition-all duration-500 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        onClick={stopPropagation}
        className={`relative w-[95%] md:w-[1100px] h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl
        transition-all duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]
        ${open ? "scale-100" : "scale-95"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          {/* LEFT MENU */}
          <div className="relative p-10 flex flex-col justify-center gap-8 border-r border-black/10">
            <button
              onClick={onClose}
              className="absolute top-6 left-6 text-xl opacity-60 hover:opacity-100 transition"
            >
              ✕
            </button>

            <p className="tracking-widest text-sm opacity-50">BOOK NOW</p>

            {[
              "Accomodation Reservation",
              "Beach & Day Club",
              "Restaurants",
              "Svaha & Wellness",
            ].map((item, i) => (
              <div
                key={i}
                className="group flex justify-between items-center border-b border-black/20 py-5 text-2xl tracking-wide font-manrope font-light cursor-pointer"
              >
                <span>{item}</span>
                <span className="opacity-40 group-hover:translate-x-2 transition">
                  →
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE (hidden on mobile for perf) */}
          <div className="relative h-full hidden md:block">
            <img
              src="https://equipoiseresort.com/img/gallery/all/37.webp"
              alt="booking visual"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-10 left-10 text-white max-w-sm">
              <h3 className="text-3xl font-light mb-2">Booking</h3>
              <p className="opacity-80">
                Flavours for every destination with one common approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
