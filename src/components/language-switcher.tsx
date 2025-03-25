"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales, type Locale } from "@/i18n/config";
import { IconWorld } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface LanguageSwitcherProps {
  dark?: boolean;
}

export const LanguageSwitcher = ({ dark = false }: LanguageSwitcherProps) => {
  const current_locale = useLocale() as Locale;
  const router = useRouter();

  function handleLocaleChange(value: string, days: number): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `locale=${value};expires=${expires.toUTCString()};path=/`;
    router.refresh(); // window.location.reload();
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className="p-1 !h-10 !w-10 hover:bg-gray-500"
        >
          <IconWorld
            stroke={1}
            className={`!h-9 !w-9 ${dark ? "stroke-black" : "stroke-white"}`}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-40 p-2 space-y-1">
        <div className="text-md font-medium text-gray-700">Language</div>
        <div className="border-t border-gray-200 my-1" />

        {locales.map((locale: string) => (
          <button
            key={locale}
            className={`w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-200 ${
              locale === current_locale ? "font-semibold text-blue-500" : ""
            }`}
            onClick={() => handleLocaleChange(locale, 30)}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
