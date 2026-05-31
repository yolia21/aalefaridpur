import React from "react";
import Hero from "../components/Hero";
import Narrative from "../components/Narrative";
import MigrationMap from "../components/MigrationMap";
import LineageTree from "../components/LineageTree";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col font-sans bg-cream-light min-h-full">
      {/* Premium Header / Navigation */}
      <header className="sticky top-0 z-50 bg-lapis-deep/95 border-b border-gold-base/20 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4 shadow-md transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-full border border-gold-base flex items-center justify-center bg-lapis-base select-none">
              <span className="font-amiri text-gold-light text-sm pt-0.5 font-bold">ف</span>
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base font-bold text-gold-light tracking-wide leading-none">
                The Faridpur Syeds
              </span>
              <span className="text-[9px] text-stone-400 font-sans tracking-widest uppercase mt-0.5 leading-none">
                Historical Archive
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-6">
            <a 
              href="#history-narrative" 
              className="text-xs sm:text-sm text-stone-300 hover:text-gold-light transition-colors font-medium tracking-wide uppercase"
            >
              Chronicles
            </a>
            <a 
              href="#migration-timeline" 
              className="text-xs sm:text-sm text-stone-300 hover:text-gold-light transition-colors font-medium tracking-wide uppercase"
            >
              Timeline
            </a>
            <a 
              href="#lineage-tree" 
              className="text-xs sm:text-sm text-stone-300 hover:text-gold-light transition-colors font-medium tracking-wide uppercase"
            >
              Shajara
            </a>
          </nav>
        </div>
      </header>

      {/* Main Core Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Narrative Eras Section */}
        <Narrative />

        {/* Interactive Migration Timeline Map Section */}
        <MigrationMap />

        {/* Lineage Tree Section */}
        <LineageTree />
      </main>

      {/* Premium Heritage Footer */}
      <footer className="bg-lapis-deep text-cream-light py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-gold-base/30 relative overflow-hidden">
        {/* Background lattice */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L40 10 L30 20 L20 10 Z' fill='%23C5A059'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px"
          }}
        />

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Islamic calligraphic blessing */}
          <div className="mb-6 font-amiri text-lg sm:text-xl text-gold-base font-semibold leading-relaxed tracking-wider text-center select-none" dir="rtl">
            سَلَامٌ عَلَىٰ آلِ يَاسِينَ <span className="text-gold-light/60">|</span> آلِ بیتِ رسول ﷺ
          </div>

          {/* Medallion line */}
          <div className="flex items-center justify-center w-full max-w-sm mb-6">
            <div className="h-[1px] bg-gold-base/20 flex-1" />
            <span className="mx-3 text-gold-base/50 text-xs">✦</span>
            <div className="h-[1px] bg-gold-base/20 flex-1" />
          </div>

          <p className="text-center font-serif text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed italic mb-8">
            &ldquo;Dedicated to the preservation of the sacred memory of our ancestors, their geographical struggles, and spiritual achievements. May their legacy of scholarship, legal authority, and anti-colonial resistance continue to guide future generations.&rdquo;
          </p>

          <div className="text-center font-sans text-[10px] text-stone-500 tracking-wider uppercase space-y-2">
            <div>
              &copy; {new Date().getFullYear()} The Faridpur Syeds Heritage Archive. All Rights Reserved.
            </div>
            <div>
              Statically Compiled &bull; Zero External Tracking &bull; Offline Capable
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
