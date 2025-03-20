"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="" 
        className="h-full w-full object-center object-cover absolute hidden lg:block"
      >
        <source src="media/maison.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="" 
        className="h-full w-full object-center object-cover absolute block lg:hidden"
      >
        <source src="media/maison-phone.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            29-31 August @ New York
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl lg:text-9xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Pulsewave
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            subtext
          </Typography>
          <div className="flex items-center gap-4">
            <Button variant="gradient" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Get started
            </Button>
            <IconButton className="rounded-full bg-white p-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <PlayIcon className="h-4 w-4 text-gray-900" />
            </IconButton>

            <div id="partners"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
