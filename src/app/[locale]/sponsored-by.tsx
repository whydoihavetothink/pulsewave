"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import { SECONDARY_COLOR } from "@/constants";
import { Link } from "lucide-react";

const pulsewave_sponsors = [
  "noisemaniac",
  "kokosaburak",
  "winelife",
  "heineken",
  "jagermaister",
  "don_julio",
  "spvg",
  "rtp_power",
  "1er",
  "desperado",
  "ploom",
  "belvedere",
  "hedin_automotive",
  "casablanca",
];

const play_or_die_sponsors = [
  "noisemaniac",
  "kokosaburak",
  "winelife",
  "heineken",
  "jagermaister",
  "spvg",
  "rtp_power",
  "desperado",
  "casablanca",
];

const links: Record<string, string> = {
  kokosaburak: "https://kokosaburak.cz",
};

const SPONSORS =
  process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE === "playordie_official"
    ? play_or_die_sponsors
    : pulsewave_sponsors;

export function SponsoredBy() {
  const t = useTranslations("Navbar");

  return (
    <section id="partners" className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography
          variant="h6"
          className={`mb-8 text-${SECONDARY_COLOR}`}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {t("partners").toUpperCase()}
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((sponsor, key) => (
            <div
              className="flex justify-center items-center h-40 w-40"
              key={key}
            >
              <a
                target="_blank"
                href={links[sponsor] ?? "#"}
                className={links[sponsor] == null ? "pointer-events-none" : ""}
                aria-disabled={links[sponsor] == null}
                tabIndex={links[sponsor] == null ? -1 : undefined}
              >
                <Image
                  width={256}
                  height={256}
                  key={key}
                  src={`/sponsors/${sponsor}/white.png`}
                  alt={sponsor}
                  className="w-30 object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
