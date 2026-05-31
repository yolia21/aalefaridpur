"use client";

import React, { useState } from "react";
import { lineageGroups, LineagePerson } from "../data/historicalData";

export const LineageTree: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>("group-1");
  const [viewMode, setViewMode] = useState<"segmented" | "full">("segmented");
  const [selectedPerson, setSelectedPerson] = useState<LineagePerson | null>(null);

  // Compile the full unbroken chain from Group 1 to Group 5
  const fullUnbrokenChain: LineagePerson[] = lineageGroups.reduce<LineagePerson[]>((acc, group) => {
    return [...acc, ...group.members];
  }, []);

  return (
    <section id="lineage-tree" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cream-light parchment-texture">
      {/* Visual background divider */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-lapis-deep/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-dark text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-3 font-sans">
            Ancestral Unbroken Chain
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-lapis-base font-bold tracking-tight">
            The Continuous Lineage Tree
          </h2>
          <span className="font-amiri text-xl sm:text-2xl text-gold-base block mt-2 tracking-wide" dir="rtl">
            خاندانی شجرہ نسب
          </span>
          <div className="mt-4 flex items-center justify-center">
            <div className="h-[1px] bg-gold-base/30 w-16" />
            <span className="mx-3 text-gold-base text-sm">✦</span>
            <div className="h-[1px] bg-gold-base/30 w-16" />
          </div>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto text-sm sm:text-base font-light font-sans">
            Explore the unbroken bloodline of the Faridpur Syeds, connecting the holy Imams of Madinah to early pioneers, imperial Delhi jurists, and recent freedom fighters.
          </p>

          {/* Toggle View Mode Buttons */}
          <div className="mt-10 inline-flex p-1 rounded-lg bg-cream-dark/40 border border-cream-dark">
            <button
              onClick={() => setViewMode("segmented")}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md tracking-wider transition-all duration-300 ${
                viewMode === "segmented"
                  ? "bg-lapis-base text-cream-light shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              CHRONOLOGICAL ERAS
            </button>
            <button
              onClick={() => setViewMode("full")}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md tracking-wider transition-all duration-300 ${
                viewMode === "full"
                  ? "bg-lapis-base text-cream-light shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              UNBROKEN VERTICAL CHAIN
            </button>
          </div>
        </div>

        {/* View Mode 1: Segmented Accordion/Tab View */}
        {viewMode === "segmented" && (
          <div className="space-y-8">
            {/* Horizontal Era Navigation */}
            <div className="flex flex-nowrap overflow-x-auto pb-4 gap-3 scrollbar-thin scrollbar-thumb-gold-base">
              {lineageGroups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => {
                    setActiveGroup(group.id);
                    setSelectedPerson(null);
                  }}
                  className={`flex-shrink-0 px-5 py-3 rounded-lg border transition-all duration-300 text-left min-w-[200px] ${
                    activeGroup === group.id
                      ? "bg-lapis-base text-cream-light border-gold-base shadow-md"
                      : "bg-cream-base/60 text-stone-700 border-cream-dark/65 hover:border-gold-base/50 hover:bg-cream-base"
                  }`}
                >
                  <div className="text-[10px] tracking-wider uppercase font-semibold text-gold-base mb-1">
                    {group.id.replace("-", " ")}
                  </div>
                  <div className="font-serif text-sm font-bold block mb-1">
                    {group.title.split(":")[1] || group.title}
                  </div>
                  <span className="font-amiri text-xs opacity-70 block text-right" dir="rtl">
                    {group.urduTitle}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Display for Active Group */}
            {lineageGroups.map((group) => {
              if (group.id !== activeGroup) return null;
              return (
                <div key={group.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
                  {/* Detailed Intro of Group (4 columns) */}
                  <div className="lg:col-span-4 bg-lapis-deep text-cream-light border border-gold-base/30 rounded-lg p-6 sm:p-8 relative shadow-lg">
                    {/* Corners */}
                    <div className="corner-ornament ornament-tl" />
                    <div className="corner-ornament ornament-tr" />
                    <div className="corner-ornament ornament-bl" />
                    <div className="corner-ornament ornament-br" />

                    <span className="text-gold-light text-xs font-semibold tracking-widest uppercase block mb-2">
                      {group.id.replace("-", " ")}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-gold-light mb-4">
                      {group.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                      {group.description}
                    </p>

                    {/* Instruction Card */}
                    <div className="border border-gold-base/20 rounded bg-lapis-base/50 p-4 text-[11px] text-stone-400 font-sans italic">
                      <span className="font-bold text-gold-light uppercase not-italic block mb-1">Interactive Node Info</span>
                      Click on any ancestor card marked with a star symbol (✦) to reveal their historical role and achievements.
                    </div>
                  </div>

                  {/* Visual Node Flow of Group (8 columns) */}
                  <div className="lg:col-span-8 bg-cream-base/40 border border-cream-dark/60 rounded-lg p-6 sm:p-8 relative min-h-[300px] flex flex-col justify-center">
                    {/* SVG Connector Flow background grid */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                      backgroundImage: "radial-gradient(#C5A059 1px, transparent 1px)",
                      backgroundSize: "20px 20px"
                    }} />

                    {/* Flex Node Tree Grid */}
                    <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-8 items-center py-4">
                      {group.members.map((person, index) => {
                        const hasDetails = !!person.details;
                        const isSelected = selectedPerson?.name === person.name;

                        return (
                          <React.Fragment key={person.name}>
                            {/* Connector Arrow (omit for first element) */}
                            {index > 0 && (
                              <div className="flex items-center text-gold-base/50 pointer-events-none select-none font-sans font-bold text-xl">
                                ➔
                              </div>
                            )}

                            {/* Node Card */}
                            <div
                              onClick={() => hasDetails && setSelectedPerson(person)}
                              className={`relative px-4 py-3 rounded border text-center transition-all duration-300 ${
                                hasDetails ? "cursor-pointer" : "cursor-default"
                              } ${
                                isSelected
                                  ? "bg-lapis-base text-cream-light border-gold-base scale-105 shadow-md"
                                  : "bg-cream-light border-cream-dark/70 text-stone-800 hover:border-gold-base/60 hover:shadow"
                              }`}
                            >
                              <div className="flex items-center justify-center gap-1.5 mb-1">
                                <span className={`font-serif text-sm font-bold ${isSelected ? "text-gold-light" : "text-lapis-base"}`}>
                                  {person.name}
                                </span>
                                {hasDetails && (
                                  <span className="text-[10px] text-gold-base animate-pulse">✦</span>
                                )}
                              </div>
                              {person.urduName && (
                                <span className="font-amiri text-xs text-gold-dark font-semibold block" dir="rtl">
                                  {person.urduName}
                                </span>
                              )}
                              {person.title && (
                                <span className="font-sans text-[9px] uppercase tracking-wider text-stone-500 font-bold block mt-1">
                                  {person.title}
                                </span>
                              )}
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>

                    {/* Pop-up detail drawer for active card */}
                    {selectedPerson && (
                      <div className="mt-8 border border-gold-base/30 rounded-lg p-5 bg-lapis-deep text-cream-light animate-slideUp shadow-lg relative">
                        <button
                          onClick={() => setSelectedPerson(null)}
                          className="absolute top-3 right-3 text-stone-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                        <h4 className="font-serif text-base text-gold-light font-bold flex items-center gap-2 mb-1">
                          {selectedPerson.name}
                          {selectedPerson.title && (
                            <span className="text-[10px] uppercase font-sans tracking-widest text-stone-400 border border-stone-600 px-1.5 py-0.5 rounded">
                              {selectedPerson.title}
                            </span>
                          )}
                        </h4>
                        {selectedPerson.urduName && (
                          <span className="font-amiri text-sm text-gold-base block mb-2" dir="rtl">
                            {selectedPerson.urduName}
                          </span>
                        )}
                        <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed italic">
                          {selectedPerson.details}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Unbroken Vertical Tree Chain */}
        {viewMode === "full" && (
          <div className="relative max-w-xl mx-auto py-10 bg-cream-base/30 border border-cream-dark/60 rounded-xl p-6 sm:p-10 shadow-inner">
            {/* The single vertical connection line running down the tree */}
            <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-gold-base/20 via-gold-base to-gold-base/25 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center space-y-12">
              {fullUnbrokenChain.map((person, index) => {
                const hasDetails = !!person.details;
                const isSelected = selectedPerson?.name === person.name;

                return (
                  <div key={person.name} className="relative flex flex-col items-center w-full">
                    {/* Visual Node bullet linking to central path */}
                    <div className="w-4 h-4 rounded-full bg-cream-light border-2 border-gold-base z-20 flex items-center justify-center mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-lapis-base" />
                    </div>

                    {/* Generation Count Tag */}
                    <span className="text-[9px] font-mono tracking-wider text-stone-500 mb-1">
                      GEN {index + 1}
                    </span>

                    {/* Person Card */}
                    <div
                      onClick={() => hasDetails && setSelectedPerson(person)}
                      className={`relative w-full max-w-sm px-4 py-3 rounded border text-center transition-all duration-300 ${
                        hasDetails ? "cursor-pointer" : "cursor-default"
                      } ${
                        isSelected
                          ? "bg-lapis-base text-cream-light border-gold-base scale-105 shadow-md"
                          : "bg-cream-light border-cream-dark/70 text-stone-800 hover:border-gold-base/60 hover:shadow"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <span className={`font-serif text-sm sm:text-base font-bold ${isSelected ? "text-gold-light" : "text-lapis-base"}`}>
                          {person.name}
                        </span>
                        {hasDetails && (
                          <span className="text-[10px] text-gold-base animate-pulse">✦</span>
                        )}
                      </div>
                      {person.urduName && (
                        <span className="font-amiri text-xs text-gold-dark font-semibold block mt-0.5" dir="rtl">
                          {person.urduName}
                        </span>
                      )}
                      {person.title && (
                        <span className="font-sans text-[9px] uppercase tracking-wider text-stone-500 font-bold block mt-1">
                          {person.title}
                        </span>
                      )}
                    </div>

                    {/* Node-specific detail display drawer */}
                    {isSelected && (
                      <div className="w-full max-w-sm mt-3 border border-gold-base/30 rounded p-4 bg-lapis-deep text-cream-light animate-fadeIn shadow-md text-left">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-serif text-xs text-gold-light font-bold">Historical Legacy</span>
                          <button
                            onClick={() => setSelectedPerson(null)}
                            className="text-[10px] text-stone-400 hover:text-white"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="text-xs text-stone-300 font-sans leading-relaxed italic">
                          {person.details}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default LineageTree;
