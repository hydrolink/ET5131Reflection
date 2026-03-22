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

        <SectionWrapper id="about" maxWidth="max-w-6xl">
          <AboutSection />
        </SectionWrapper>

        <SectionWrapper id="efforts" maxWidth="max-w-6xl">
          <EffortsSection />
        </SectionWrapper>

        <SectionWrapper id="authenticity" maxWidth="max-w-6xl">
          <AuthenticitySection />
        </SectionWrapper>

        <SectionWrapper id="takeaways" maxWidth="max-w-6xl">
          <TakeawaysSection />
        </SectionWrapper>

        <SectionWrapper id="timeline" maxWidth="max-w-6xl">
          <TimelineSection />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
