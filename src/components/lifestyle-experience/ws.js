"use client";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const data = {
  dining: [
    {
      name: "Shichirin Seminyak",
      location: "Seminyak, Bali",
      image:
        "https://backend.thewonderspace.com/storage/gallery/RGcDwN7Fca9uMdAuMw6gUOIog94QJxHG8PF0HAxy.webp",
    },
    {
      name: "Habitat Bistro",
      location: "Ubud, Bali",
      image:
        "https://backend.thewonderspace.com/storage/gallery/ntMRZXH3A8Wq58xo24LID3L6XXp4VPmoLHet6diS.webp",
    },
  ],
  beach: [
    {
      name: "The Jungle Club Ubud",
      location: "Ubud, Bali",
      image:
        "https://backend.inivie.com/storage/inivie/property-image/fe0136186656130f97f11f405.jpg",
    },
    {
      name: "Tropical Temptation Beach Club",
      location: "Ungasan, Bali",
      image:
        "https://backend.inivie.com/storage/inivie/property-image/f64c4782a67346ce80ae2467d.jpg",
    },
  ],
  play: [
    {
      name: "Mai Main Playground",
      location: "Canggu, Bali",
      image:
        "https://backend.inivie.com/storage/inivie/property-image/7048992bf22e0d19a709eb5a6.webp",
    },
  ],
};

const ctaMap = {
  dining: { label: "Explore Dining", href: "/wonderspace/dining" },
  beach: { label: "Explore Day & Beach", href: "/wonderspace/beach" },
  play: { label: "Explore Family Play", href: "/wonderspace/play" },
};

export default function WonderspaceSection() {
  const [active, setActive] = useState("dining");
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  useEffect(() => {
    emblaApi?.reInit();
  }, [active, emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="overflow-hidden">
      <div className="container sm:px-12 xl:px-0">

        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="heading-section">
            Wonderspace, Lifestyle Experiences
          </h2>
          <p className="mt-5 text-paragraph">
            A collection of vibrant lifestyle destinations — from curated dining
            and beachside escapes to playful family spaces.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-8 md:gap-14 text-sm tracking-widest mb-14 md:mb-20">
          <TabButton
            label="Dining"
            active={active === "dining"}
            onClick={() => setActive("dining")}
          />
          <TabButton
            label="Day & Beach"
            active={active === "beach"}
            onClick={() => setActive("beach")}
          />
          <TabButton
            label="Family Play"
            active={active === "play"}
            onClick={() => setActive("play")}
          />
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Arrows (desktop only) */}
          <button
            onClick={scrollPrev}
            className="hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 text-black/30 hover:text-black transition"
          >
            <HiOutlineChevronLeft size={38} />
          </button>

          <button
            onClick={scrollNext}
            className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 text-black/30 hover:text-black transition"
          >
            <HiOutlineChevronRight size={38} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-10">
              {data[active].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex-[0_0_88%]
                    sm:flex-[0_0_70%]
                    md:flex-[0_0_48%]
                    lg:flex-[0_0_36%]
                  "
                >
                  <OutletCard {...item} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="pt-16 md:pt-24 text-center">
          <a
            href={ctaMap[active].href}
            className="
              inline-flex items-center
              px-12 py-4
              border border-black/50
              text-black
              tracking-[0.25em] text-xs
              transition-all duration-500
              hover:border-black hover:text-black
              font-manrope
            "
          >
            {ctaMap[active].label}
          </a>
        </div>
      </div>
    </section>
  );
}

const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`relative pb-3 border-b transition-all duration-500 font-manrope uppercase text-[18px] font-light
      ${active ? "text-black" : "text-black/30 hover:text-black/70 border-transparent"}
    `}
  >
    {label}
  </button>
);

const OutletCard = ({ image, name, location }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-sm">
      <img
        src={image}
        alt={name}
        className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <div className="mt-6">
      <h3 className="title-card">{name}</h3>
      <p className="text-neutral-400 mt-2 text-sm tracking-wide font-inter">
        {location}
      </p>
    </div>
  </div>
);
