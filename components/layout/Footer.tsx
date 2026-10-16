"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import gsap from "gsap";

export default function Footer() {
  const watermarkRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<SVGTextElement | null>(null);
  const isInView = useInView(watermarkRef, { once: true, amount: 0.15 });

  // 3D Perspective Tilt on Mouse Movement via Framer Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-9, 9]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!watermarkRef.current) return;
    const rect = watermarkRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Silky Smooth Scroll Reveal: Laser stroke draw-in with zero blinking
  useEffect(() => {
    if (!textRef.current || !isInView) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          strokeDashoffset: 2600,
          opacity: 0,
        },
        {
          strokeDashoffset: 0,
          opacity: 0.85,
          duration: 2.5,
          ease: "power2.out",
        }
      );
    }, watermarkRef);

    return () => ctx.revert();
  }, [isInView]);

  const aboutLinks = [
    { label: "Company History", href: "#about" },
    { label: "Meet the Team", href: "#team" },
    { label: "Portfolio Estates", href: "#services" },
    { label: "Private Acquisitions", href: "#why-choose-us" },
  ];

  const helpfulLinks = [
    { label: "FAQs", href: "#faqs" },
    { label: "Client Support", href: "#contact" },
    { label: "Live Advisory", href: "#contact", isLive: true },
    { label: "Privacy Policy", href: "#privacy" },
  ];

  const contactItems = [
    {
      icon: <Mail className="w-4 h-4 text-[#2563EB] flex-shrink-0" />,
      text: "concierge@dreamsrealty.com",
      href: "mailto:concierge@dreamsrealty.com",
    },
    {
      icon: <Phone className="w-4 h-4 text-[#2563EB] flex-shrink-0" />,
      text: "+1 (800) 285-3921",
      href: "tel:+18002853921",
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#2563EB] flex-shrink-0" />,
      text: "Beverly Hills • Dubai • Monaco",
      href: "#location",
    },
  ];

  return (
    <footer id="contact" className="relative w-full bg-black text-white pt-16 pb-6 overflow-hidden border-t border-zinc-900 select-none px-6 md:px-12">
      {/* Ambient #2563EB radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(37,99,235,0.16),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top 4-Column Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-14"
        >
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-start gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
            >



              <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#2563EB] transition-colors">
                Dreams<span className="text-[#2563EB]">*</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[260px]">
              Curating the world&apos;s most prestigious residential sanctuaries, private waterfront estates, and prime architectural masterworks.
            </p>
          </div>

          {/* Column 2: About Us */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-base font-semibold mb-5 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              About Us
            </h3>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none text-sm text-zinc-400">
              {aboutLinks.map((link) => (
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

          {/* Column 3: Helpful Links */}
          <div className="flex flex-col items-start relative">
            <h3 className="text-white text-base font-semibold mb-5 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Helpful Links
            </h3>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none text-sm text-zinc-400">
              {helpfulLinks.map((link) => (
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

          {/* Column 4: Contact Us */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-base font-semibold mb-5 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3.5 p-0 m-0 list-none text-sm text-zinc-300">
              {contactItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 hover:text-white transition-colors duration-200 group py-0.5"
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className="text-zinc-300 group-hover:text-[#2563EB] transition-colors">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="w-full border-t border-zinc-800/80 mb-6" />

        {/* Middle Row: Social Media Links (Left) & Copyright (Right) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-2"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-5 text-zinc-400">
            {/* Facebook */}
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#2563EB] transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#2563EB] transition-colors"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#2563EB] transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </motion.a>

            {/* Dribbble */}
            <motion.a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#2563EB] transition-colors"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
              </svg>
            </motion.a>

            {/* Globe / Website */}
            <motion.a
              href="#home"
              aria-label="Website"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-[#2563EB] transition-colors"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </motion.a>
          </div>

          {/* Copyright Text */}
          <p className="text-zinc-400 text-sm font-normal">
            &copy; 2026 Dreams Real Estate. All rights reserved.
          </p>
        </motion.div>

        {/* Bottom Giant Outlined "DREAMS" Watermark with Smooth Scroll Reveal & Framer Motion Tilt */}
        <motion.div
          ref={watermarkRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: 1000,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center overflow-hidden pt-4 pb-2 cursor-pointer relative select-none"
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
              ref={textRef}
              x="50%"
              y="78%"
              textAnchor="middle"
              fill="transparent"
              stroke="#2563EB"
              strokeWidth="2.2"
              filter="url(#neon-glow-smooth)"
              className="font-black tracking-[0.08em] text-[230px] font-sans"
              style={{
                strokeDasharray: "2600",
                strokeDashoffset: "2600",
                opacity: 0,
              }}
            >
              DREAMS
            </text>
          </svg>
        </motion.div>
      </div>
    </footer>
  );
}