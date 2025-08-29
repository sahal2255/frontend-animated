import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FlavourTitle = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".flavour-section", 
        start: "top 50%", 
        toggleActions: "play none none reverse",
        markers:true
      },
    });

    const mainTl=gsap.timeline({
      delay:1,
      scrollTrigger:{
        trigger:'flavour-title',
        start:"top 50%",
        
      }

    })
    tl.to(".flavour-highlited", {
      opacity: 1,
      duration: 0.8,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut",
    }).to(
      ".flavour-title",
      {
        duration: 1,
        ease: "circ.out",
      },
      "-=0.3"
    )
    .fromTo(
      ".flavour-text",   
      { opacity: 0, scale: 0.8, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)" },
      "-=0.3"
    );

    
  });
  return (
    <div className="flavour-title space-y-6 general-title col-center h-full 2xl:gap-32 xl:gap-24 text-center">
      <div className="overflow-hidden py-3">
        <h1 className="sporty-text text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
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
        <h1 className="sporty-text text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
          Fuel the Rush.
        </h1>
      </div>
    </div>
  );
};

export default FlavourTitle;
