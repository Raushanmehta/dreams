"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Heart,
  SlidersHorizontal,
  Printer,
  Share2,
  Bed,
  Bath,
  Car,
  Calendar,
  Maximize2,
  Scan,
  CheckCircle2,
  FileText,
  Download,
  Check,
} from "lucide-react";
import siteData from "@/data/site.json";
import { propertiesDetailAnimations } from "@/utils/animation/properties-detail.animation";
import { AgentProfileCard, ContactDetailsCard } from "@/components/cards";

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

  // Find matching property from propertiesList if slug matches, otherwise fallback to first property
  const matchedProperty =
    (propertySlug ? propertiesList.find((p) => p.id === propertySlug) : null) ||
    fallbackProperty;

  // Combine matched property data from propertiesList
  const property = {
    ...fallbackProperty,
    ...matchedProperty,
    title: matchedProperty.title || fallbackProperty.title,
    price: matchedProperty.price || fallbackProperty.price,
    location: matchedProperty.location || fallbackProperty.location,
    mainImage:
      (matchedProperty as any).mainImage ||
      matchedProperty.imageUrl ||
      (fallbackProperty as any).mainImage ||
      fallbackProperty.imageUrl,
    galleryImages:
      (matchedProperty as any).galleryImages ||
      (fallbackProperty as any).galleryImages ||
      [],
    specs:
      (matchedProperty as any).specs ||
      (fallbackProperty as any).specs ||
      [],
    description:
      (matchedProperty as any).description ||
      fallbackProperty.description ||
      "",
    commonNote:
      (matchedProperty as any).commonNote ||
      (fallbackProperty as any).commonNote ||
      "",
    features:
      (matchedProperty as any).features ||
      (fallbackProperty as any).features ||
      [],
    attachments:
      (matchedProperty as any).attachments ||
      (fallbackProperty as any).attachments ||
      [],
    sectionTitles: properties.sectionTitles || {
      overview: "Overview",
      description: "Description",
      commonNote: "Properties Common Note",
      features: "Features",
      attachments: "Property Attachments",
    },
    inquiryForm: properties.inquiryForm || {},
    agent: (matchedProperty as any).agent || properties.agent || {
      name: "Nathan James",
      role: "Agent",
      avatar: "/images/agent-nathan.png",
      isVerified: true,
      listingsUrl: "/properties",
      contacts: {},
    },
  };

  // State management
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  const gallery = property.galleryImages || [];
  const currentImage = gallery[activeImageIndex]?.url || property.mainImage;

  // Actions
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      } catch {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      }
    }
  };

  // Helper icon render for specs
  const renderSpecIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "bed":
        return <Bed className="w-6 h-6 text-[#2563EB]" />;
      case "bath":
        return <Bath className="w-6 h-6 text-[#2563EB]" />;
      case "car":
      case "garage":
        return <Car className="w-6 h-6 text-[#2563EB]" />;
      case "calendar":
        return <Calendar className="w-6 h-6 text-[#2563EB]" />;
      case "maximize2":
      case "area":
        return <Maximize2 className="w-6 h-6 text-[#2563EB]" />;
      case "scan":
      case "lotsize":
        return <Scan className="w-6 h-6 text-[#2563EB]" />;
      default:
        return <Bed className="w-6 h-6 text-[#2563EB]" />;
    }
  };

  return (
    <div className="relative w-full bg-[#f4f4f2] px-6 md:px-12 py-14 sm:py-18 md:py-20 text-[#11131a] font-sans select-none">
      {/* ========================================================= */}
      {/* 1. TOP HERO SECTION: LARGE IMAGE WITH OVERLAYS           */}
      {/* ========================================================= */}
      <section className="relative w-full max-w-7xl mx-auto">
        <motion.div
          variants={propertiesDetailAnimations.hero.variants}
          initial="initial"
          animate="animate"
          transition={propertiesDetailAnimations.hero.transition}
          className="relative w-full h-[300px] sm:h-[380px] md:h-[500px] lg:h-[500px] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-zinc-200/80 bg-zinc-900"
        >
          {/* Main Hero Background Image with Smooth Crossfade */}
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
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            {/* Left Column: Title, Price, Location */}
            <div className="max-w-3xl">
              {/* Title & Price Row */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
                {/* Vibrant #2563EB Price Badge */}
                <span className="inline-flex items-center bg-[#2563EB] text-white text-xl sm:text-2xl md:text-3xl font-extrabold px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-[0_8px_25px_rgba(37,99,235,0.45)]">
                  {property.price}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                  {property.title}
                </h1>

              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-zinc-200 text-xs sm:text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#2563EB] flex-shrink-0 fill-[#2563EB]/20" />
                <span>{property.location}</span>
              </div>
            </div>


          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. THUMBNAIL GALLERY STRIP                               */}
      {/* ========================================================= */}
      {gallery && gallery.length > 0 && (
        <section className="relative w-full pt-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3.5">
            {gallery.slice(0, 6).map((img: any, index: number) => {
              const isActive = activeImageIndex === index;
              return (
                <motion.button
                  key={img.id || index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative h-18 sm:h-22 md:h-24 w-full rounded-2xl overflow-hidden cursor-pointer transition-all ${isActive
                    ? "ring-3 ring-[#2563EB] shadow-[0_6px_20px_rgba(37,99,235,0.35)]"
                    : "opacity-80 hover:opacity-100 ring-1 ring-zinc-300"
                    }`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt || `Photo ${index + 1}`}
                    fill
                    sizes="160px"
                    className="object-cover"
                    unoptimized
                  />
                </motion.button>
              );
            })}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 3. MAIN CONTENT: 2-COLUMN LAYOUT                         */}
      {/* ========================================================= */}
      <section className="relative w-full pt-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start">
          {/* ======================================================= */}
          {/* LEFT COLUMN: OVERVIEW, DESCRIPTION, FEATURES, ATTACHMENTS */}
          {/* ======================================================= */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-6">
            {/* ----------------------------------------------------- */}
            {/* A. OVERVIEW SECTION                                  */}
            {/* ----------------------------------------------------- */}
            <motion.div
              initial={propertiesDetailAnimations.fadeUp.initial}
              whileInView={propertiesDetailAnimations.fadeUp.whileInView}
              viewport={propertiesDetailAnimations.fadeUp.viewport}
              transition={propertiesDetailAnimations.fadeUp.transition}
            >
              {/* Header */}
              <div className="pb-6 border-b border-zinc-100">
                <h2 className="text-2xl sm:text-[26px] font-bold text-[#11131a] tracking-tight">
                  {property.sectionTitles?.overview || "Overview"}
                </h2>
              </div>

              {/* 6 Spec Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 ">
                {(property.specs || []).map((spec: any) => (
                  <motion.div
                    key={spec.id}
                    whileHover={propertiesDetailAnimations.cardHover}
                    className="bg-[#f0f6ff]/70 border border-[#2563EB]/15 rounded-2xl px-2 py-3 flex items-center gap-3.5 transition-all hover:border-[#2563EB]/40 hover:bg-[#f0f6ff]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-[#2563EB]/10">
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

            {/* ----------------------------------------------------- */}
            {/* B. DESCRIPTION SECTION                               */}
            {/* ----------------------------------------------------- */}
            {property.description && (
              <motion.div
                initial={propertiesDetailAnimations.fadeUp.initial}
                whileInView={propertiesDetailAnimations.fadeUp.whileInView}
                viewport={propertiesDetailAnimations.fadeUp.viewport}
                transition={propertiesDetailAnimations.fadeUp.transition}
              >
                <h2 className="text-2xl font-bold text-[#11131a] tracking-tight mb-4">
                  {property.sectionTitles?.description || "Description"}
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {property.description}
                </p>
              </motion.div>
            )}

            {/* ----------------------------------------------------- */}
            {/* C. PROPERTIES COMMON NOTE BANNER                     */}
            {/* ----------------------------------------------------- */}
            {property.commonNote && (
              <motion.div
                initial={propertiesDetailAnimations.fadeUp.initial}
                whileInView={propertiesDetailAnimations.fadeUp.whileInView}
                viewport={propertiesDetailAnimations.fadeUp.viewport}
                transition={propertiesDetailAnimations.fadeUp.transition}
              >
                <h2 className="text-2xl font-bold text-[#11131a] tracking-tight mb-4">
                  {property.sectionTitles?.commonNote || "Properties Common Note"}
                </h2>
                <div className="bg-[#e0f2fe]/60 border border-[#bae6fd] text-sky-950 text-sm leading-relaxed p-5 rounded-2xl">
                  {property.commonNote}
                </div>
              </motion.div>
            )}

            {/* ----------------------------------------------------- */}
            {/* D. FEATURES CHECKLIST GRID                           */}
            {/* ----------------------------------------------------- */}
            {property.features && property.features.length > 0 && (
              <motion.div
                initial={propertiesDetailAnimations.fadeUp.initial}
                whileInView={propertiesDetailAnimations.fadeUp.whileInView}
                viewport={propertiesDetailAnimations.fadeUp.viewport}
                transition={propertiesDetailAnimations.fadeUp.transition}
              >
                <h2 className="text-2xl font-bold text-[#11131a] tracking-tight mb-6">
                  {property.sectionTitles?.features || "Features"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                  {(property.features || []).map((feature: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm font-medium text-zinc-800"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 fill-[#2563EB]/15" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ----------------------------------------------------- */}
            {/* E. PROPERTY ATTACHMENTS                               */}
            {/* ----------------------------------------------------- */}
            {property.attachments && property.attachments.length > 0 && (
              <motion.div
                initial={propertiesDetailAnimations.fadeUp.initial}
                whileInView={propertiesDetailAnimations.fadeUp.whileInView}
                viewport={propertiesDetailAnimations.fadeUp.viewport}
                transition={propertiesDetailAnimations.fadeUp.transition}
              >
                <h2 className="text-2xl font-bold text-[#11131a] tracking-tight mb-6">
                  {property.sectionTitles?.attachments || "Property Attachments"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(property.attachments || []).map((file: any) => (
                    <div
                      key={file.id}
                      className="bg-[#f0f6ff]/70 border border-[#2563EB]/20 hover:border-[#2563EB] rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 transition-all group"
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Document Type Icon */}
                        <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-black text-lg shadow-[0_4px_12px_rgba(37,99,235,0.3)] flex-shrink-0">
                          {file.type === "word" ? "W" : <FileText className="w-6 h-6" />}
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-[#11131a] group-hover:text-[#2563EB] transition-colors">
                            {file.title}
                          </span>
                          <span className="text-xs text-zinc-500 font-medium">
                            {file.size}
                          </span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <a
                        href={file.url}
                        download
                        aria-label={`Download ${file.title}`}
                        className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all shadow-sm"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: STICKY AGENT PROFILE & INQUIRY FORM       */}
          {/* ======================================================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6 z-20">
            {/* 1. Standalone Agent Profile Card */}
            <AgentProfileCard agent={property.agent} />

            {/* 2. Standalone Contact Details & Inquiry Form Card */}
            <ContactDetailsCard
              propertyTitle={property.title}
              agentName={property.agent?.name}
              config={property.inquiryForm}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
