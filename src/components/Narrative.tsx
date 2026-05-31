import React from "react";
import { narrativesData } from "../data/historicalData";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const Narrative: React.FC = () => {
  return (
    <section id="history-narrative" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cream-light parchment-texture">
      {/* Visual background divider */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-cream-dark/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold-dark text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-3 font-sans">
            Chronicles of Legacy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-lapis-base font-bold tracking-tight">
            Historical Narratives
          </h2>
          <div className="mt-4 flex items-center justify-center">
            <div className="h-[1px] bg-gold-base/30 w-16" />
            <span className="mx-3 text-gold-base text-sm">✦</span>
            <div className="h-[1px] bg-gold-base/30 w-16" />
          </div>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto text-sm sm:text-base font-light font-sans">
            Journey through the four principal eras that define the theological authority, royal status, and brave resistance of the Faridpur Syeds.
          </p>
        </div>

        {/* Alternating Narrative Timeline Entries */}
        <div className="space-y-24 md:space-y-32">
          {narrativesData.map((era, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={era.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border-b border-cream-dark/55 pb-20 last:border-b-0 last:pb-0 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start">
                  {/* Period Tag & Urdu Script Heading */}
                  <div className="flex items-center justify-between lg:justify-start lg:gap-6 mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-gold-dark border border-gold-base/30 rounded bg-cream-base shadow-sm font-sans uppercase">
                      {era.period}
                    </span>
                    <span className="font-amiri text-lg sm:text-xl md:text-2xl text-gold-base font-semibold leading-none pt-1" dir="rtl">
                      {era.urduTitle}
                    </span>
                  </div>

                  {/* Era Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-lapis-base font-bold leading-tight mb-2">
                    {era.title}
                  </h3>
                  <h4 className="font-sans text-stone-500 font-normal text-sm sm:text-base italic mb-6">
                    {era.subtitle}
                  </h4>

                  {/* Body Content */}
                  <div className="space-y-4 text-stone-700 font-sans text-sm sm:text-base font-light leading-relaxed">
                    {era.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* Key Figures Tag Grid */}
                  <div className="mt-8 border-t border-cream-dark/40 pt-6">
                    <h5 className="font-sans text-xs tracking-wider text-stone-500 uppercase font-semibold mb-3">
                      Key Linchpins & Figures:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {era.keyFigures.map((figure, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded bg-lapis-base/5 border border-lapis-base/10 text-lapis-base text-xs font-medium font-sans"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-base mr-2" />
                          {figure}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Media Placeholder Side */}
                <div className="w-full lg:w-1/2 relative group">
                  {/* Decorative golden frame behind the placeholder */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-gold-base/10 to-gold-light/20 rounded-lg blur opacity-40 group-hover:opacity-75 transition-all duration-500 pointer-events-none" />
                  {/* Subtly animated decorative border layout */}
                  <div className="relative border-2 border-gold-base/30 rounded p-1.5 bg-cream-light transition-all duration-500 group-hover:border-gold-base/70 shadow-lg w-full">
                    {era.id === "era-1" ? (
                      <div className="relative group overflow-hidden border border-gold-base/20 rounded-md bg-cream-base/50 p-4 flex flex-col justify-between transition-all duration-500 hover:border-gold-base/60 hover:bg-cream-base/80 shadow-sm hover:shadow-md">
                        {/* Heritage Corner Ornaments */}
                        <div className="corner-ornament ornament-tl" />
                        <div className="corner-ornament ornament-tr" />
                        <div className="corner-ornament ornament-bl" />
                        <div className="corner-ornament ornament-br" />

                        <div className="overflow-hidden rounded-sm border border-cream-dark/40 mb-3 bg-cream-light">
                          <img 
                            src="/madinah-art.jpg" 
                            alt={era.title}
                            className="w-full h-auto object-contain max-h-[300px] mx-auto transition-transform duration-700 group-hover:scale-102"
                          />
                        </div>
                        <div className="relative z-10 border-t border-cream-dark/60 pt-3">
                          <p className="text-xs text-stone-600 text-center font-sans font-light leading-relaxed">
                            {era.placeholderCaption}
                          </p>
                        </div>
                      </div>
                    ) : era.id === "era-2" ? (
                      <div className="relative group overflow-hidden border border-gold-base/20 rounded-md bg-cream-base/50 p-4 flex flex-col justify-between transition-all duration-500 hover:border-gold-base/60 hover:bg-cream-base/80 shadow-sm hover:shadow-md">
                        {/* Heritage Corner Ornaments */}
                        <div className="corner-ornament ornament-tl" />
                        <div className="corner-ornament ornament-tr" />
                        <div className="corner-ornament ornament-bl" />
                        <div className="corner-ornament ornament-br" />

                        <div className="overflow-hidden rounded-sm border border-cream-dark/40 mb-3 flex justify-center bg-cream-light">
                          <img 
                            src="/delhi-court.jpg" 
                            alt={era.title}
                            className="w-full h-auto object-contain max-h-[300px] mx-auto transition-transform duration-700 group-hover:scale-102"
                          />
                        </div>
                        <div className="relative z-10 border-t border-cream-dark/60 pt-3">
                          <p className="text-xs text-stone-600 text-center font-sans font-light leading-relaxed">
                            {era.placeholderCaption}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ImagePlaceholder 
                        text={era.placeholderText}
                        caption={era.placeholderCaption}
                        className="w-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Narrative;
