"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SECONDARY_COLOR, SECONDARY_COLOR_RAW, TICKETS_LINK } from "@/constants";

function Hero() {
  const t = useTranslations("Navbar");

  return (
    <div className="relative min-h-screen w-full bg-[url('/media/Argy-banner-web.png')] bg-cover bg-no-repeat bg-top">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
        className="h-full w-full object-center object-cover absolute hidden lg:block"
      >
        <source src="media/ARGY-PROMO-V3-compressed-2.mp4" type="video/mp4" />
        <source src="media/ARGY-PROMO-V3-compressed-2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
        className="h-full w-full object-center object-cover absolute block lg:hidden"
      >
        <source src="media/ARGY-PROMO-V3-mobile.mp4" type="video/mp4" />
        <source src="media/ARGY-PROMO-V3-mobile.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center" style={{ paddingTop: "14rem" }}>
            <a href={TICKETS_LINK} target="_blank">
              <Button
                className={`font-bold text-lg`}
                size="lg"
                variant="outlined"
                style={{ color: SECONDARY_COLOR_RAW, borderColor: SECONDARY_COLOR_RAW }}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t("tickets")}
              </Button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
