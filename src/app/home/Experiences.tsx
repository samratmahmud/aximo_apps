"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import {useState, CSSProperties} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {Audio} from "react-loader-spinner";
import LoadingSpin from "react-loading-spin";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Experiences() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <section className="bg-black">
      <Marquee speed={120}>
        <div className="flex py-5 items-center">
          <h3 className="text-lg font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <span className="inline-flex">
            {" "}
            <img
              className="w-11 h-11 animate-spin"
              src="/images/star2.png"
              alt=""
            />
          </span>
          <h3 className="text-lg font-bold text-praimary font-syne uppercase mx-6">
            LET'S CREATE NEW EXPERIENCES
          </h3>
          <span className="inline-flex">
            {" "}
            <img
              className="w-11 h-11 animate-spin"
              src="/images/star2.png"
              alt=""
            />
          </span>
        </div>
      </Marquee>
    </section>
  );
}

export default Experiences;
