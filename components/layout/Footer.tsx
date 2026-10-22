"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon, } from "@/components/icons";
import { site, SectionProps, DreamsFooterData } from "@/data";

// Social icon map
const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
};

// Contact icon map
const CONTACT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  phone: Phone,
  mappin: MapPin,
};

// Footer link interface
export interface FooterLink {
  label: string;
  href: string;
  isLive?: boolean;
}

// Footer contact interface
export interface FooterContactItem {
  icon: string;
  text: string;
  href: string;
}

// Footer social interface
export interface FooterSocialLink {
  platform: string;
  href: string;
  icon: string;
}

// Footer data interface
export interface FooterData {
  logo: {
    text: string;
    highlight: string;
    image?: string;
    alt?: string;
    href?: string;
  };
  description: string;
  about: {
    title: string;
    links: FooterLink[];
  };
  helpful: {
    title: string;
    links: FooterLink[];
  };
  contact: {
    title: string;
    items: FooterContactItem[];
  };
  socialLinks: FooterSocialLink[];
  copyright: string;
  watermark: string;
}

// Footer component export
export function Footer({ data, className }: SectionProps<DreamsFooterData> = {}): React.JSX.Element {
  const footer = (data || site.footer) as unknown as FooterData;

  return (
    // Footer container element
    <footer className={`relative w-full bg-black text-white pt-16 pb-6 overflow-hidden border-t border-zinc-900 select-none px-4 md:px-8 ${className || ""}`}>
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(37,99,235,0.16),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Four column grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-14"
        >
          {/* Brand bio column */}
          <div className="flex flex-col items-start gap-4">
            <Link
              href={footer.logo.href || "/"}
              className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
            >
              {footer.logo.image ? (
                <Image
                  src={footer.logo.image}
                  alt={footer.logo.alt || footer.logo.text}
                  width={130}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <span className="text-xl md:text-3xl font-bold tracking-tight text-white group-hover:text-[#2563EB] transition-colors">
                  {footer.logo.text}
                  <span className="text-[#2563EB]">{footer.logo.highlight}</span>
                </span>
              )}
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[260px]">
              {footer.description}
            </p>
          </div>

          {/* Navigation links column */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-lg font-semibold mb-5 tracking-tight flex items-center gap-2">
              {footer.about.title}
            </h3>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none text-sm text-zinc-400">
              {footer.about.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#2563EB] transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div className="flex flex-col items-start relative">
            <h3 className="text-white text-lg font-semibold mb-5 tracking-tight flex items-center gap-2">
              {footer.helpful.title}
            </h3>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none text-sm text-zinc-400">
              {footer.helpful.links.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    className="hover:text-[#2563EB] transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                  {link.isLive && (
                    <span className="relative flex h-2 w-2 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB] shadow-[0_0_8px_#2563EB]" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details column */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-lg font-semibold mb-5 tracking-tight flex items-center gap-2">
              {footer.contact.title}
            </h3>
            <ul className="flex flex-col gap-3.5 p-0 m-0 list-none text-sm text-zinc-300">
              {footer.contact.items.map((item, idx) => {
                const IconComp = CONTACT_ICONS[item.icon.toLowerCase()] || Mail;
                return (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="flex items-start gap-3 hover:text-white transition-colors duration-200 group py-0.5"
                    >
                      <span className="transition-transform duration-200 group-hover:scale-110 mt-0.5 flex-shrink-0">
                        <IconComp className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                      </span>
                      <span className="text-zinc-300 group-hover:text-[#2563EB] transition-colors leading-relaxed">
                        {item.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        <div className="w-full border-t border-zinc-800/80 mb-6" />

        {/* Social copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-2">
          {/* Social media links */}
          <div className="flex items-center gap-5 text-zinc-400">
            {footer.socialLinks.map((social) => {
              const IconComponent =
                SOCIAL_ICONS[social.platform.toLowerCase()] ||
                SOCIAL_ICONS[social.icon.toLowerCase()] ||
                FacebookIcon;

              return (
                // Social icon link
                <motion.a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright notice text */}
          <p className="text-zinc-400 text-sm font-normal">
            {footer.copyright}
          </p>
        </div>

        {/* Watermark SVG container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.85, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center overflow-hidden pt-4 pb-2 relative select-none"
        >
          <svg
            viewBox="0 0 1200 240"
            className="w-full h-auto max-h-[190px] select-none pointer-events-none drop-shadow-[0_0_20px_rgba(37,99,235,0.25)]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="neon-glow-smooth" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <text
              x="50%"
              y="78%"
              textAnchor="middle"
              fill="transparent"
              stroke="#2563EB"
              strokeWidth="2.2"
              filter="url(#neon-glow-smooth)"
              className="font-black tracking-[0.08em] text-[230px] font-sans"
            >
              {footer.watermark}
            </text>
          </svg>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;