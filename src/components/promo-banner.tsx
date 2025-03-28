"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";

const PromoBanner: React.FC = () => {
  return (
    <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5">
      <Typography
        className="text-2xl md:text-3xl text-center font-bold"
        color="white"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Join now and get 30% OFF!
      </Typography>
      <Typography
        color="white"
        className="md:w-7/12 text-center my-3 !text-base"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Don&apos;t miss out on this exclusive offer that will end soon.
      </Typography>
      <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
        <Button
          color="white"
          size="md"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Buy Ticket
        </Button>
      </div>
    </div>
  );
};

export default PromoBanner;
