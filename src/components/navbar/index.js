"use client";

import { useEffect, useState } from "react";
import BurgerButton from "../burger-button";
import MenuItem from "./menu-item";

const menu = [
    {
      label: "About Ini Vie",
      children: [
        { label: "About" },
        { label: "Mantras/Values" },
        { label: "Membership WEINIVIE" },
        { label: "Contact" },
      ],
    },
    {
      label: "Brand Portfolios (Collections)",
      children: [
        {
          label: "Saneca",
          children: [
            { label: "Ultra Luxury Resort" },
            { label: "Resort" },
            { label: "Premium Villa" },
            { label: "Midscale Villa" },
          ],
        },
        {
          label: "SOLO",
        },
        { label: "Wonderspace",
            children: [
              { label: "Restaurants" },
              { label: "Day and Beach Club" },
              { label: "Family Play" },
            ],
        },
        { label: "Svaha Wellness",
            children: [
              { label: "Svaha Spa" },
              { label: "Hamurana Spa" },
            ],
        },
        {
            label: "Insight Bali",
        },
        {
            label: "DP+",
            children: [
                { label: "Concept" },
                { label: "Construction" },
            ],
        },
      ],
    },
    {
        label: "What’s New",
        children: [
            { label: "Press Hub" },
            { label: "Discover Bali" },
        ],
    },
    {
        label: "Offers",
        children: [
            { label: "Stays" },
            { label: "Dining" },
            { label: "Wellness" },
        ],
    },
  ];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrolled
            ? "bg-black/70 backdrop-blur-md py-10"
            : "bg-transparent py-6"
        }`}
        >
        <div className="relative px-6 mx-auto flex items-center justify-between">
            
            {/* Left */}
            <BurgerButton open={open} onClick={() => setOpen(!open)} />

            {/* Center Logo (ABSOLUTE REAL CENTER) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <img
                    src={`/assets/img/logo/logo.webp`}
                    width={80}
                    height={80}
                    alt="logo"
                    className={`transition-all duration-500 ${scrolled ? "mt-0" : "mt-5"}`}
                />
            </div>


            {/* Right CTA */}
            <a
            href="#"
            className="bg-[#ff8432] text-white px-8 py-3 rounded-full text-base tracking-wide font-medium hover:opacity-90 transition"
            >
            Book Now
            </a>
        </div>
        </header>


      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Side Menu */}
      <aside className={`fixed top-0 left-0 h-full max-w-[560px] w-[460px] bg-[#FFFFFF] text-[#000] z-50
        transform transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]
        ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
        <div className="p-5 h-full flex flex-col">
            
            {/* Close Button */}
            <div className="flex justify-start mb-12">
                <button
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 group"
                >
                    <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-black rotate-45" />
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-black -rotate-45" />
                    </div>
                </button>
            </div>

            {/* Menu */}
            <nav className="flex flex-col w-full">
            {menu.map((item, i) => (
                <MenuItem key={i} item={item} />
            ))}
            </nav>


            {/* Optional footer */}
            <div className="mt-auto text-xs opacity-50 tracking-widest">
                INI VIE HOSPITALITY
            </div>
        </div>
        </aside>

    </>
  );
}
  
  
