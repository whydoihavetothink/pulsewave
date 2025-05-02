"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { ButtonBorderMagic } from "./aceternity/button-border-magic";

export function FixedPlugin() {

  const brandInstagram = process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/pulsewave_presents/";
  const instagramHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "pulsewave_presents";

  

  return (
    <a href={brandInstagram} target="_blank">
      <div className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center">
        <ButtonBorderMagic>
          <IconBrandInstagram width={128} height={128} className="w-5 h-5" />
          {instagramHandle}
        </ButtonBorderMagic>
      </div>
    </a>
  );
}
