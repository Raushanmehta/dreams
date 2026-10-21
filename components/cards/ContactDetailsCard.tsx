"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import siteData from "@/data/site.json";

export interface InquiryFormConfig {
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  messagePrefix?: string;
  gdprLabel?: string;
  gdprText?: string;
  submitButtonText?: string;
  successMessage?: string;
}

export interface ContactDetailsCardProps {
  propertyTitle?: string;
  agentName?: string;
  config?: InquiryFormConfig;
  className?: string;
  onSuccess?: () => void;
}

export default function ContactDetailsCard({
  propertyTitle = "Villa on Hollywood Boulevard",
  agentName,
  config,
  className = "",
  onSuccess,
}: ContactDetailsCardProps): React.JSX.Element {
  const inquiryConfig = config || (siteData.properties as any)?.inquiryForm || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `${inquiryConfig.messagePrefix || "Hello, I am interested in"} [${propertyTitle}]`,
    gdprConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.gdprConsent) {
      setErrorMessage("Please accept the GDPR agreement to continue.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: `Hello, I am interested in [${propertyTitle}]`,
          gdprConsent: false,
        });
      }, 4000);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-[#eaf4fd] rounded-[26px] border border-[#d2e8fc] p-4 sm:p-5 shadow-[0_8px_30px_rgba(37,99,235,0.06)] ${className}`}
    >
      <form onSubmit={handleSubmit} className="space-y-3.5">
        
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            required
            placeholder={inquiryConfig.namePlaceholder || "Name"}
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full bg-white border border-blue-100/90 rounded-full pl-11 pr-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-[0_2px_8px_rgba(37,99,235,0.03)] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          <input
            type="email"
            required
            placeholder={inquiryConfig.emailPlaceholder || "Email"}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-white border border-blue-100/90 rounded-full pl-11 pr-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-[0_2px_8px_rgba(37,99,235,0.03)] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          <input
            type="tel"
            placeholder={inquiryConfig.phonePlaceholder || "Phone"}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-white border border-blue-100/90 rounded-full pl-11 pr-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-[0_2px_8px_rgba(37,99,235,0.03)] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-zinc-400 pointer-events-none" />
          <textarea
            rows={4}
            required
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-white border border-blue-100/90 rounded-2xl pl-11 pr-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-[0_2px_8px_rgba(37,99,235,0.03)] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none"
          />
        </div>

        {/* Error message if consent missed */}
        {errorMessage && (
          <p className="text-xs text-red-500 font-medium px-1">
            {errorMessage}
          </p>
        )}

        {/* Send Message Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm tracking-wide shadow-[0_4px_16px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isSubmitted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <span>{inquiryConfig.submitButtonText || "Send Message"}</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Success Notification Banner */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs text-center font-medium"
          >
            {inquiryConfig.successMessage
              ? inquiryConfig.successMessage
              : `Thank you! Agent ${agentName || "Nathan James"} will contact you shortly regarding this property.`}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
