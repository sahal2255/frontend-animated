import gsap from "gsap";
import Navbar from "./component/Navbar";
import HeroSection from "./section/HeroSection";
import { ScrollTrigger,ScrollSmoother } from "gsap/all";
import MessageSection from "./section/MessageSection";
import FlavourSection from "./section/FlavourSection";
import TestimonialSection from "./section/TestimonialSection";
// import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavourSection />
        </div>
      </div>

      {/* <TestimonialSection /> */}
      {/* <div className='h-dvh border-red-400 border-2'>

      </div> */}
    </main>
  );
};

export default App;
