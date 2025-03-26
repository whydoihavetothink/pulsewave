"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
        className="h-full w-full object-center object-cover absolute hidden lg:block"
      >
        <source src="media/maison.webm" type="video/webm" />
        <source src="media/maison.mp4" type="video/mp4" />
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
        <source src="media/maison-phone.mp4" type="video/mp4" />
        <source src="media/maison-phone.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <div className="relative w-full h-48 overflow-hidden flex justify-center items-center">
            <Image
              width={1200}
              height={1200}
              src="/media/Pulsewave-Logo-Transparent-BG-White-Shadow.png"
              alt="Pulsewave"
              className="absolute w-400 h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="gradient"
              color="white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Get started
            </Button>

            <div id="partners"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
