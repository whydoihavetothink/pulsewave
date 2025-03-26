import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "../../components";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS Tailwind Event Landing Page",
  description:
    "Introducing Tailwind Event Landing Page, a dynamic and visually appealing landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
<<<<<<< HEAD:src/app/layout.tsx
  const locale = await getLocale();
=======

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
>>>>>>> 87c142b (static lang pages):src/app/[locale]/layout.tsx

  return (
    <html lang={locale}>
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
      <NextIntlClientProvider>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </NextIntlClientProvider>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
