"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const properties = [
  { brand: "Saneca", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Seascape Uluwatu", location: "Uluwatu, Bali" },
  { brand: "Solo", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Sini Vie Resort", location: "Seminyak, Bali" },
  { brand: "Solo", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Sini Vie Resort", location: "Seminyak, Bali" },
  { brand: "Solo", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Sini Vie Resort", location: "Seminyak, Bali" },
  { brand: "Solo", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Sini Vie Resort", location: "Seminyak, Bali" },
  { brand: "Saneca", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Asvara Resort Ubud", location: "Ubud, Bali" },
  { brand: "Saneca", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Asvara Resort Ubud", location: "Ubud, Bali" },
  { brand: "Saneca", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Asvara Resort Ubud", location: "Ubud, Bali" },
  { brand: "Saneca", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Asvara Resort Ubud", location: "Ubud, Bali" },
  { brand: "Saneca", image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp", title: "Asvara Resort Ubud", location: "Ubud, Bali" },
];

export default function PropertyShowcase() {
  const [active, setActive] = useState("Saneca");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const filtered = properties.filter((p) => p.brand === active);

  // Reinit aman setelah DOM update
  useEffect(() => {
    if (!emblaApi) return;
    requestAnimationFrame(() => {
      emblaApi.reInit();
    });
  }, [active, emblaApi]);

  // Auto slide stabil (tidak leak)
  useEffect(() => {
    if (!emblaApi) return;

    const auto = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => clearInterval(auto);
  }, [emblaApi, active]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-28">
      <div className="container">
        <h2 className="text-[30px] md:text-[35px] uppercase font-semibold text-center">
        Featured property for you   
        </h2>

        {/* Brand Switcher – Editorial Style */}
        <div className="flex justify-center mt-14">
            <div className="flex items-center text-[18px] md:text-[22px] tracking-[0.25em] uppercase font-medium text-center">

                {["Saneca", "Solo"].map((brand, index) => (
                <div key={brand} className="flex items-center">
                    <button
                    onClick={() => setActive(brand)}
                    className={`px-12 md:px-20 py-4 transition-all duration-300 uppercase
                        ${
                        active === brand
                            ? "text-black"
                            : "text-neutral-400 hover:text-black"
                        }
                    `}
                    >
                    {brand === "Saneca" ? "Saneca" : "Solo"}
                    </button>

                    {/* Divider kecuali paling kanan */}
                    {index === 0 && (
                    <div className="h-10 w-px bg-black/30" />
                    )}
                </div>
                ))}

            </div>
        </div>


        <div className="py-10">
            <p className="text-paragraph text-center max-w-[1200px] mx-auto">
                {active === "Saneca" ? "Saneca offers design-led tropical escapes crafted for serenity and intimate luxury." : "Solo presents vibrant stays rooted in lifestyle, energy, and contemporary hospitality."}
            </p>
        </div>

        {/* Slider */}
        <div className="relative group">
          {/* Arrow Left */}
          <button
            onClick={scrollPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 backdrop-blur-md bg-white/40 border border-white/60 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition"
          >
            <HiOutlineChevronLeft className="text-[26px] text-black/70" />
          </button>

          {/* Arrow Right */}
          <button
            onClick={scrollNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 backdrop-blur-md bg-white/40 border border-white/60 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition"
          >
            <HiOutlineChevronRight className="text-[26px] text-black/70" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {filtered.map((item, i) => (
                <div key={i} className="min-w-[85%] md:min-w-[48%] lg:min-w-[32%]">
                  <PropertyCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 text-center">
            <a href="#" className="
                inline-flex items-center gap-3
                px-10 py-4
                rounded-full
                border border-[#ff8432]
                text-[#ff8432]
                tracking-wider text-sm font-medium
                transition-all duration-500
                hover:bg-[#ff8432] hover:text-white
                group
                "
            >
            {active === "Saneca"
              ? "Explore Saneca"
              : "Explore Solo"}
            </a>
        </div>
      </div>
    </section>
  );
}

const PropertyCard = ({ image, title, location }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={title}
        className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-105"
      />
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <p className="text-neutral-400 mt-2 text-sm tracking-wide">
        {location}
      </p>
    </div>
  </div>
);
