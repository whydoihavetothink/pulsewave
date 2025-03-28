"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { ButtonBorderMagic } from "./aceternity/button-border-magic";

export function FixedPlugin() {
  return (
    <a href="https://www.instagram.com/pulsewave_presents/" target="_blank">
      <div className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center">
        <ButtonBorderMagic>
          <IconBrandInstagram width={128} height={128} className="w-5 h-5" />
          pulsewave_presents
        </ButtonBorderMagic>
      </div>
    </a>
  );
}
