import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import React from "react";

const MessageSection = () => {

    useGSAP(()=>{
        const firstMsgSplit=SplitText.create(".msg-part-1",{
            type:"words",
        });
        const secondMsgSplit=SplitText.create(".msg-part-1",{
            type:"words",
        });
        const thirdMsgSplit=SplitText.create(".msg-part-1",{
            type:"words,lines",
            linesClass:""
        })

    })
  return (
    <section className="message-content bg-main-bg">
      <div className="container mx-auto flex justify-center items-center py-28 relative">
        <div className="w-full h-full flex flex-col gap-8 text-center">
          
          {/* Part 1 */}
          <div className="msg-part-1 text-yellow-400 text-3xl md:text-5xl font-bold uppercase tracking-wide">
            <h1>Fuel your fire.</h1>
          </div>

          {/* Part 2 */}
          <div className="msg-part-2 text-red-500 text-3xl md:text-5xl font-bold italic">
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
