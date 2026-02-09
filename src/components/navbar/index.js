"use client";

import { useEffect, useState } from "react";
import BurgerButton from "../burger-button";
import MenuItem from "./menu-item";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import BookingPanel from "./booking-panel";


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
      label: "Brand Portfolios",
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
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [showCTA, setShowCTA] = useState(true);



  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
  
      setScrolled(current > 40);
  
      if (current > lastScroll && current > 120) {
        // scroll down
        setShowCTA(false);
      } else {
        // scroll up
        setShowCTA(true);
      }
  
      setLastScroll(current);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-md h-[80px]"
            : "bg-transparent h-[120px]"
        }`}
      >
        <div className="relative px-2 md:px-6 mx-auto flex flex-row-reverse md:flex-row items-center justify-between h-full">

          {/* Left */}
          <BurgerButton open={open} onClick={() => setOpen(!open)} />

          {/* Logo */}
          <div
            className="
              absolute top-1/2 -translate-y-1/2
              left-6 md:left-1/2
              md:-translate-x-1/2
            "
          >
          <img
            src="/assets/img/logo/logo.webp"
            alt="logo"
            className={`
              transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]
              ${scrolled ? "w-[48px]" : "w-[90px] md:w-[80px]"}
            `}
          />
        </div>

          {/* Right CTA */}          
          <a
            onClick={() => setBookingOpen(true)}
            className="cursor-pointer bg-[#ff8432] text-white p-2 hidden md:block md:px-8 md:py-3 rounded-xs tracking-wide font-inter font-light hover:opacity-90 transition"
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
      <aside className={`fixed top-0 left-0 h-full w-full md:w-[560px] bg-[#FFFFFF] text-[#000] z-50
        transform transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]
        ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
        <div className="px-5 pt-5 md:pb-14 pb-5 h-full flex flex-col">
            
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


            {/* Footer */}
            <div className="mt-auto pt-8 border-t border-white/20">
              <div className="flex flex-col md:justify-between gap-6 text-sm font-inter">

                {/* Address */}
                <div className="space-y-1 opacity-80">
                  <p className="tracking-widest text-lg opacity-60">
                    INI VIE HOLDING
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-muted-nav">Address</p>
                  <p className="text-footer-nav">Jl. Persada II No.888, Kerobokan, Kec. Kuta Utara <br /> Kabupaten Badung, Bali 80361</p>
                </div>

                {/* Contact */}
                <div className="space-y-1">                  
                  <p className="text-muted-nav">Contact</p>
                  <p className="text-footer-nav">+62 812 3733 9353</p>
                  <p className="text-footer-nav">info@inivie.com</p>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-4 text-[30px]">
                  <a href="https://instagram.com/inivie" target="_blank" className="opacity-70 hover:opacity-100 transition">
                    <FaInstagram />
                  </a>
                  <a href="https://facebook.com/inivie" target="_blank" className="opacity-70 hover:opacity-100 transition">
                    <FaFacebookF />
                  </a>
                  <a href="https://tiktok.com/@inivie" target="_blank" className="opacity-70 hover:opacity-100 transition">
                    <FaTiktok />
                  </a>
                  <a href="https://youtube.com/@inivie" target="_blank" className="opacity-70 hover:opacity-100 transition">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

        </div>
      </aside>

      {/* Mobile Sticky CTA */}
      {/* <div
        className={`
          md:hidden fixed bottom-0 left-0 w-full z-[55]
          transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]
          ${showCTA ? "translate-y-0" : "translate-y-full"}
        `}
      > */}
      <div
        className={`
          md:hidden fixed bottom-0 left-0 w-full z-[45]
          transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]
          ${showCTA ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <button
          onClick={() => setBookingOpen(true)}
          className="w-full bg-[#ff8432] text-white py-5 tracking-[0.2em] font-light"
        >
          BOOK NOW
        </button>
      </div>

      <BookingPanel open={bookingOpen} onClose={() => setBookingOpen(false)} />

    </>
  );
}
  
  
