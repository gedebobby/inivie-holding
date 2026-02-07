"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const svahaOutlets = [
  {
    name: "Svaha Spa Bisma",
    location: "Ubud, Bali",
    image:
      "https://svahaspa.com/storage/gallery/bisma/DKqGbIUHgTN53AGeAqid5wz7MjVDMjbhlBUafx7l.webp",
  },
  {
    name: "Svaha Spa Seminyak",
    location: "Seminyak, Bali",
    image:
      "https://svahaspa.com/storage/gallery/seminyak/id591ASinri3p3W5bHzhoAGLLBngSVpnL1TRgTgQ.webp",
  },
  {
    name: "Svaha Spa Sanur",
    location: "Sanur, Bali",
    image:
      "https://svahaspa.com/storage/gallery/sanur/2vWZXTwnFgh4TxJkGFdLwuYle7Q80d6jmjVyAl2N.webp",
  },
];

const hammana = {
  name: "Hammana Spa",
  location: "Ubud, Bali",
  image: "https://hammanaspa.com/assets/img/gallery-2/16.webp",
};

export default function SvahaWellness() {
  const [active, setActive] = useState("svaha");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-white py-28">
      <div className="container">

        {/* Intro */}
        <div className="max-w-3xl mb-20">
          <h2 className="heading-section">
            Svaha Wellness, Restorative Rituals
          </h2>
          <p className="mt-6 text-paragraph">
            Restorative spa journeys and elevated rituals that reset body and
            mind — from everyday luxury care to ultra curated indulgence.
          </p>
        </div>

        {/* SWITCHER */}
        <div className="flex gap-12 mb-16 border-b border-black/20 pb-6">
          {["svaha", "hammana"].map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`
                tracking-[0.2em] uppercase font-light transition text-[23px] font-manrope
                ${active === key
                  ? "text-neutral-700"
                  : "text-black/30 hover:text-black/60"}
              `}
            >
              {key === "svaha" ? "Svaha Spa" : "Hammana Spa"}
            </button>
          ))}
        </div>

        {/* ================= SVAHA ================= */}
        {active === "svaha" && (
          <div className="relative group">
            {/* Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20
              w-14 h-14 rounded-full border border-black/20
              backdrop-blur-md bg-white/40
              flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition"
            >
              <HiOutlineChevronLeft className="text-2xl" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20
              w-14 h-14 rounded-full border border-black/20
              backdrop-blur-md bg-white/40
              flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition"
            >
              <HiOutlineChevronRight className="text-2xl" />
            </button>

            {/* Slider */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-10">
                {svahaOutlets.map((item, i) => (
                  <div
                    key={i}
                    className="min-w-[85%] md:min-w-[48%] lg:min-w-[32%]"
                  >
                    <OutletCard {...item} />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <a
                href="#"
                className="inline-flex items-center px-12 py-4 border border-black/30
                tracking-[0.1em] text-sm hover:border-black transition"
              >
                Explore Svaha Spa
              </a>
            </div>
          </div>
        )}

        {/* ================= HAMMANA ================= */}
        {active === "hammana" && (
          <div className="mt-6">
            <HeroSpaCard {...hammana} />
          </div>
        )}
      </div>
    </section>
  );
}

const OutletCard = ({ image, name, location }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={name}
        className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-105"
      />
    </div>
    <div className="mt-5">
      <h4 className="title-card">{name}</h4>
      <p className="text-neutral-500 text-sm mt-1">{location}</p>
    </div>
  </div>
);

const hammanaImages = [
  "https://hammanaspa.com/assets/img/gallery-2/16.webp",
  "https://hammanaspa.com/assets/img/gallery-2/10.webp",
  "https://hammanaspa.com/assets/img/gallery-2/6.webp",
  "https://hammanaspa.com/assets/img/gallery-2/14.webp",
  "https://hammanaspa.com/assets/img/gallery-2/3.webp",
];

const HeroSpaCard = ({ name, location }) => (
  <div className="grid lg:grid-cols-2 gap-20 items-start">

    {/* === IMAGE SIDE === */}

    {/* Mobile: single hero image */}
    <div className="block md:hidden">
      <div className="overflow-hidden rounded-xs group">
        <img
          src={hammanaImages[0]}
          alt="Hammana Spa"
          className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
    </div>

    {/* Desktop: masonry */}
    <div className="hidden md:block columns-2 md:columns-3 gap-6  space-y-6">
      {hammanaImages.map((img, i) => (
        <div
          key={i}
          className="break-inside-avoid overflow-hidden rounded-xs group"
        >
          <img
            src={img}
            alt="Hammana Spa"
            className="w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>

    {/* === TEXT SIDE === */}
    <div className="lg:sticky lg:top-32">
      <h3 className="title-card text-3xl">{name}</h3>
      <p className="text-neutral-500 mt-2">{location}</p>

      <p className="text-neutral-600 mt-8 leading-relaxed max-w-lg">
        An ultra-curated hammam ritual space crafted for profound relaxation,
        privacy, and sensory indulgence. Rooted in ancient bathing traditions
        and reimagined through contemporary luxury.
      </p>

      <div className="mt-12">
        <a
          href="#"
          className="inline-flex items-center px-12 py-4 border border-black/30
          tracking-[0.1em] text-sm hover:border-black transition"
        >
          Explore Hammana Spa
        </a>
      </div>
    </div>

  </div>
);



// const HeroSpaCard = ({ image, name, location }) => (
//   <div className="group cursor-pointer">
//     <div className="overflow-hidden rounded-3xl">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-[600px] object-cover transition duration-700 group-hover:scale-105"
//       />
//     </div>

//     <div className="mt-10 max-w-xl">
//       <h3 className="title-card">{name}</h3>
//       <p className="text-neutral-500 mt-2">{location}</p>

//       <p className="text-neutral-600 mt-6 leading-relaxed">
//         An ultra-curated hammam ritual space crafted for profound relaxation,
//         privacy, and sensory indulgence.
//       </p>

//       <div className="mt-10">
//         <a
//           href="#"
//           className="inline-flex items-center px-12 py-4 border border-black/30
//           tracking-[0.1em] text-sm hover:border-black transition"
//         >
//           Explore Hammana Spa
//         </a>
//       </div>
//     </div>
//   </div>
// );
