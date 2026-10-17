"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Smartphone,
  Printer,
  Mail,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export interface AgentContacts {
  office?: string;
  mobile?: string;
  fax?: string;
  whatsapp?: string;
  email?: string;
}

export interface AgentProfileData {
  name: string;
  role?: string;
  avatar: string;
  isVerified?: boolean;
  listingsUrl?: string;
  contacts?: AgentContacts;
}

export interface AgentProfileCardProps {
  agent: AgentProfileData;
  className?: string;
}

// Custom WhatsApp Icon for accurate branding
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export default function AgentProfileCard({
  agent,
  className = "",
}: AgentProfileCardProps): React.JSX.Element {
  const contacts = agent.contacts || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-white rounded-[26px] border border-zinc-200/80 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] select-none ${className}`}
    >
      {/* 1. Agent Bio Header */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Avatar with circular container */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-[#2563EB]/15 shadow-sm shrink-0 bg-slate-100">
          <Image
            src={agent.avatar || "/images/agent-nathan.png"}
            alt={agent.name}
            fill
            sizes="80px"
            className="object-cover object-top"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-zinc-400 tracking-wide">
            {agent.role || "Agent"}
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight leading-tight">
              {agent.name}
            </h3>
            {agent.isVerified && (
              <span title="Verified Agent">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] fill-[#2563EB] text-white" />
              </span>
            )}
          </div>
          <Link
            href={agent.listingsUrl || "/properties"}
            className="text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-blue-700 hover:underline mt-1 inline-flex items-center gap-1 transition-colors group"
          >
            <span>View My Listings</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>

      {/* 2. Contact Details List */}
      <div className="mt-6 pt-5 border-t border-zinc-100 space-y-3">
        {/* Office Phone */}
        {contacts.office && (
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-zinc-500 font-medium w-24 shrink-0">Office</span>
            <a
              href={`tel:${contacts.office.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-zinc-700 hover:text-[#2563EB] font-medium transition-colors group text-right"
            >
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span>{contacts.office}</span>
            </a>
          </div>
        )}

        {/* Mobile Phone */}
        {contacts.mobile && (
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-zinc-500 font-medium w-24 shrink-0">Mobile</span>
            <a
              href={`tel:${contacts.mobile.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-zinc-700 hover:text-[#2563EB] font-medium transition-colors group text-right"
            >
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <Smartphone className="w-3.5 h-3.5" />
              </span>
              <span>{contacts.mobile}</span>
            </a>
          </div>
        )}

        {/* Fax */}
        {contacts.fax && (
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-zinc-500 font-medium w-24 shrink-0">Fax</span>
            <div className="flex items-center gap-2 text-zinc-700 font-medium text-right">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <Printer className="w-3.5 h-3.5" />
              </span>
              <span>{contacts.fax}</span>
            </div>
          </div>
        )}

        {/* WhatsApp */}
        {contacts.whatsapp && (
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-zinc-500 font-medium w-24 shrink-0">WhatsApp</span>
            <a
              href={`https://wa.me/${contacts.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-700 hover:text-[#2563EB] font-medium transition-colors group text-right"
            >
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </span>
              <span>{contacts.whatsapp}</span>
            </a>
          </div>
        )}

        {/* Email */}
        {contacts.email && (
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-zinc-500 font-medium w-24 shrink-0">Email</span>
            <a
              href={`mailto:${contacts.email}`}
              className="flex items-center gap-2 text-zinc-700 hover:text-[#2563EB] font-medium transition-colors group truncate max-w-[210px] text-right"
              title={contacts.email}
            >
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </span>
              <span className="truncate">{contacts.email}</span>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
