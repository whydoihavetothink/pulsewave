// components
import { Navbar, Footer } from "../../components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutUs from "./about-us";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { locales } from "@/i18n/config";
import { AuroraBackground } from "@/components/aceternity/aurora-background";
import EventCards from "./event-cards";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AuroraBackground showRadialGradient>
        <TracingBeam>
          <AboutUs />
          <EventCards />
          <SponsoredBy />
          <Footer />
        </TracingBeam>
      </AuroraBackground>
    </>
  );
}
