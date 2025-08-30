import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {  ScrollTrigger } from "gsap/all";
import SplitText from "gsap/SplitText";
// import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)

const FlavourTitle = () => {
  // const containerRef=useRef()
  useGSAP(() => {
    
    const firstTextSplit = SplitText.create(".first-text-split", {
      type: "chars",
    });
    const secondTextSplit=SplitText.create('.second-text-split',{
      type:"chars",
    })
    gsap.set(firstTextSplit.chars, { yPercent: 200, opacity: 0 });
  gsap.set(secondTextSplit.chars, { yPercent: 200, opacity: 0 });
    gsap.to(firstTextSplit.chars, {
      yPercent: 0,
      opacity:1,
      stagger:0.02,
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:".flavour-section",
        start:"top 30%",
        markers:true,
      }
    })
    gsap.to(".flavour-highlited",{
      duration:1,
      clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger:{
        trigger:".flavour-section",
        start:"top 20%",
      }
    })
    gsap.to(secondTextSplit.chars,{
      yPercent:0,
      opacity:1,
      stagger:0.02,
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:'.flavour-section',
        start:'top 30%',
        markers:true

      }
    })
    
  });
  return (
    <div  className=" flavour-title space-y-6 general-title col-center h-full 2xl:gap-32 xl:gap-24 text-center">
      <div className="overflow-hidden py-3">
        <h1 className="first-text-split  text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
          Choose Your
        </h1>
      </div>

      <div 
        className="relative inline-block flavour-highlited"
        style={{ clipPath: "polygon(50% 0%, 50% 0, 50% 100%, 50% 100%)" }}
      >
        <div className="bg-[#8b4513] px-4 py-2 inline-block text-white font-black text-4xl md:text-5xl uppercase tracking-tight skew-x-[-10deg] flavour-text">
          Flavor of Power
        </div>
      </div>

      <div>
        <h1 className="second-text-split  text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
          Fuel the Rush.
        </h1>
      </div>
    </div>
  );
};

export default FlavourTitle;
