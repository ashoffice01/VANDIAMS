import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import ParallaxSection from "./components/ParallaxSection";
import Collections from "./components/Collections";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ParallaxSection />
      <Collections />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}
