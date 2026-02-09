import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white pt-28 pb-16">
      <div className="container">

        {/* Brand Statement */}
        <div className="max-w-3xl">
          <h3 className="text-3xl font-light tracking-wide font-manrope">
            iNi Vie Hospitality
          </h3>
          <p className="mt-6 text-white/60 leading-relaxed font-inter">
            A house of brands crafting stays, lifestyle destinations, restorative
            wellness, and the stories that bring them to life — thoughtfully rooted
            in Bali.
          </p>
        </div>

        {/* Pillar Navigation */}
        <div className="grid md:grid-cols-5 gap-16 mt-24 text-sm tracking-wider uppercase font-manrope">
          <div className="space-y-4">
            <p className="text-white/40">Stays</p>
            <a href="#" className="block hover:text-white/70 transition">Saneca</a>
            <a href="#" className="block hover:text-white/70 transition">Solo</a>
          </div>

          <div className="space-y-4">
            <p className="text-white/40">Wonderspace</p>
            <a href="#" className="block hover:text-white/70 transition">Dining</a>
            <a href="#" className="block hover:text-white/70 transition">Day & Beach</a>
            <a href="#" className="block hover:text-white/70 transition">Family Play</a>
          </div>

          <div className="space-y-4">
            <p className="text-white/40">Svaha Wellness</p>
            <a href="#" className="block hover:text-white/70 transition">Svaha Spa</a>
            <a href="#" className="block hover:text-white/70 transition">Hammana Spa</a>
          </div>

          <div className="space-y-4">
            <p className="text-white/40">Insight Bali</p>
            <a href="#" className="block hover:text-white/70 transition">Media</a>
            <a href="#" className="block hover:text-white/70 transition">Partnership</a>
          </div>

          <div className="space-y-4">
            <p className="text-white/40">DP+ Group</p>
            <a href="#" className="block hover:text-white/70 transition">DP+ Concept</a>
            <a href="#" className="block hover:text-white/70 transition">DP+ Construction</a>
          </div>
        </div>

        {/* CONTACT STRIP (BARU) */}
        <div className="grid md:grid-cols-5 gap-20 mt-28 text-sm font-inter">
          {/* Marketing */}
          <div>
            <h4 className="text-lg font-light mb-4 font-manrope">Marketing</h4>
            <p className="text-white/60">+62 812-3761-0511</p>
            <p className="text-white/60">marcom@inivie.com</p>
            <a
              href="#"
              className="inline-block mt-3 text-[#FF6A00] hover:underline"
            >
              Submit your proposal
            </a>
          </div>

          {/* Media Inquiry */}
          <div>
            <h4 className="text-lg font-light mb-4 font-manrope">Media Inquiry</h4>
            <p className="text-white/60">+62 813 3753 0285</p>
            <p className="text-white/60">pr@inivie.com</p>
          </div>

          {/* Human Resource */}
          <div>
            <h4 className="text-lg font-light mb-4 font-manrope">Human Resource</h4>
            <p className="text-white/60">+62 812-3729-0110</p>
            <p className="text-white/60">hire@inivie.com</p>
            <a
              href="#"
              className="inline-block mt-3 text-[#FF6A00] hover:underline"
            >
              View open jobs
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-sm text-white/50 font-inter">
          <p>© {new Date().getFullYear()} iNi Vie Hospitality. All rights reserved.</p>

          <div className="flex items-center gap-2 mx-auto md:gap-8 tracking-widest uppercase">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Youtube</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
