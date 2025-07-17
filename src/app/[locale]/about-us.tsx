"use client";

import { Button, Typography } from "@material-tailwind/react";
import { TEXT_COLOR } from "@/constants";
import { useT } from "@/lib/utils";
import { useLocale } from "next-intl";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutUs() {
  const t = useT("About Us");
  const locale = useLocale();
  const pdfUrl = `/media/argy-info/${locale}.pdf`;

  return (
    <section id="info" className="container mx-auto flex flex-col items-center px-7 py-10">
        <a href={pdfUrl} className="text-white my-40" target="_blank">
          <Button size="lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <span className="text-lg">argy-info</span>
          </Button>
        </a>

      <Typography
        variant="h3"
        className="text-center"
        color={TEXT_COLOR}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {t("why us").toUpperCase()}
      </Typography>
      {[1, 2, 3, 4].map((idx) => (
        <Typography
          key={idx}
          variant="lead"
          className="mt-2 lg:max-w-4xl mb-8 w-full text-left font-normal"
          color={TEXT_COLOR}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {t(`content.${idx}`)}
        </Typography>
      ))}
    </section>
  );
}

export default AboutUs;

/**
 *       <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div>
 * 
 */
