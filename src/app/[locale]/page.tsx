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
import { GlareCard } from "@/components/aceternity/glare-card";
import Image from "next/image";
import { TICKETS_LINK } from "@/constants";

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
          <SponsoredBy />
          <AboutUs />
          <div className="flex align-middle justify-center">
          <a href={TICKETS_LINK} target="_blank">

            <GlareCard>
                <Image
                  width={1200}
                  height={1200}
                  src="/media/Argy-banner-web.png"
                  alt="argy"
                  className="absolute w-400 h-full object-cover"
                />
            </GlareCard>
            </a>

          </div>
          <Footer />
        </TracingBeam>
      </AuroraBackground>
    </>
  );
}
