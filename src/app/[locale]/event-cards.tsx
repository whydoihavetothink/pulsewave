"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import { SECONDARY_COLOR, TICKETS_LINK } from "@/constants";
import { GlareCard } from "@/components/aceternity/glare-card";

const eventBanners = [
  "yotto",
  "argy",
  "baset",
];

const eventLinks: Record<string, string> = {
  "argy":
    "https://tickets.nfctron.com/event/noisemaniac-sro/play-or-die-argy/cart?backLink=%2Ftour%2Fplay-or-die-2025",
  "yotto":
    "https://tickets.nfctron.com/event/noisemaniac-sro/yotto-2025/cart?backLink=%2Ftour%2Fplay-or-die-2025",
  "baset":
    "https://tickets.nfctron.com/event/noisemaniac-sro/baset-2025/cart?backLink=%2Ftour%2Fplay-or-die-2025",
};

export function EventCards() {
  return (
    <section className="py-4 mx-auto lg:py-10">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {eventBanners.map((event, key) => (
          <div
          className="flex justify-center items-center" 
          key={key}
          >
            <GlareCard link={eventLinks[event] ?? TICKETS_LINK}>
                <Image
                  width={1200}
                  height={1200}
                  src={`/media/banners/${event}.png`}
                  alt={event}
                  className="absolute h-full object-cover"
                />
            </GlareCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventCards;
