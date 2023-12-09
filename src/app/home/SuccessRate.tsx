"use client";
import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

const ratings = [
  {
    number: <CountUp duration={5} start={0} end={15} />,
    value: "+",
    title: "Years of experience",
  },
  {
    number: <CountUp duration={5} start={0} end={120} />,
    value: "k",
    title: "Successful projects",
  },
  {
    number: <CountUp duration={5} start={0} end={100} />,
    value: "%",
    title: "Client satisfaction rate",
  },
];

function SuccessRate() {
  return (
    <section>
      <div className="container lg:my-32 my-20">
        <div className="flex lg:flex-row flex-col justify-between items-center mb-[60px] lg:mb-20">
          <h2 className="xl:text-xl md:text-4xl text-6xl font-bold font-syne max-w-4xl text-center lg:text-left mb-5">
            We make your{" "}
            <span className="inline-flex">
              {" "}
              <img
                className="w-10 lg:w-12 hidden md:inline"
                src="/images/star2.png"
                alt=""
              />
            </span>{" "}
            <br />
            business stand out{" "}
          </h2>
          <p className="text-sm lg:max-w-[380px] text-center lg:text-left">
            We work closely with our clients to know their objectives, target
            audience, unique needs, and practical design solutions.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-7">
          <div className="relative border-[5px] border-black rounded-3xl lg:w-2/3">
            <img
              className="rounded-2xl h-full w-full"
              src="/images/video-bg.png"
              alt=""
            />
            <Link
              href="https://www.youtube.com/watch?v=Vx2aLNgGoAE"
              target="_blank"
              role="button"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Buttons
                className="pl-10 pr-2 flex items-center gap-5"
                name="Play"
                icon="/images/icons8-play-button-30.png"
              />
            </Link>
          </div>
          <div className="bg-black rounded-3xl lg:w-[33%] flex flex-col gap-5 p-[30px]">
            {ratings.map(({number, title, value}, index) => (
              <div key={index} className="flex flex-col gap-1 group">
                <div className="flex gap-1 justify-center">
                  <div className="xl:text-xl md:text-4xl text-6xl font-bold text-center text-praimary font-syne">
                    {number}
                    <span className="">{value}</span>
                  </div>
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
