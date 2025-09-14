import React from "react";
import { redBullFlavorEditions } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FlavourSlider = () => {
  useGSAP(() => {
    // Calculate total width to scroll
    const totalCards = redBullFlavorEditions.length;
    const cardWidth = 400;
    const totalWidth = (totalCards - 1) * cardWidth;

    // Horizontal scroll animation
    gsap.to(".flavours-container", {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".flavour-section",
        start: "top -30%",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false,
        

      }
    });

    // Individual card animations
    gsap.fromTo(".flavour-card", 
      {
        opacity: 0,
        scale: 0.8,
        rotateY: 45
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".flavour-section",
          start: "top 80%",
        }
      }
    );
  });

  return (
    <div className="slider-wrapper w-full h-screen overflow-hidden">
      <div className="flavours-container flex items-center h-full">
        {redBullFlavorEditions.map((flavour, index) => (
          <div
            key={flavour.name}
            className="flavour-card flex-none w-[550px] h-[80vh] mx-4 relative rounded-lg overflow-hidden shadow-xl"
            style={{ 
              transform: `rotate(${flavour.rotation || '0deg'})`,
              transformOrigin: 'center center'
            }}
          >
            {/* Background Image */}
            <img
              src={`/imges/${flavour.color}-bg.png`}
              alt={`${flavour.name} background`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Bottle Image */}
            <img
              src={`/imges/${flavour.color}-bottle.png`}
              alt={`${flavour.name} bottle`}
              className="absolute inset-0 w-full h-full object-contain z-10 p-6"
            />

            {/* Flavor info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
              <h3 className="text-white text-center font-bold text-xl uppercase tracking-wide mb-2">
                {flavour.name}
              </h3>
              {/* <p className="text-white/80 text-sm">
                {flavour.description || "Premium Energy Drink"}
              </p> */}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourSlider;
