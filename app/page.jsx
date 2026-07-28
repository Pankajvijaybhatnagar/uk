import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgramHighlights from "@/components/ProgramHighlights";
import GuideProfile from "@/components/GuideProfile";
import Schedule from "@/components/Schedule";
import Venue from "@/components/Venue";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import EventGallery from "@/components/Events";
import Conventary from "@/components/Conventary";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <About />
        <ProgramHighlights />
        {/* <Conventary/> */}
        <EventGallery/>
        <GuideProfile />
        {/* <Schedule /> */}
        <Venue />
        <Registration />
      </main>
    
    </>
  );
}
