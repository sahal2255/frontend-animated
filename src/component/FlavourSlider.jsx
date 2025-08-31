import React from "react";
import { redBullFlavorEditions } from "../constants";
import { useGSAP } from "@gsap/react";

const FlavourSlider = () => {
  useGSAP(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:'.flvour-section',
        start:"2% top"
      }
    })
  })
  return (
    <div className="slider-wrapper w-full overflow-x-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 px-4 py-8">
        {redBullFlavorEditions.map((flavour) => {
          return (
            <div
              key={flavour.name}
              className={`relative z-30 w-full sm:w-full md:w-[60vw] lg:w-[30vw] h-80 md:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden ${flavour.rotation}`}
            >
              {/* Background Image */}
              <img
                src={`/imges/${flavour.color}-bg.png`}
                alt={`${flavour.name} background`}
                className="flavour-background absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              
              {/* Bottle Image */}
              <img 
                src={`/imges/${flavour.color}-bottle.png`} 
                alt={`${flavour.name} bottle`} 
                className="drinks absolute inset-0 w-full h-full object-contain z-10 p-4"
              />
              
              {/* Flavor name overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide drop-shadow-lg">
                  {flavour.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlavourSlider;
