import React from "react";

interface ImagePlaceholderProps {
  text: string;
  caption: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  text,
  caption,
  className = "",
}) => {
  return (
    <div
      className={`relative group overflow-hidden border border-gold-base/20 rounded-md bg-cream-base/50 p-6 flex flex-col justify-between aspect-video transition-all duration-500 hover:border-gold-base/60 hover:bg-cream-base/80 shadow-sm hover:shadow-md ${className}`}
    >
      {/* Heritage Corner Ornaments */}
      <div className="corner-ornament ornament-tl" />
      <div className="corner-ornament ornament-tr" />
      <div className="corner-ornament ornament-bl" />
      <div className="corner-ornament ornament-br" />

      {/* Repeating Islamic Star Lattice Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L50 30 L80 40 L50 50 L40 80 L30 50 L0 40 L30 30 Z' fill='%23C5A059' fill-opacity='0.5'/%3E%3Ccircle cx='40' cy='40' r='6' stroke='%23C5A059' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative center icon/motif */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-4">
        {/* Eight-Pointed Star (Khatim) SVG Medallion */}
        <svg
          className="w-10 h-10 text-gold-base opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Star */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M12 2l3 5 5 3-5 3-3 5-3-5-5-3 5-3z"
          />
          {/* Inner rotated star */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.8"
            d="M12 5.5l2 3.5 3.5 2-3.5 2-2 3.5-2-3.5-3.5-2 3.5-2z"
            transform="rotate(45 12 12)"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" className="text-gold-base/50" />
        </svg>
        <span className="font-serif text-xs tracking-widest text-gold-dark font-semibold uppercase text-center max-w-xs px-4">
          {text}
        </span>
      </div>

      <div className="relative z-10 border-t border-cream-dark/60 pt-3 mt-2">
        <p className="text-xs text-stone-600 text-center font-sans font-light leading-relaxed">
          {caption}
        </p>
      </div>
    </div>
  );
};
export default ImagePlaceholder;
