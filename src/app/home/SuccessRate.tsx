"use client";
import Buttons from "@/components/common/Buttons";
import React from "react";
import CountUp from "react-countup";

const ratings = [
  {
    number: <CountUp start={0} end={15} />,
    value: "+",
    title: "Years of experience",
  },
  {
    number: <CountUp start={0} end={120} />,
    value: "k",
    title: "Successful projects",
  },
  {
    number: <CountUp start={0} end={100} />,
    value: "%",
    title: "Client satisfaction rate",
  },
];

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
        <div className="flex justify-between gap-6">
          <div className="relative border-[5px] border-black rounded-3xl w-2/3">
            <img
              className="rounded-2xl h-full w-full"
              src="/images/video-bg.png"
              alt=""
            />
            <span role="button" className="absolute top-1/2 left-[40%]">
              <Buttons
                className="pl-10 pr-2 flex items-center gap-5"
                name="Play"
                icon="/images/icons8-play-button-30.png"
              />
            </span>
          </div>
          <div className="bg-black rounded-3xl w-[33%] flex flex-col gap-5 p-[30px]">
            {ratings.map(({number, title, value}, index) => (
              <div key={index} className="flex flex-col gap-1 group">
                <div className="flex gap-1 justify-center">
                  <div className="text-xl font-bold text-center text-praimary font-syne">
                    {number}
                  </div>
                  <span className="text-xl font-bold text-center text-praimary font-syne">
                    {value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-200 text-center mb-6 last:mb-0">
                  {title}
                </div>
                <hr className="border border-[#333] group-last:hidden" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessRate;
