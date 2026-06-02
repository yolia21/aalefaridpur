"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { migrationSteps } from "../data/historicalData";

const MapWrapper = dynamic(() => import("./MapWrapper"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-[#F5F2EB] text-[#0D233A] font-sans text-xs border border-[#C5A059]/20 rounded-md">
      Loading Interactive Map...
    </div>
  )
});

export const MigrationMap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  // Component uses dynamic MapWrapper with Leaflet rendering

  return (
    <section id="migration-timeline" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-lapis-deep text-cream-light border-y-2 border-gold-base/30">
      {/* Background Ornament Overlays */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L40 10 L30 20 L20 10 Z' fill='%23C5A059'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px"
        }}
      />
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-base to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-light text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-3 font-sans">
            Geographical Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light font-bold tracking-tight">
            Interactive Migration Timeline
          </h2>
          <span className="font-amiri text-xl sm:text-2xl text-gold-base block mt-2 tracking-wide" dir="rtl">
            تاریخی ہجرت کا نقشہ
          </span>
          <div className="mt-4 flex items-center justify-center">
            <div className="h-[1px] bg-gold-base/30 w-16" />
            <span className="mx-3 text-gold-base text-sm">✦</span>
            <div className="h-[1px] bg-gold-base/30 w-16" />
          </div>
          <p className="mt-4 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base font-light font-sans">
            Track the generations-long movement of the Faridpur Syeds, starting from the Islamic heartlands of Madinah, moving east, and establishing their Bihar estate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Vertical Timeline Block (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-lg tracking-widest text-gold-light uppercase mb-6 border-b border-gold-base/20 pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-base" />
              Timeline Nodes
            </h3>
            
            <div className="relative pl-6 border-l-2 border-gold-base/20 ml-3 py-2 space-y-6">
              {migrationSteps.map((step) => {
                const isActive = activeStep === step.step;
                return (
                  <div
                    key={step.step}
                    className={`relative cursor-pointer group transition-all duration-300 ${
                      isActive ? "scale-[1.01]" : ""
                    }`}
                    onClick={() => setActiveStep(step.step)}
                  >
                    {/* Node Bullet */}
                    <div
                      className={`absolute -left-[33px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-gold-base border-gold-light text-lapis-deep scale-110 shadow-lg"
                          : "bg-lapis-deep border-gold-base/40 text-gold-base/70 group-hover:border-gold-base group-hover:text-gold-light"
                      }`}
                    >
                      <span className="font-sans text-xs font-semibold">{step.step}</span>
                    </div>

                    {/* Timeline Card */}
                    <div
                      className={`border rounded-lg p-5 transition-all duration-500 ${
                        isActive
                          ? "bg-lapis-medium border-gold-base/60 shadow-lg shadow-gold-base/5"
                          : "bg-lapis-deep/50 border-gold-base/10 group-hover:border-gold-base/30 group-hover:bg-lapis-medium/20"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4
                          className={`font-serif text-lg font-bold transition-colors ${
                            isActive ? "text-gold-light" : "text-stone-300 group-hover:text-cream-light"
                          }`}
                        >
                          {step.location}
                        </h4>
                        <span
                          className={`font-amiri text-base font-bold transition-colors ${
                            isActive ? "text-gold-base" : "text-gold-base/40 group-hover:text-gold-base/70"
                          }`}
                          dir="rtl"
                        >
                          {step.arabicName}
                        </span>
                      </div>
                      
                      <p className="text-xs uppercase font-sans tracking-widest text-gold-light/75 mb-2 font-medium">
                        {step.title}
                      </p>

                      <p
                        className={`text-sm font-sans font-light leading-relaxed transition-colors ${
                          isActive ? "text-cream-light" : "text-stone-400 group-hover:text-stone-300"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Plotted Vector Map Block (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h3 className="font-serif text-lg tracking-widest text-gold-light uppercase mb-6 border-b border-gold-base/20 pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-base" />
              Vintage Map Plotter
            </h3>

            {/* Vintage Stylized Map Container */}
            <div className="relative border border-gold-base/30 bg-cream-base rounded-md p-4 flex flex-col text-stone-900 shadow-xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              {/* Parchment texture overlay inside map */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,251,247,0.4),rgba(245,242,235,0.9))] parchment-texture pointer-events-none" />
              
              {/* Map grid lines */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(to right, #9C7A3C 1px, transparent 1px), linear-gradient(to bottom, #9C7A3C 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />

              {/* Gold Ornaments */}
              <div className="corner-ornament ornament-tl border-gold-dark" />
              <div className="corner-ornament ornament-tr border-gold-dark" />
              <div className="corner-ornament ornament-bl border-gold-dark" />
              <div className="corner-ornament ornament-br border-gold-dark" />

              {/* Map Header details */}
              <div className="relative z-10 border-b border-gold-base/20 pb-2 mb-4 flex justify-between items-center text-[10px] tracking-wider text-gold-dark font-sans font-bold uppercase">
                <span>Tabula Migrationis</span>
                <span>Subcontinent & Middle East</span>
              </div>

              {/* Interactive Dynamic Leaflet Map Drawer */}
              <div className="relative flex-1 border border-gold-base/15 rounded overflow-hidden min-h-[300px] z-10">
                <MapWrapper
                  activeStep={activeStep}
                  onSelectWaypoint={(step) => setActiveStep(step)}
                />
              </div>

              {/* Map Footer Metadata Block */}
              <div className="relative z-10 border-t border-gold-base/20 pt-3 mt-4 text-center">
                <span className="font-serif text-[11px] font-bold text-gold-dark uppercase block mb-1">
                  Geographic Key & Map Coordinates
                </span>
                <p className="text-[10px] text-stone-600 font-sans leading-relaxed px-4">
                  Showing step {activeStep} node: <span className="font-semibold text-lapis-base">{migrationSteps[activeStep - 1]?.location}</span>, tracking the route and spiritual legacy on an interactive geographical tile layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MigrationMap;
