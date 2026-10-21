"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Bed, Bath, Car, Calendar, Maximize2, Scan, CheckCircle2, Plane, Waves, Utensils, GraduationCap, ShoppingBag, Shield, Compass, } from "lucide-react";
import siteData from "@/data/site.json";
import { propertiesDetailAnimations } from "@/utils/animation/properties-detail.animation";
import { ContactDetailsCard } from "@/components/cards";

export interface FloorPlan {
  id: string;
  name: string;
  size: string;
  bedrooms: number | string;
  bathrooms: number | string;
  ceilingHeight?: string;
  image: string;
  description?: string;
}

export interface NearbyPlace {
  id: string;
  name: string;
  category: string;
  distance: string;
  time: string;
}

export interface PropertiesDetailSectionProps {
  propertySlug?: string;
}

export default function PropertiesDetailSection({
  propertySlug,
}: PropertiesDetailSectionProps): React.JSX.Element {
  // Load data from siteData.properties
  const { properties } = siteData;
  const propertiesList = properties.propertiesList;
  const fallbackProperty = propertiesList[0];

  // Find matching property from
  const matchedProperty =
    (propertySlug ? propertiesList.find((p) => p.id === propertySlug) : null) ||
    fallbackProperty;

  // Combine matched property data
  const property = {
    ...fallbackProperty,
    ...matchedProperty,
    title: matchedProperty.title || fallbackProperty.title,
    location: matchedProperty.location || fallbackProperty.location,
    mainImage:
      (matchedProperty as any).mainImage ||
      matchedProperty.imageUrl ||
      (fallbackProperty as any).mainImage ||
      fallbackProperty.imageUrl,

    specs:
      (matchedProperty as any).OverView ||
      (matchedProperty as any).overview ||
      (matchedProperty as any).specs ||
      (fallbackProperty as any).OverView ||
      (fallbackProperty as any).overview ||
      (fallbackProperty as any).specs ||
      [],
    description:
      (matchedProperty as any).description ||
      fallbackProperty.description ||
      "",
    amenities:
      (matchedProperty as any).amenities ||
      (matchedProperty as any).features ||
      (fallbackProperty as any).amenities ||
      (fallbackProperty as any).features ||
      [],
    floorPlans: (() => {
      const raw =
        (matchedProperty as any).floorPlans ||
        (fallbackProperty as any).floorPlans ||
        [];
      return Array.isArray(raw) ? raw : raw && typeof raw === "object" ? [raw] : [];
    })(),
    nearbyPlaces:
      (matchedProperty as any).nearbyPlaces ||
      (fallbackProperty as any).nearbyPlaces ||
      [],
    sectionTitles: properties.sectionTitles || {
      overview: "Overview",
      description: "Description",
      amenities: "Amenities & Features",
      floorPlans: "Floor Plans",
      location: "Location & Nearby Places",
    },
    inquiryForm: properties.inquiryForm || {},
  };

  const [activeFloorPlan, setActiveFloorPlan] = useState(0);

  // References for sticky column
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let pinTrigger: ScrollTrigger | null = null;
    const mm = gsap.matchMedia();

    const setupPin = () => {
      mm.add("(min-width: 1024px)", () => {
        if (!sidebarRef.current || !leftColRef.current) return;

        if (pinTrigger) {
          pinTrigger.kill();
          pinTrigger = null;
        }

        const smoother = ScrollSmoother.get();
        const hasSmoothContent = Boolean(document.querySelector("#smooth-content"));

        pinTrigger = ScrollTrigger.create({
          trigger: sidebarRef.current,
          start: "top 90px",
          end: () => {
            if (!leftColRef.current || !sidebarRef.current) return "+=0";
            const diff = leftColRef.current.offsetHeight - sidebarRef.current.offsetHeight;
            return `+=${Math.max(0, diff)}`;
          },
          pin: true,
          pinSpacing: false,
          pinType: (smoother || hasSmoothContent) ? "transform" : "fixed",
          invalidateOnRefresh: true,
        });

        return () => {
          if (pinTrigger) {
            pinTrigger.kill();
            pinTrigger = null;
          }
        };
      });

      ScrollTrigger.refresh();
    };

    // Small delay ensures ScrollSmoother
    const timer = setTimeout(setupPin, 120);
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(refreshTimer);
      if (pinTrigger) {
        pinTrigger.kill();
        pinTrigger = null;
      }
      mm.revert();
    };
  }, []);

  const currentImage = property.mainImage || "/images/service-villa.webp";

  // Floor plans data from
  const floorPlans: FloorPlan[] = property.floorPlans;
  const currentPlan = floorPlans[activeFloorPlan] || floorPlans[0] || {
    id: "fp-default",
    name: "Architectural Plan",
    size: "Spacious",
    bedrooms: 0,
    bathrooms: 0,
    image: property.mainImage || "/images/service-villa.webp",
  };

  // Amenities list from propertiesList
  const amenitiesList: string[] = property.amenities;

  // Nearby landmarks & transit
  const nearbyPlaces: NearbyPlace[] = property.nearbyPlaces;

  const renderNearbyIcon = (category: string) => {
    const iconClass = "w-8 h-8 text-[#2563EB] flex-shrink-0";
    switch (category.toLowerCase()) {
      case "airport":
        return <Plane className={iconClass} />;
      case "marina":
      case "beach":
        return <Waves className={iconClass} />;
      case "dining":
      case "restaurant":
        return <Utensils className={iconClass} />;
      case "education":
      case "school":
        return <GraduationCap className={iconClass} />;
      case "shopping":
        return <ShoppingBag className={iconClass} />;
      case "wellness":
      case "health":
        return <Shield className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  // Helper icon render for
  const renderSpecIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-[#2563EB] flex-shrink-0" };
    switch (iconName?.toLowerCase()) {
      case "bed":
      case "bedroom":
      case "bedrooms":
        return <Bed {...iconProps} />;
      case "bath":
      case "bathroom":
      case "bathrooms":
        return <Bath {...iconProps} />;
      case "car":
      case "garage":
        return <Car {...iconProps} />;
      case "calendar":
      case "year":
        return <Calendar {...iconProps} />;
      case "maximize2":
      case "area":
        return <Maximize2 {...iconProps} />;
      case "scan":
      case "lotsize":
        return <Scan {...iconProps} />;
      default:
        return <Maximize2 {...iconProps} />;
    }
  };

  return (
    <div className="relative w-full bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 text-[#11131a] font-sans select-none">
      
      {/* TOP HERO SECTION LARGE */}
      
      <section className="relative w-full max-w-7xl mx-auto">
        <motion.div
          variants={propertiesDetailAnimations.hero.variants}
          initial="initial"
          animate="animate"
          transition={propertiesDetailAnimations.hero.transition}
          className="relative w-full h-[300px] sm:h-[380px] md:h-[500px] lg:h-[500px] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-zinc-200/80 bg-zinc-900"
        >
          {/* Main Hero Background Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentImage}
                alt={property.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
                unoptimized
              />
            </motion.div>
          </AnimatePresence>

          {/* Cinematic Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

          {/* Top subtle shade */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

          {/* Bottom Overlay Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-4 md:p-6 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            {/* Left Column Title, Price, Location */}
            <div className="max-w-3xl">
              {/* Property location address block */}
              <div className="flex items-center gap-1.5 text-zinc-200 text-xs sm:text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#2563EB] flex-shrink-0 fill-[#2563EB]/20" />
                <span>{property.location}</span>
              </div>
              {/* Title & Price Row */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                  {property.title}
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MAIN CONTENT 2 COLUMN LAYOUT */}
      
      <section className="relative w-full pt-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6">
          
          {/* LEFT COLUMN OVERVIEW, DESCRIPTION, */}
          
          <div ref={leftColRef} className="lg:col-span-8 flex flex-col gap-6 sm:gap-6">
            
            {/* A. OVERVIEW SECTION */}
            
            <motion.div
              initial={propertiesDetailAnimations.fadeUp.initial}
              whileInView={propertiesDetailAnimations.fadeUp.whileInView}
              viewport={propertiesDetailAnimations.fadeUp.viewport}
              transition={propertiesDetailAnimations.fadeUp.transition}
            >
              {/* Section header title block */}
              <div className=" border-b border-zinc-100">
                <h2 className="text-2xl sm:text-[26px] font-bold text-[#11131a] tracking-tight">
                  {property.sectionTitles?.overview || "Overview"}
                </h2>
              </div>

              {/* Spec Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 mt-5">
                {(property.specs || []).map((spec: any) => (
                  <motion.div
                    key={spec.id}
                    whileHover={propertiesDetailAnimations.cardHover}
                    className="bg-[#f0f6ff]/70 border border-[#2563EB]/15 rounded-2xl px-2 py-3 flex items-center gap-3.5 transition-all hover:border-[#2563EB]/40 hover:bg-[#f0f6ff]"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 ">
                      {renderSpecIcon(spec.icon)}
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-zinc-500 tracking-wide uppercase">
                        {spec.label}
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-lg sm:text-xl font-bold text-[#11131a] leading-none">
                          {spec.value}
                        </span>
                        {spec.unit && (
                          <span className="text-xs text-zinc-500 font-medium">
                            {spec.unit}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* B. DESCRIPTION SECTION */}
            
            {property.description && (
              <motion.div
                initial={propertiesDetailAnimations.fadeUp.initial}
                whileInView={propertiesDetailAnimations.fadeUp.whileInView}
                viewport={propertiesDetailAnimations.fadeUp.viewport}
                transition={propertiesDetailAnimations.fadeUp.transition}
              >
                <h2 className="text-2xl font-bold text-[#11131a] tracking-tight mb-3">
                  {property.sectionTitles?.description || "Description"}
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {property.description}
                </p>
              </motion.div>
            )}

            {/* C. AMENITIES & FEATURES SECTION */}
            
            <motion.div
              initial={propertiesDetailAnimations.fadeUp.initial}
              whileInView={propertiesDetailAnimations.fadeUp.whileInView}
              viewport={propertiesDetailAnimations.fadeUp.viewport}
              transition={propertiesDetailAnimations.fadeUp.transition}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 border-b border-zinc-100 gap-2">
                <div>
                  <h2 className="text-2xl sm:text-[26px] font-bold text-[#11131a] tracking-tight">
                    {property.sectionTitles?.amenities || "Amenities & Features"}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                    Carefully curated bespoke comforts & architectural conveniences
                  </p>
                </div>
              </div>

              {/* Grid of amenities with */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
                {amenitiesList.map((amenity, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, x: 2 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50/80 hover:bg-[#f0f6ff]/70 border border-zinc-200/60 hover:border-[#2563EB]/30 transition-all group"
                  >
                    <div className="flex items-center justify-center rounded-full text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-800 tracking-tight group-hover:text-[#2563EB] transition-colors">
                      {amenity}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* D. FLOOR PLANS SECTION */}
            
            <motion.div
              initial={propertiesDetailAnimations.fadeUp.initial}
              whileInView={propertiesDetailAnimations.fadeUp.whileInView}
              viewport={propertiesDetailAnimations.fadeUp.viewport}
              transition={propertiesDetailAnimations.fadeUp.transition}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 border-b border-zinc-100 gap-4">
                <div>
                  <h2 className="text-2xl sm:text-[26px] font-bold text-[#11131a] tracking-tight">
                    {property.sectionTitles?.floorPlans || "Floor Plans"}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                    Architectural spatial layouts & dimensional distribution
                  </p>
                </div>
              </div>

              {/* Active Floor Plan Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPlan.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}

                >

                  {/* Floor Plan Blueprint / */}
                  <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-zinc-200 bg-[#0e1726] flex items-center justify-center">
                    {/* Architectural Blueprint Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

                    {/* Schematic Image with architectural glow */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                      <Image
                        src={currentPlan.image}
                        alt={currentPlan.name}
                        fill
                        className="object-cover rounded-xl opacity-80"
                        unoptimized
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* E. LOCATION & NEARBY PLACES */}
            
            <motion.div
              initial={propertiesDetailAnimations.fadeUp.initial}
              whileInView={propertiesDetailAnimations.fadeUp.whileInView}
              viewport={propertiesDetailAnimations.fadeUp.viewport}
              transition={propertiesDetailAnimations.fadeUp.transition}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 border-b border-zinc-100 gap-2">

                <h2 className="text-2xl sm:text-[26px] font-bold text-[#11131a] tracking-tight">
                  {property.sectionTitles?.location || "Location & Nearby Places"}
                </h2>
              </div>

              {/* Nearby Key Distances Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {nearbyPlaces.map((place) => (
                  <div
                    key={place.id}
                    className="flex items-start gap-3.5 group"
                  >
                    <div className="flex items-center justify-center text-[#2563EB] transition-colors flex-shrink-0 mt-0.5">
                      {renderNearbyIcon(place.category)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                        {place.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#11131a] truncate group-hover:text-[#2563EB] transition-colors mt-0.5">
                        {place.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN STICKY AGENT */}
          
          <div ref={sidebarContainerRef} className="lg:col-span-4 relative w-full h-full">
            <div ref={sidebarRef} className="w-full space-y-6 z-20">
              {/* Standalone Contact Details & */}
              <ContactDetailsCard
                propertyTitle={property.title}
                config={property.inquiryForm}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
