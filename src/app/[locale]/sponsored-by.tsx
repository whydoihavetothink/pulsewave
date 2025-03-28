"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import { SECONDARY_COLOR } from "@/constants";

const SPONSORS = [
  "winelife",
  "heineken",
  "belvedere",
  "spvg",
  "don_julio",
  "rtp_power",
  "1er",
  "desperado",
  "ploom",
  "jagermaister",
  "fxcg",
  "casablanca",
  "hedin_automotive",
  "kaufmann"
];

export function SponsoredBy() {
  const t = useTranslations("Navbar");

  return (
    <section className="py-8 px-8 lg:py-20">
      <div id="info" className="container mx-auto text-center">
        <Typography variant="h6" className={`mb-8 text-${SECONDARY_COLOR}`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {t("partners").toUpperCase()}
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((sponsor, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={`/sponsors/${sponsor}/white.png`}
              alt={sponsor}
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
