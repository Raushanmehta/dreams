"use client";

import React from "react";
import AuthorAboutCard, { type AuthorProfile } from "@/components/cards/AuthorAboutCard";

export interface AuthorAboutSectionProps {
  author?: AuthorProfile;
  className?: string;
}

export default function AuthorAboutSection({
  author,
  className = "",
}: AuthorAboutSectionProps) {
  return (
    <section className={`w-full bg-[#FAF7F2] py-12 px-4 sm:px-6 flex justify-center ${className}`}>
      <div className="max-w-md w-full">
        <AuthorAboutCard author={author} />
      </div>
    </section>
  );
}

export { AuthorAboutCard };
