"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const properties = [
  { category: "Dining", image: "https://backend.thewonderspace.com/storage/gallery/RGcDwN7Fca9uMdAuMw6gUOIog94QJxHG8PF0HAxy.webp", title: "Shichirin Seminyak", location: "Seminyak, Bali" },
  { category: "Dining", image: "https://backend.thewonderspace.com/storage/gallery/51N0HV3VkbR0wTMNZB0m1oLXJYb96CaQnrNjYcD3.webp", title: "Cantina Ubud", location: "Ubud, Bali" },
  { category: "Dining", image: "https://backend.thewonderspace.com/storage/gallery/eybADVfvzhxUwEyTq761RsV4YC2R4aC0oOK0sJfn.webp", title: "Kojin Bali", location: "Ubud, Bali" },

  { category: "Day & Beach", image: "https://backend.inivie.com/storage/inivie/property-image/fe0136186656130f97f11f405.jpg", title: "The Jungle Club Ubud", location: "Ubud, Bali" },
  { category: "Day & Beach", image: "https://backend.inivie.com/storage/inivie/property-image/f64c4782a67346ce80ae2467d.jpg", title: "Tropical Temptation Beach Club", location: "Ungasan, Bali" },

  { category: "Family Play", image: "https://backend.inivie.com/storage/inivie/property-image/7048992bf22e0d19a709eb5a6.webp", title: "Mai Main Playground", location: "Canggu, Bali" },
];

export default function LifestyleExperience() {
  const [active, setActive] = useState("Dining");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    speed: 8,
    dragFree: false,
  });

  const filtered = properties.filter((p) => p.category === active);

  useEffect(() => {
    if (!emblaApi) return;
    requestAnimationFrame(() => {
      emblaApi.reInit();
    });
  }, [active, emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-28">
      <div className="container">
        <h2 className="heading-section uppercase font-semibold text-center tracking-wide">
            Wonderspace, Lifestyle Experiences
        </h2>

        {/* Category Switcher */}
        <div className="flex justify-center mt-5">
          <div className="flex flex-wrap justify-center gap-6 text-[16px] md:text-[20px] tracking-[0.28em] uppercase font-medium text-center">
            {[
              "Dining",
              "Day & Beach",
              "Family Play",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 md:px-10 py-3 transition-all duration-500 border-b font-inter uppercase
                  ${
                    active === cat
                      ? "text-black border-black"
                      : "text-neutral-400 border-transparent hover:text-black"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="py-10">
          <p className="text-paragraph text-center max-w-[1000px] mx-auto">
            A curated lifestyle playground of dining, day and beach energy, and family play, designed for social moments and unforgettable nights.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 border border-black/20 rounded-full
            flex items-center justify-center
            bg-white/70 backdrop-blur
            transition hover:bg-black hover:text-white"
          >
            <HiOutlineChevronLeft className="text-[22px]" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 border border-black/20 rounded-full
            flex items-center justify-center
            bg-white/70 backdrop-blur
            transition hover:bg-black hover:text-white"
          >
            <HiOutlineChevronRight className="text-[22px]" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-14">
              {filtered.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[85%] md:min-w-[48%] lg:min-w-[32%] group"
                >
                  <PropertyCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full
            border border-black text-black tracking-wider text-sm font-medium
            transition-all duration-500 hover:bg-black hover:text-white"
          >
            Explore {active.replace("Wonderspace ", "")}
          </a>
        </div>
      </div>
    </section>
  );
}

const PropertyCard = ({ image, title, location }) => (
    <div className="cursor-pointer">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
  
      <div className="mt-6 transition duration-500 group-hover:translate-y-1">
        <h3 className="text-xl font-semibold tracking-wide font-manrope">
          {title}
        </h3>
        <p className="text-neutral-400 mt-2 text-sm tracking-wide font-inter">
          {location}
        </p>
      </div>
    </div>
  );
