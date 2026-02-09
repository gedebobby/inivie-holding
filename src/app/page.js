import DpPlus from "@/components/dp-plus";
import FeaturedProperty from "@/components/featured-property";
import PropertyShowcase from "@/components/featured-property-2";
import Footer from "@/components/footer";
import HeroVideo from "@/components/hero";
import InsightBali from "@/components/insight-bali";
import LifestyleExperience from "@/components/lifestyle-experience";
import WonderspaceSection from "@/components/lifestyle-experience/ws";
import Navbar from "@/components/navbar";
import SvahaWellness from "@/components/svaha-wellness";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroVideo />

    <section className="">
      <div className="container">
        <h1 className="text-[30px] md:text-[35px] font-manrope font-light text-[#1c2434] text-center">iNi ViE HOSPITALITY</h1>
        <p className="text-paragraph max-w-[1100px] text-center mx-auto pt-5">Ini Vie is a Bali based hospitality group crafting design led stays, lifestyle experiences, and wellness journeys, powered by a growing media and development ecosystem. We curate brands with soul, strong aesthetics, and warm service, creating experiences people remember and return to.</p>
        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 pt-18">
          {[
            {
              title: "Stays",
              desc: "Design-led stays across Bali, crafted with soul, strong aesthetics, and warm hospitality.",
              logos: [
                { src: "/assets/img/logo-brands/kaamala.webp", invert: true },
                { src: "/assets/img/logo-brands/solo.png" },
              ],
            },
            {
              title: "Wonderspace",
              desc: "Restaurants, beach clubs, and social spaces where people gather, celebrate, and connect.",
              logos: [
                { src: "/assets/img/logo-brands/ws.png", invert: true },
                { src: "/assets/img/logo-brands/tt-beach.png" },
                { src: "/assets/img/logo-brands/tjc.png", invert: true },
                { src: "/assets/img/logo-brands/mai-main.png" },
              ],
            },
            {
              title: "Svaha Wellness",
              desc: "A sanctuary of healing through spa rituals, therapeutic touch, and holistic wellness journeys.",
              logos: [
                { src: "/assets/img/logo-brands/svaha-spa.png" },
                { src: "/assets/img/logo-brands/hammana.png", invert: true },
              ],
            },
            {
              title: "Media",
              desc: "Storytelling and media that power our ecosystem and inspire discovery across Bali.",
              logos: [
                { src: "/assets/img/logo-brands/insight-bali.webp" },
              ],
            },
            {
              title: "DP+ Group",
              desc: "Concept, design, and construction behind the spaces we create and operate.",
              logos: [
                { src: "/assets/img/logo-brands/dp-concept.png", invert: true },
                { src: "/assets/img/logo-brands/dp-concept.png", invert: true },
              ],
            },
          ].map((card, i) => (
            <div key={i} className="px-10 pt-16 border-r border-neutral-200 xl:last:border-none flex flex-col min-h-[420px]">
              <div>
                <h2 className="text-[24px] text-center tracking-wide mb-6 font-inter">
                  {card.title}
                </h2>

                <p className="text-paragraph text-center leading-relaxed text-2xl">
                  {card.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-2">
                {card.logos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo.src}
                    alt="brand logo"
                    className={`
                      h-12 md:h-14
                      object-contain
                      transition
                      mx-auto
                      ${logo.invert ? "invert" : ""}
                    `}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

    {/* <FeaturedProperty />   */}
    <PropertyShowcase />  

    {/* <LifestyleExperience /> */}

    <WonderspaceSection />
    <div className="border-t border-neutral-300 opacity-50" />
    <SvahaWellness />
    <div className="border-t border-neutral-300 opacity-50" />

    <InsightBali />

    <DpPlus />

    <Footer />

  </>
)};




