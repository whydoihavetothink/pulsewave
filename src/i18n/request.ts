import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/dist/client/components/headers";
import { defaultLocale, Locale, locales } from "./config";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = cookies().get("locale")?.value ?? defaultLocale;

  const validLocale = locales.includes(locale as Locale)
    ? locale
    : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default,
  };
});
