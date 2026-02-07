import React from 'react'

export default function InsightBali() {
  return (
    <section className=" bg-white">
      <div className="container">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-section">
            Insight Bali, Media and Commerce
          </h2>
          <p className="mt-5 text-paragraph">
            A Bali born media engine that blends culture, storytelling, and partnerships to create reach, relevance, and real business impact.
          </p>
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-neutral-300" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* MEDIA */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400"
              alt="Insight Bali Media"
              className="w-full h-[420px] object-cover mb-10"
            />

            <h3 className="text-3xl font-light mb-4 font-manrope">Media</h3>

            <p className="text-paragraph mb-8 px-4 font-inter">
              Editorial storytelling, social narratives, and cinematic documentation
              capturing Bali’s atmosphere through a culturally attuned and
              visually refined perspective.
            </p>

            <div className="flex justify-center gap-10 text-sm tracking-widest">
              <a
                href='#'
                className="
                    inline-flex items-center
                    px-12 py-4
                    border border-black/30
                    text-black/80
                    tracking-[0.1em] text-sm
                    transition-all duration-500
                    hover:border-black hover:text-black
                    font-manrope
                "
                >
                    Visit Insight Bali   
                </a>
              </div>
          </div>

          {/* PARTNERSHIP */}
          <div className="text-center">
            <img
              src="https://thewonderspace.com/outlet-events/cantinacanggu/private.webp"
              alt="Insight Bali Partnership"
              className="w-full h-[420px] object-cover mb-10 rounded-sm"
            />

            <h3 className="title-card mb-4">Partnership</h3>

            <p className="text-neutral-600 leading-relaxed mb-8 px-4 font-inter">
              Event coverage, curated collaborations, and brand partnerships
              connecting audiences with authentic experiences through presence,
              storytelling, and shared vision.
            </p>

            <div className="flex justify-center gap-10 text-sm tracking-widest">
              <a
              href='#'
              className="
                  inline-flex items-center
                  px-12 py-4
                  border border-black/30
                  text-black/80
                  tracking-[0.1em] text-sm
                  transition-all duration-500
                  hover:border-black hover:text-black
                  font-manrope
              "
              >
                Studio & Partnership
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
