import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-lapis-deep via-lapis-base to-lapis-deep text-cream-light py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b-2 border-gold-base/30 shadow-2xl">
      {/* Background Ornament Overlays */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0 L90 30 L60 60 L30 30 Z M60 60 L90 90 L60 120 L30 90 Z M0 60 L30 90 L0 120 L-30 90 Z M120 60 L150 90 L120 120 L90 90 Z M0 60 L30 30 L0 0 L-30 30 Z M120 60 L150 30 L120 0 L90 30 Z' fill='%23C5A059' fill-opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}
      />
      <div className="absolute inset-0 bg-radial-gradient(from center, transparent, rgba(7, 22, 36, 0.8)) pointer-events-none" />

      {/* Decorative Top Border Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-base to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Core Medallion Icon */}
        <div className="mb-6 inline-flex items-center justify-center p-2 border border-gold-base/30 rounded-full bg-lapis-deep/80 shadow-lg">
          <div className="w-16 h-16 rounded-full border border-gold-base/50 flex items-center justify-center bg-lapis-base">
            {/* Arabic Script for 'Syed' inside medallion */}
            <span className="font-amiri text-2xl text-gold-light leading-none pt-1 select-none">سید</span>
          </div>
        </div>

        {/* English Title & Subtitle */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-light font-extrabold tracking-tight max-w-4xl leading-tight">
          The Noble Lineage & History <br />
          <span className="text-white font-medium text-2xl sm:text-3xl md:text-4xl block mt-2 tracking-wide">
            of the Faridpur Syeds
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-stone-300 text-sm sm:text-base md:text-lg font-sans font-light tracking-wide uppercase">
          A Record of Heritage, Spiritual Legacy, and Historical Migrations
        </p>

        {/* Ornamental Divider */}
        <div className="my-8 flex items-center justify-center w-full max-w-md">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-gold-base/40 flex-1" />
          <span className="mx-4 text-gold-base text-xl select-none">✦</span>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-gold-base/40 flex-1" />
        </div>

        {/* Dual-Language Calligraphy Header */}
        <div className="mb-8 font-amiri text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide flex flex-row-reverse gap-4 select-none animate-pulse">
          <span>آلِ بیت</span>
          <span className="text-gold-base/50 text-xl">|</span>
          <span>ہجرتِ مدینہ</span>
          <span className="text-gold-base/50 text-xl">|</span>
          <span>اولیاءِ کرام</span>
        </div>

        {/* Quote Block Container */}
        <div className="relative max-w-3xl mx-auto bg-lapis-deep/50 border border-gold-base/20 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl backdrop-blur-sm">
          {/* Subtle corners */}
          <div className="corner-ornament ornament-tl" />
          <div className="corner-ornament ornament-tr" />
          <div className="corner-ornament ornament-bl" />
          <div className="corner-ornament ornament-br" />

          {/* Opening Quote SVG Mark */}
          <span className="absolute -top-4 left-6 text-gold-base/20 text-7xl font-serif select-none leading-none">“</span>
          
          <blockquote className="text-stone-200 font-serif text-base sm:text-lg md:text-xl leading-relaxed italic relative z-10 px-4 sm:px-6">
            &ldquo;This record preserves the noble heritage, spiritual legacy, and historical migrations of the Syed family of Faridpur. Tracing their roots to the Ahl al-Bayt (<span className="font-amiri not-italic text-gold-light text-xl sm:text-2xl font-bold">آلِ بیت</span>), the descendants of this lineage have served as jurists, saints, and defenders of justice across centuries.&rdquo;
          </blockquote>

          {/* Closing Quote SVG Mark */}
          <span className="absolute -bottom-14 right-6 text-gold-base/20 text-7xl font-serif select-none leading-none">”</span>
        </div>

        {/* Interactive Scroll Down Prompt */}
        <div className="mt-12 animate-bounce">
          <a 
            href="#history-narrative" 
            className="flex flex-col items-center text-xs tracking-widest text-gold-base/70 hover:text-gold-light transition-colors duration-300 font-sans"
          >
            <span>DISCOVER THE HISTORY</span>
            <svg 
              className="w-4 h-4 mt-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
