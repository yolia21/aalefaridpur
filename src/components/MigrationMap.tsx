"use client";

import React, { useState } from "react";
import { migrationSteps } from "../data/historicalData";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const MigrationMap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  // Approximate relative coordinates for Middle East/Subcontinent map coordinates (X: West to East, Y: North to South)
  const mapCoordinates = [
    { name: "Al-Madinah al-Munawwarah", x: 18, y: 68 }, // Far West
    { name: "Baghdad", x: 26, y: 44 },                 // North-West
    { name: "Delhi, India", x: 62, y: 52 },             // North-East
    { name: "Faridpur, Jehanabad, Bihar", x: 78, y: 58 }, // Far East
    { name: "Makkah al-Mukarramah", x: 19, y: 78 },     // Southwest
    { name: "Faridpur / Patna", x: 80, y: 56 },          // Return East
  ];

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

          {/* Interactive Map Visual Block (5 columns on desktop) */}
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

              {/* Interactive Vector SVG Map Drawer */}
              <div className="relative flex-1 bg-cream-light/35 border border-gold-base/15 rounded flex items-center justify-center p-2">
                <svg className="w-full h-full absolute inset-0 z-0 opacity-15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Decorative map boundary outlines (Middle East & India representative paths) */}
                  <path d="M5 80 C 10 70, 15 50, 20 40 C 25 30, 30 20, 45 15 C 50 20, 52 35, 50 50 C 45 60, 42 70, 35 85 C 20 90, 8 90, 5 80 Z" fill="none" stroke="#9C7A3C" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M50 50 C 58 45, 62 30, 70 25 C 75 35, 80 45, 85 55 C 90 65, 80 75, 78 85 C 68 85, 55 75, 50 50 Z" fill="none" stroke="#9C7A3C" strokeWidth="0.8" strokeDasharray="3 3" />
                </svg>

                {/* Compass Rose SVG */}
                <div className="absolute top-4 right-4 w-12 h-12 pointer-events-none opacity-40 z-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-gold-dark" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="10" strokeWidth="0.5" />
                    <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.5" />
                    <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.5" />
                    <polygon points="50,5 53,40 50,50" fill="currentColor" />
                    <polygon points="50,5 47,40 50,50" fill="none" stroke="currentColor" />
                    <polygon points="50,95 53,60 50,50" fill="none" stroke="currentColor" />
                    <polygon points="50,95 47,60 50,50" fill="currentColor" />
                    <polygon points="95,50 60,53 50,50" fill="currentColor" />
                    <polygon points="95,50 60,47 50,50" fill="none" stroke="currentColor" />
                    <polygon points="5,50 40,53 50,50" fill="none" stroke="currentColor" />
                    <polygon points="5,50 40,47 50,50" fill="currentColor" />
                    <text x="47" y="15" className="text-[12px] font-serif font-bold fill-current">N</text>
                  </svg>
                </div>

                {/* Scale & Sea Monster decorative details */}
                <div className="absolute bottom-4 left-4 text-[9px] font-sans font-bold text-gold-dark/60 pointer-events-none z-10 uppercase flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-1 bg-gradient-to-r from-gold-dark via-transparent to-gold-dark border border-gold-dark/50" />
                    <span>Gradus Historici</span>
                  </div>
                  <span>Scale: 1 Generation : 30 Years</span>
                </div>

                {/* SVG connection lines between nodes */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100">
                  {mapCoordinates.map((coord, i) => {
                    if (i === 0) return null;
                    const prev = mapCoordinates[i - 1];
                    const isActiveLine = activeStep > i;
                    return (
                      <g key={i}>
                        <path
                          d={`M ${prev.x} ${prev.y} Q ${(prev.x + coord.x) / 2} ${(prev.y + coord.y) / 2 - 8}, ${coord.x} ${coord.y}`}
                          fill="none"
                          stroke={isActiveLine ? "#C5A059" : "#E8E2D5"}
                          strokeWidth={isActiveLine ? 1.5 : 1}
                          strokeDasharray={isActiveLine ? "none" : "3 3"}
                          className="transition-all duration-700"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Map Nodes (Interactive markers) */}
                {mapCoordinates.map((coord, index) => {
                  const stepNum = index + 1;
                  const isActive = activeStep === stepNum;
                  const isVisited = activeStep >= stepNum;
                  
                  return (
                    <div
                      key={stepNum}
                      className="absolute z-20 transition-all duration-500 cursor-pointer"
                      style={{ left: `${coord.x}%`, top: `${coord.y}%`, transform: "translate(-50%, -50%)" }}
                      onClick={() => setActiveStep(stepNum)}
                      title={coord.name}
                    >
                      {/* Outer pulsing ring for active node */}
                      {isActive && (
                        <span className="absolute inline-flex h-6 w-6 -left-3 -top-3 rounded-full bg-gold-base/30 animate-ping" />
                      )}

                      {/* Inner dot */}
                      <div
                        className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                          isActive
                            ? "bg-gold-base border-gold-dark scale-125 shadow-md"
                            : isVisited
                            ? "bg-lapis-base border-gold-base/50"
                            : "bg-cream-dark border-stone-400"
                        }`}
                      />
                      
                      {/* Small text label under node */}
                      <span className={`absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] px-1 rounded shadow-sm font-sans font-bold border transition-colors pointer-events-none ${
                        isActive 
                          ? "bg-lapis-base border-gold-base text-gold-light"
                          : "bg-cream-light/95 border-cream-dark/50 text-stone-600"
                      }`}>
                        {stepNum}. {coord.name.split(",")[0]}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Map Footer Metadata Block */}
              <div className="relative z-10 border-t border-gold-base/20 pt-3 mt-4 text-center">
                <span className="font-serif text-[11px] font-bold text-gold-dark uppercase block mb-1">
                  Geographic Key & Map Coordinates
                </span>
                <p className="text-[10px] text-stone-600 font-sans leading-relaxed px-4">
                  Showing step {activeStep} node: <span className="font-semibold text-lapis-base">{mapCoordinates[activeStep - 1].name}</span>, plotting legacy vector traces relative to ancient pilgrim routes and imperial royal estates.
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
