"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "../components/about-card";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";

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

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About Pulsewave
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Us?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        <TextGenerateEffect words="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus nisi enim, molestie vitae volutpat eu, congue ac ipsum.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Praesent blandit id arcu bibendum pulvinar. Vivamus a elit et augue dapibus pretium.
        Suspendisse potenti. Aliquam aliquet non est in pharetra.
        Phasellus libero ipsum, molestie vel vestibulum id, accumsan semper nisl."/>

      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
    </section>
  );
}

export default AboutEvent;
