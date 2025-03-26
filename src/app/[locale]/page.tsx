// components
import { Navbar, Footer } from "../../components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-us";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { locales } from "@/i18n/config";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Portfolio() {
  return (
    <>
    <Navbar />
    <Hero />
    <TracingBeam>
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
    </TracingBeam>

    </>
  );
}
