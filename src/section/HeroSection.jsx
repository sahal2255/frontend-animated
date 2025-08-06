import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import  SplitText  from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

const HeroSection = () => {
useGSAP(()=>{
  const titleSplit=SplitText.create(".hero-heading",{
    type:'chars',
  });
  const tl=gsap.timeline({
    delay:1,
  })
  tl.to(".hero-content",{
    opacity:1,
    y:0,
    easel:"power1.inOut"
  })
  tl.from(titleSplit.chars, {
  opacity: 0,
  y: 50,
  stagger: 0.05,
  ease: "power2.out",
});
})
  
  return (
    <section className="relative bg-main-bg h-[100vh] m overflow-hidden">
      <div className="hero-container relative w-full h-full flex items-center justify-center">
        {/* Image */}
        <img
          src="/imges/redbull-nobackground.png"
          alt="hero-image"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-100 object-contain md:scale-125 max-h-[500px] z-10"
        />

        <div className="hero-content absolute -top-1/ left-1/2 -translate-x-1/2 text-center z-20">
          <div className="">
            <h1 className="hero-heading text-3xl md:text-5xl font-extrabold p-5">
              Wings On Demand
            </h1>
          </div>
          <div className="hero-text-scroll"
            style={{clipPath:"polygon(50% 0%, 50% 0, 50% 100%, 50% 100%)"}}
          >
            <div className="p-4">
              <h1>Focus + Fury</h1>
            </div>
          </div>
          <div className="pt-10">

            <h2 className="text-xl text-white font-bold ">Whether you're flying through the skies or grinding through deadlines—Red Bull gives you wings.</h2>
            <div className="hero-button mt-5 h-[60px] text-2xl font-bold ">
              <p className=""> Get Your Wings </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
