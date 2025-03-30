import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import {
  IconUsersGroup,
  IconLibraryPhoto,
  IconInfoSquareRoundedFilled,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";
import {
  PRIMARY_COLOR_RAW,
  SECONDARY_COLOR_RAW,
  TICKETS_LINK,
} from "@/constants";
import { h } from "framer-motion/dist/types.d-B50aGbjN";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  blank?: boolean;
}

function NavItem({ children, href, blank }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={blank ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium scroll-smooth"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const t = useTranslations("Navbar");

  const nav_menu = [
    {
      name: t("info"),
      icon: IconInfoSquareRoundedFilled,
      href: "#info",
    },
    {
      name: t("contact"),
      icon: UserCircleIcon,
      href: "#contact",
    },
    {
      name: t("gallery"),
      icon: IconLibraryPhoto,
      href: "https://www.instagram.com/pulsewave_presents/",
    },
    {
      name: t("partners"),
      icon: IconUsersGroup,
      href: "#partners",
    },
  ];

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      className={`fixed top-0 z-50 border-0`}
      style={{ background: isScrolling ? PRIMARY_COLOR_RAW : "transparent" }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex px-4">
        <div className="container flex items-center justify-between mx-auto">
          <div className="relative w-40 h-10 overflow-hidden flex justify-center items-center">
            <Image
              width={1200}
              height={1200}
              src="/media/Pulsewave-Logo-Transparent-BG.png"
              alt="Pulsewave"
              className="absolute w-40 h-full object-cover"
            />
          </div>
          <ul
            className={`ml-10 hidden items-center gap-6 lg:flex`}
            style={{ color: isScrolling ? SECONDARY_COLOR_RAW : "white" }}
          >
            {nav_menu.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href} blank={href?.startsWith("http")}>
                <Icon className="h-5 w-5" />
                <span>{name}</span>
              </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <a href={TICKETS_LINK} target="_blank">
            <Button
              variant="outlined"
                style={{
                  color: SECONDARY_COLOR_RAW,
                  borderColor: SECONDARY_COLOR_RAW,
                }}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t("tickets")}
              </Button>
            </a>
          </div>

          <IconButton
            variant="text"
            style={{ color: isScrolling ? SECONDARY_COLOR_RAW : "white" }}
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <div className="hidden lg:flex align-middle justify-center mx-4">
          <LanguageSwitcher dark={isScrolling} />
        </div>
      </div>

      <Collapse open={open}>
        <div
          className="container mx-auto mt-4 rounded-lg px-6 py-5"
          style={{
            backgroundColor: isScrolling ? "transparent" : PRIMARY_COLOR_RAW,
          }}
        >
          <ul className="flex flex-col gap-4 text-cloudy content-center">
            {nav_menu.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href} blank={href?.startsWith("http")}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a href={TICKETS_LINK} target="_blank">
              <Button
              variant="outlined"
                style={{
                  color: SECONDARY_COLOR_RAW,
                  borderColor: SECONDARY_COLOR_RAW,
                }}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t("tickets")}
              </Button>
            </a>
            <LanguageSwitcher dark />
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
