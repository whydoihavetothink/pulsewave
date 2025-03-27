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
  primaryColor = "#E2CBFF",
  secondaryColor = "#393BB2",
  buttonBgColor = "bg-gray-900",
  textColor = "text-white",
  focusRingColor = "focus:ring-slate-400",
  focusRingOffsetColor = "focus:ring-offset-slate-100",
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
        className={cn(
          "absolute inset-[-1000%] animate-[spin_2s_linear_infinite]",
          `bg-[conic-gradient(from_90deg_at_50%_50%,${primaryColor}_0%,${secondaryColor}_50%,${primaryColor}_100%)]`
        )}
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
