import Buttons from "@/components/common/Buttons";
import React from "react";

function SuccessRate() {
  return (
    <section>
      <div className="container my-32">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-xl font-bold font-syne max-w-4xl">
            We make your{" "}
            <span className="inline-flex">
              {" "}
              <img src="/images/star2.png" alt="" />
            </span>{" "}
            business stand out{" "}
          </h2>
          <p className="text-sm max-w-[380px]">
            We work closely with our clients to know their objectives, target
            audience, unique needs, and practical design solutions.
          </p>
        </div>
        <div>
          <div className="relative border-[5px] border-black rounded-3xl">
            <img className="rounded-2xl" src="/images/video-bg.png" alt="" />
            <span role="button" className="absolute top-1/2 left-[40%]">
              <Buttons
                className="pl-10 pr-2 flex items-center gap-5"
                name="Play"
                icon="/images/icons8-play-button-30.png"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessRate;
