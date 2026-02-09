import React from 'react'

export default function DpPlus() {
  return (
    <section className="">
        <div className="container">

            {/* Heading Besar */}
            <div className="max-w-3xl mb-32">
                <h2 className="heading-section">
                    DP+ Group, Development Services
                </h2>
                <p className="mt-6 text-paragraph">
                    From concept to construction, we design and build hospitality and lifestyle spaces with strong aesthetics, smart planning, and reliable execution.
                </p>
            </div>

            {/* Visual Composition */}
            <div className="grid md:grid-cols-12 gap-10 md:gap-y-20 gap-y-0">

                {/* Image 1 */}
                <div className="md:col-span-7">
                    <img
                        src="https://ik.imagekit.io/dpplusconcept/data/about-img_EY75Xke80.jpg"
                        className="w-full h-[520px] object-cover rounded-sm"
                        alt=""
                    />
                </div>

                {/* Text DP+ Concept */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <p className="text-sm tracking-[0.3em] text-neutral-400 mb-6 font-inter">
                        Architect & Consultant
                    </p>
                    <h3 className="text-2xl font-light mb-6 font-manrope">
                        DP+ CONCEPT
                    </h3>
                    <p className="text-paragraph mb-10">
                    From master planning to architectural articulation, DP+ Concept
                    shapes environments through contextual intelligence and design clarity.
                    </p>
                    <a
                    href="#"
                    className="text-sm font-manrope tracking-[0.15em] border-b border-black/30 pb-2 w-fit hover:border-black transition"
                    >
                        Visit DP+ CONCEPT
                    </a>
                </div>

                {/* Text DP+ Construction */}
                <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-none">
                    <p className="text-sm tracking-[0.3em] text-neutral-400 mb-6 font-inter">
                        Design & Build
                    </p>
                    <h3 className="text-2xl font-light mb-6 font-manrope">
                        DP+ CONSTRUCTION
                    </h3>
                    <p className="text-paragraph mb-10">
                        Translating design into reality with material discipline,
                    structural precision, and uncompromising build quality.
                    </p>
                    <a
                    href="#"
                    className="text-sm tracking-[0.15em] border-b border-black/30 pb-2 w-fit hover:border-black transition"
                    >
                        Explore DP+ CONSTRUCTION
                    </a>
                </div>

                {/* Image 2 */}
                <div className="md:col-span-7 order-1 md:order-none">
                    <img
                    src="https://ik.imagekit.io/dpplusconcept/data/slide-2_xEvCzuX1a.jpg"
                    className="w-full h-[520px] object-cover rounded-sm"
                    alt=""
                    />
                </div>

            </div>

        </div>
    </section>

  )
}
