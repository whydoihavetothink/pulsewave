"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ButtonBorderMagicProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
  buttonBgColor?: string;
  textColor?: string;
  focusRingColor?: string;
  focusRingOffsetColor?: string;
}

export const ButtonBorderMagic: React.FC<ButtonBorderMagicProps> = ({
  children,
  primaryColor = "#C4DADD",
  secondaryColor = "#000000",
  buttonBgColor = "bg-emeraldGreen",
  textColor = "text-cloudy",
  focusRingColor = "focus:ring-slate-400",
  focusRingOffsetColor = "focus:ring-offset-slate-50",
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2",
        focusRingColor,
        "focus:ring-offset-2",
        focusRingOffsetColor
      )}
    >
      <span
        className={"absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"}
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, ${primaryColor} 0%, ${secondaryColor} 50%, ${primaryColor} 100%)`,
        }}
      />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-3xl",
          buttonBgColor,
          textColor
        )}
      >
        {children}
      </span>
    </button>
  );
};

/**
 * 
 *       <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Border Magic
        </span>
      </button>
 */
