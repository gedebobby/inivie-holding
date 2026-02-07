"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const properties = [
  { brand: "Saneca", image: "https://backend.inivie.com/storage/inivie_page/gallery/af1b3498b27214ad922dd3429.webp", title: "Seascape Uluwatu", location: "Uluwatu, Bali" },
  { brand: "Solo", image: "https://stayatsolo.com/storage/properties/about-section/jEyBvAh5mrrAAqQ0bhAV2xMYXKBOh5BQHPye8orM.webp", title: "Vinava Villa", location: "Canggu, Bali" },
  { brand: "Solo", image: "https://stayatsolo.com/storage/properties/bfMXcv6RFlM3npCkvoPJDNXnQEQWhVEgLIFsFjMV.webp", title: "Cabana Kedungu", location: "Tabanan, Bali" },
  { brand: "Solo", image: "https://stayatsolo.com/storage/properties/gallery/5ByScPSgeToy6FpvCeetriiIBpNrncYDbg11dNzW.webp", title: "Kanadea Villa", location: "Canggu, Bali" },
  { brand: "Solo", image: "https://stayatsolo.com/storage/properties/gallery/Grvo1alKH2v6RbJxxUD7xOQt4sZnGcejaxe4oqlC.webp", title: "La Mira Villa", location: "Seminyak, Bali" },
  { brand: "Saneca", image: "https://backend.inivie.com/storage/inivie_page/gallery/9b2811b54f8b7762b282b5c61.webp", title: "Asvara Resort Ubud", location: "Ubud, Bali" },
  { brand: "Saneca", image: "https://backend.inivie.com/storage/inivie_page/gallery/7fdaa54e6f70fef75a1153e16.webp", title: "Kaamala Resort Ubud", location: "Ubud, Bali" },
  { brand: "Saneca", image: "https://backend.inivie.com/storage/inivie_page/gallery/f4e503572f39e7e8be4663586.webp", title: "Aksari Resort Ubud", location: "Ubud, Bali" },
];

export default function PropertyShowcase() {
  const [active, setActive] = useState("Saneca");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    speed: 8,
    dragFree: false,
  });
  

  const filtered = properties.filter((p) => p.brand === active);

  // Reinit aman setelah DOM update
  useEffect(() => {
    if (!emblaApi) return;
    requestAnimationFrame(() => {
      emblaApi.reInit();
    });
  }, [active, emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="">
      <div className="container">
        <h2 className="heading-section text-center">
          Stays, Curated by Ini Vie
        </h2>

        <div className="mt-6">
            <p className="text-paragraph text-center max-w-[1200px] mx-auto">
                {/* {active === "Saneca" ? "Saneca offers design-led tropical escapes crafted for serenity and intimate luxury." : "Solo presents vibrant stays rooted in lifestyle, energy, and contemporary hospitality."} */}
                Romantic escapes and effortless group stays, crafted with signature design, warm hospitality, and seamless comfort across Bali.
            </p>
        </div>

        {/* Brand Switcher – Editorial Style */}
        <div className="flex justify-center my-16">
            <div className="flex items-center text-[18px] md:text-[20px] tracking-widest font-light text-center">

                {["Saneca", "Solo"].map((brand, index) => (
                <div key={brand} className="flex items-center">
                    <button
                    onClick={() => setActive(brand)}
                    className={`px-12 md:px-20 py-4 transition-all duration-300 font-manrope uppercase text-[23px] tracking-[0.2em] font-light
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

        {/* Slider */}
        <div className="relative">
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
                <div key={i} className="min-w-[85%] md:min-w-[48%] lg:min-w-[32%] group">
                  <PropertyCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16 text-center">
            <a href="#" className="
                inline-flex items-center gap-3
                px-10 py-4
                rounded-xs
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
  <div className="cursor-pointer">
    <div className="overflow-hidden rounded-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <div className="mt-6 transition duration-500 group-hover:translate-y-1">
      <h3 className="title-card">
        {title}
      </h3>
      <p className="text-neutral-400 mt-2 text-sm tracking-wide font-inter">
        {location}
      </p>
    </div>
  </div>
);

