import Hero from "@/components/sections/Hero";
import QuickInfo from "@/components/sections/QuickInfo";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import ServiceArea from "@/components/sections/ServiceArea";
import HowItWorks from "@/components/sections/HowItWorks";
import Faq from "@/components/sections/Faq";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <ServiceArea />
      <HowItWorks />
      <Faq />
      <ContactCta />
    </>
  );
}