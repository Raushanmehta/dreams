"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

function parseStatValue(raw: string) {
  const hasComma = raw.includes(",");
  const clean = raw.replace(/,/g, "");
  const match = clean.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { prefix: "", target: NaN, decimals: 0, suffix: raw, hasComma: false };
  }
  const prefix = match[1];
  const target = parseFloat(match[2]);
  const decimalPart = match[2].split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;
  const suffix = match[3];
  return { prefix, target, decimals, suffix, hasComma };
}

function formatNumber(num: number, decimals: number, hasComma: boolean): string {
  const fixed = num.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const formattedInt = parseInt(intPart, 10).toLocaleString();
  return decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;
}

export default function StatCounter({
  value,
  duration = 2,
  delay = 0,
  className,
}: StatCounterProps): React.JSX.Element {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    if (!isInView) return;

    const parsed = parseStatValue(value);
    if (isNaN(parsed.target)) return;

    // Set initial 0 state when starting animation
    setDisplay(
      `${parsed.prefix}${formatNumber(0, parsed.decimals, parsed.hasComma)}${parsed.suffix}`
    );

    const controls = animate(0, parsed.target, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(
          `${parsed.prefix}${formatNumber(latest, parsed.decimals, parsed.hasComma)}${parsed.suffix}`
        );
      },
      onComplete: () => {
        setDisplay(value);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
