import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
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
import { TICKETS_LINK } from "@/constants";

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
    },
    {
      name: t("gallery"),
      icon: IconLibraryPhoto,
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
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex px-4">
        <div className="container flex items-center justify-between mx-auto">
          <Typography
            color={isScrolling ? "blue-gray" : "white"}
            className="text-lg font-bold"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Pulsewave
          </Typography>
          <ul
            className={`ml-10 hidden items-center gap-6 lg:flex ${
              isScrolling ? "text-gray-900" : "text-white"
            }`}
          >
            {nav_menu.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                <span>{name}</span>
              </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <a href={TICKETS_LINK} target="_blank">
              <Button
                color={isScrolling ? "gray" : "white"}
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
            color={isScrolling ? "gray" : "white"}
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
        <div className="hidden lg:flex align-middle justify-center">
        <LanguageSwitcher dark={isScrolling}/>
        </div>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900 content-center">
            {nav_menu.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a href={TICKETS_LINK} target="_blank">
              <Button
                color="gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t("tickets")}
              </Button>
            </a>
          <LanguageSwitcher dark/>

          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
