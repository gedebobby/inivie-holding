"use client";

import { useEffect } from "react";

export default function BookingPanel({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Panel */}
      <div
        className={`fixed z-[70] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
        w-[95%] md:w-[1100px] h-[85vh] bg-white rounded-2xl overflow-hidden
        shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          {/* LEFT MENU */}
          <div className="p-10 flex flex-col justify-center gap-8 border-r border-black/10">

            <button onClick={onClose} className="absolute top-6 left-6 text-xl">✕</button>

            <p className="tracking-widest text-sm opacity-50">BOOK NOW</p>

            {[
              "Hotel Reservation",
              "Beach Club Daybed",
              "Restaurants",
              "Event Tickets",
              "Shop",
            ].map((item, i) => (
              <div
                key={i}
                className="group flex justify-between items-center border-b border-black/20 py-5 text-2xl font-light cursor-pointer"
              >
                <span>{item}</span>
                <span className="opacity-40 group-hover:translate-x-2 transition">→</span>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full">
            <img
              src="https://backend.inivie.com/storage/inivie/property-image//0e1520f4fefba183f948f868e.JPG"
              alt="booking visual"
              className="absolute inset-0 w-full h-full object-cover hidden sm:block"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-light mb-2">
                Booking
              </h3>
              <p className="opacity-80">
                Flavours for every potato head with one common approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}