"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import {useState, CSSProperties} from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Experiences() {
  return (
    <section className="bg-black">
      <Marquee speed={120}>
        <div className="flex py-5 items-center">
          <h3 className="md:text-lg text-7xl font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <img
            className="w-11 h-11 animate-spin"
            src="/images/star2.png"
            alt=""
          />
          <h3 className="md:text-lg text-7xl font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <img
            className="w-11 h-11 animate-spin"
            src="/images/star2.png"
            alt=""
          />
          <h3 className="md:text-lg text-7xl font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <img
            className="w-11 h-11 animate-spin"
            src="/images/star2.png"
            alt=""
          />
          <h3 className="md:text-lg text-7xl font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <img
            className="w-11 h-11 animate-spin"
            src="/images/star2.png"
            alt=""
          />
          <h3 className="md:text-lg text-7xl font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <img
            className="w-11 h-11 animate-spin"
            src="/images/star2.png"
            alt=""
          />
          <h3 className="md:text-lg text-7xl font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <img
            className="w-11 h-11 animate-spin"
            src="/images/star2.png"
            alt=""
          />
          <h3 className="md:text-lg text-7xl font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <img
            className="w-11 h-11 animate-spin"
            src="/images/star2.png"
            alt=""
          />
        </div>
      </Marquee>
    </section>
  );
}

export default Experiences;
