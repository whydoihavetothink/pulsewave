"use client";

import { TEXT_COLOR } from "@/constants";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import { useTranslations } from "next-intl";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Hieu Bui", "hbuitrung@gmail.com", "+420 777 858 223"];

export function Footer() {
  const t = useTranslations("Navbar");

  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <ul className="md:flex md:justify-center md:my-4 w-max mx-auto md:items-center md:gap-4">
            <Typography
              id="contact"
              variant="small"
              color="white"
              className="font-normal !text-gray-700"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t("contact")}:
            </Typography>
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <a
              href="https://www.instagram.com/pulsewave_presents/"
              target="_blank"
            >
              <IconButton
                size="sm"
                color={TEXT_COLOR}
                variant="text"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
        <Typography
          color="blue"
          className="text-center mt-12 font-normal !text-gray-700"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Pulsewave &copy; {CURRENT_YEAR}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
