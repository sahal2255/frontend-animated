import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/all";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import React from "react";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".msg-part-1", {
      type: "words",
    });
    const secondMsgSplit = SplitText.create(".msg-part-2", {
      type: "words",
    });
    const thirdMsgSplit = SplitText.create(".msg-part-3", {
      type: "words",
    });
    let thirdMsgTl=gsap.timeline()

    gsap.to(firstMsgSplit.words, {
      color: "#FFD300",
      ease: "power1.in",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        scrub: true,
        end: "30% center",
        // markers: true,
      },
    });
    gsap.to(secondMsgSplit.words, {
      color: "#E21B4D",
      textShadow: "0px 0px 15px #E21B4D", // glowing red
      ease: "power1.in",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".msg-part-2",
        start: "top center",
        scrub: true,
        end: "30% center",
        // markers: true
      },
    });
    thirdMsgTl.from(thirdMsgSplit.words,{
      xPercent:(i,target)=>(i%2===0 ? -100:100),
      opacity:0,
      stagger:1,
      ease:"power2.out",
      color:"#FFD300",
      scrollTrigger:{
        trigger:'.msg-part-3',
        start:"top 80%",
        end:"bottom 60%",
        scrub:true
      }
,
    })
  });
  return (
    <section className="message-content bg-main-bg">
      <div className="container mx-auto flex justify-center items-center py-28 relative">
        <div className="w-full h-full flex flex-col gap-8 text-center">
          {/* Part 1 */}
          <div className="msg-part-1  text-3xl md:text-5xl font-bold uppercase tracking-wide">
            <h1>Fuel your fire.</h1>
          </div>

          {/* Part 2 */}
          <div className="msg-part-2 text-3xl md:text-5xl font-bold italic">
            <h1>Chase the thrill.</h1>
          </div>

          {/* Part 3 */}
          <div className="msg-part-3 text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            <h1>Red Bull gives you wings.</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
