import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionWrapper from "./components/SectionWrapper";
import AboutSection from "./components/AboutSection";
import EffortsSection from "./components/EffortsSection";
import AuthenticitySection from "./components/AuthenticitySection";
import TakeawaysSection from "./components/TakeawaysSection";
import TimelineSection from "./components/TimelineSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <SectionWrapper id="about">
          <AboutSection />
        </SectionWrapper>

        <SectionWrapper id="efforts">
          <EffortsSection />
        </SectionWrapper>

        <SectionWrapper id="authenticity">
          <AuthenticitySection />
        </SectionWrapper>

        <SectionWrapper id="takeaways">
          <TakeawaysSection />
        </SectionWrapper>

        <SectionWrapper id="timeline">
          <TimelineSection />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
