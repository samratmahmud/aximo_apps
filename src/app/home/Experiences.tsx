"use client";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function Experiences() {
  return (
    <section className="bg-black md:mb-32 mb-20">
      <ScrollContainer className="scroll-container">
        <div className="flex py-5 items-center">
          <h3 className="text-lg font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <span className="inline-flex">
            {" "}
            <img className="w-11 h-11" src="/images/star2.png" alt="" />
          </span>
        </div>
      </ScrollContainer>
    </section>
  );
}

export default Experiences;
