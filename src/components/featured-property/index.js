"use client";
import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";


const properties = [
  {
    brand: "Saneca",
    image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp",
    title: "Seascape Uluwatu",
    location: "Uluwatu, Bali",
    tags: ["Resort", "New Opening"],
  },
  {
    brand: "Saneca",
    image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp",
    title: "Seascape Uluwatu",
    location: "Uluwatu, Bali",
    tags: ["Resort", "New Opening"],
  },
  {
    brand: "Saneca",
    image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp",
    title: "Seascape Uluwatu",
    location: "Uluwatu, Bali",
    tags: ["Resort", "New Opening"],
  },
  {
    brand: "Saneca",
    image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp",
    title: "Seascape Uluwatu",
    location: "Uluwatu, Bali",
    tags: ["Resort", "New Opening"],
  },
  {
    brand: "Saneca",
    image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp",
    title: "Seascape Uluwatu",
    location: "Uluwatu, Bali",
    tags: ["Resort", "New Opening"],
  },
  {
    brand: "Saneca",
    image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp",
    title: "Seascape Uluwatu",
    location: "Uluwatu, Bali",
    tags: ["Resort", "New Opening"],
  },
  {
    brand: "Solo",
    image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp",
    title: "Sini Vie Resort",
    location: "Seminyak, Bali",
    tags: ["Resort"],
  },
  {
    brand: "Saneca",
    image: "https://inivie.com/inivie_assets/img/featured/asvara-resort-new.webp",
    title: "Asvara Resort Ubud",
    location: "Ubud, Bali",
    tags: ["Resort", "New Opening"],
  },
];

export default function FeaturedProperty() {
  const [active, setActive] = useState("Saneca");
  const [fade, setFade] = useState(true);

  const sanecaRef = useRef(null);
  const soloRef = useRef(null);
  const indicatorRef = useRef(null);

  const moveIndicator = (el) => {
    if (!el || !indicatorRef.current) return;
    indicatorRef.current.style.width = `${el.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
  };

  useEffect(() => {
    const el = active === "Saneca" ? sanecaRef.current : soloRef.current;
    moveIndicator(el);
  }, [active]);

  const filtered = properties.filter((p) => p.brand === active);

  // ✅ Keen Slider
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 32 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 40 },
      },
    },
  });

  useEffect(() => {
    setFade(false); // mulai fade out
  
    const t = setTimeout(() => {
      instanceRef.current?.update(); // update keen
      setFade(true); // fade in lagi
    }, 250);
  
    return () => clearTimeout(t);
  }, [active]);
  
  

  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <h2 className="text-[30px] md:text-[35px] uppercase font-semibold text-center">
          Featured property for you
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mt-12">
          <div className="relative flex border border-neutral-300 rounded-full p-1 bg-white">
            <button
              ref={sanecaRef}
              onClick={() => setActive("Saneca")}
              className={`relative z-10 px-8 py-2 text-md rounded-full transition font-semibold tracking-widest ${
                active === "Saneca"
                  ? "text-white"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Saneca
            </button>

            <button
              ref={soloRef}
              onClick={() => setActive("Solo")}
              className={`relative z-10 px-8 py-2 text-md rounded-full transition font-semibold tracking-widest ${
                active === "Solo"
                  ? "text-white"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Solo
            </button>

            <span
              ref={indicatorRef}
              className="absolute top-1 bottom-1 left-1 bg-[#ff8432] rounded-full transition-all duration-300"
            />
          </div>
        </div>

        <div className="py-15">
          <p className="text-paragraph text-center max-w-[1200px] mx-auto">
            {active === "Saneca"
              ? "Exclusive stays designed to make your getaway unforgettable. Find the place you’ve been dreaming of — and turn every moment into something real."
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, modi assumenda tempora minus libero ducimus dolorem magni vero culpa fugiat."}
          </p>
        </div>

        {/* ✅ Slider */}
        <div
            className={`
                transition-opacity duration-500 ease-in-out
                ${fade ? "opacity-100" : "opacity-0"}
            `}
            >
            <div className="relative">
                <div ref={sliderRef} className="keen-slider">
                {filtered.map((item, i) => (
                    <div key={i} className="keen-slider__slide">
                    <ResortCard {...item} />
                    </div>
                ))}
                </div>
                {/* Arrows */}
                <button
                    onClick={() => instanceRef.current?.prev()}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center shadow-md hover:scale-105 transition"
                >
                    <HiOutlineArrowLeft size={22} />
                </button>

                <button
                    onClick={() => instanceRef.current?.next()}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center shadow-md hover:scale-105 transition"
                >
                    <HiOutlineArrowRight size={22} />
                </button>
            </div>
        </div>

        <div className="py-20 text-center">
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

const ResortCard = ({ image, title, location, tags = [] }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[340px] object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex gap-3 mt-5">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`text-xs px-4 py-1.5 rounded-full border ${
              tag === "New Opening"
                ? "border-red-400 text-red-500"
                : "border-neutral-400 text-neutral-700"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-[22px] font-semibold mt-4 tracking-wide">
        {title}
      </h3>

      <p className="text-neutral-400 mt-1 tracking-wide text-sm">
        {location}
      </p>
    </div>
  );
};
