"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ServiceCard, { type ServiceItem } from "@/components/cards/ServiceCard";

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-1",
    title: "DESIGNING THE FUTURE OF LIVING",
    lines: ["DESIGNING", "THE FUTURE", "OF LIVING"],
    subtitle: "Architectural Masterworks",
    image: "/images/service-isometric-1.png",
  },
  {
    id: "service-2",
    title: "BESPOKE LUXURY VILLA ARCHITECTURE",
    lines: ["BESPOKE", "LUXURY VILLA", "ARCHITECTURE"],
    subtitle: "Custom Residence Design",
    image: "/images/service-isometric-2.png",
  },
  {
    id: "service-3",
    title: "WATERFRONT SANCTUARY LIVING",
    lines: ["WATERFRONT", "SANCTUARY", "LIVING"],
    subtitle: "Private Yacht Marinas",
    image: "/images/service-isometric-3.png",
  },
  {
    id: "service-4",
    title: "SKYLINE PENTHOUSE PORTFOLIO",
    lines: ["SKYLINE", "PENTHOUSE", "PORTFOLIO"],
    subtitle: "Metropolitan Towers",
    image: "/images/service-isometric-4.png",
  },
  {
    id: "service-5",
    title: "HIGH-DENSITY RESIDENTIAL TOWERS",
    lines: ["HIGH-DENSITY", "RESIDENTIAL", "TOWERS"],
    subtitle: "Urban Master Development",
    image: "/images/service-isometric-5.png",
  },
  {
    id: "service-6",
    title: "JAPANESE ZEN SANCTUARY MINIMALISM",
    lines: ["JAPANESE", "ZEN SANCTUARY", "MINIMALISM"],
    subtitle: "Biophilic Balance",
    image: "/images/service-isometric-6.png",
  }
];

export default function ServiceSection(): React.JSX.Element {
  return (
    <section
      id="services"
      className="relative w-full isolate text-[#11131a] bg-[#f4f4f2] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans select-none overflow-hidden border-t border-zinc-200"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 uppercase tracking-widest text-black mb-2"
          >
            <Sparkles className="h-5 w-5 text-[#2563EB]" />
            <span>Our Services</span>
          </motion.div>

          {/* Single-line Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
          >
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
              <span>Architectural</span>
              <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                <span className="inline-block skew-x-14 md:skew-x-18">
                  Services
                </span>
              </span>
              {/* SVG Rotating 8-point Sparkle */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]"
                >
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
              </motion.span>
            </div>
          </motion.h2>
        </div>

        {/* 4*2 Grid on Screen: 4 columns on desktop, 2 rows (8 cards total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 w-full">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
