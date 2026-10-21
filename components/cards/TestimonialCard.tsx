"use client";

import React from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number | string;
  bgColor?: string;
  quote: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  isExpanded?: boolean;
  onToggle?: () => void;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps): React.JSX.Element {
  // Parse rating (supports numbers
  const numericRating =
    typeof testimonial.rating === "number"
      ? testimonial.rating
      : parseFloat(String(testimonial.rating).replace("/5", "").trim()) || 5;

  return (
    <div
      className={cn(
        "group relative w-[295px] sm:w-[325px] md:w-[350px] rounded-[26px] p-[1.5px] bg-gradient-to-b from-white/15 via-white/5 to-white/10",
        "hover:from-white/60 hover:via-[#2563EB]/45 hover:to-[#2563EB]/70",
        "shadow-[0_18px_45px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.35)]",
        "hover:shadow-[0_22px_55px_rgba(37,99,235,0.25),inset_0_1px_2px_rgba(255,255,255,0.5)]",
        "transition-all duration-500 flex-shrink-0 select-none self-stretch flex flex-col",
        className
      )}
    >
      {/* Inner Glossy Glass Container */}
      <div className="relative w-full h-full rounded-[24.5px] p-6 sm:p-7 flex flex-col justify-between bg-zinc-950/85 backdrop-blur-2xl overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.22),inset_0_0_24px_0_rgba(255,255,255,0.02)]">
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            {/* Top Row Avatar and */}
            <div className="flex items-center justify-between mb-5 gap-3">
              
              <div className="w-[52px] h-[52px] rounded-xl bg-white/[0.06] shadow-inner overflow-hidden flex items-center justify-center p-0.5 border border-white/15 flex-shrink-0 group-hover:border-[#2563EB]/40 transition-colors">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={52}
                  height={52}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>

              {/* Stars / 4.5 Stars */}
              <div className="flex items-center">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((starIdx) => {
                    const isFull = numericRating >= starIdx;
                    const isHalf = !isFull && numericRating >= starIdx - 0.5;

                    if (isFull) {
                      return (
                        <Star
                          key={starIdx}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                        />
                      );
                    }
                    if (isHalf) {
                      return (
                        <div
                          key={starIdx}
                          className="relative w-3.5 h-3.5 flex items-center justify-center"
                        >
                          <Star className="w-3.5 h-3.5 text-zinc-600 absolute inset-0" />
                          <StarHalf className="w-3.5 h-3.5 fill-amber-400 text-amber-400 absolute inset-0 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
                        </div>
                      );
                    }
                    return (
                      <Star
                        key={starIdx}
                        className="w-3.5 h-3.5 text-zinc-600"
                      />
                    );
                  })}
                </div>
                <span className="text-zinc-200 font-semibold font-mono text-[12px] sm:text-[12.5px] ml-0.5">
                  {numericRating % 1 === 0 ? `${numericRating}.0` : numericRating}
                </span>
              </div>
            </div>

            {/* Middle Row Name and Role */}
            <div className="mb-4">
              <h3 className="font-bold text-[17px] sm:text-[18px] text-white tracking-tight leading-snug truncate">
                {testimonial.name}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-zinc-400 font-medium tracking-tight mt-0.5 truncate">
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Bottom Row Quote (Always */}
          <div className="border-t border-white/[0.08] pt-4 mt-auto">
            <p className="text-zinc-300 text-[13.5px] sm:text-[14px] font-normal leading-[1.65] tracking-[-0.01em]">
              {testimonial.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
