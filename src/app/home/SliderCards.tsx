"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderPage = [
  {
    title: "Product Design",
    contain:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    className: "bg-slide1 bg-cover bg-no-repeat",
  },
  {
    title: "Logo and Branding",
    contain:
      "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    className: "bg-slide2 bg-cover bg-no-repeat",
  },
  {
    title: "App UI/UX Design",
    contain:
      "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
    className: "bg-slide3 bg-cover bg-no-repeat",
  },
  {
    title: "Packaging Design",
    contain:
      "Creating packaging solutions for products that not only protect attract customers on store.",
    className: "bg-slide4 bg-cover bg-no-repeat",
  },
];

function SliderCards() {
  return (
    <section className="bg-black py-32">
      <div className="container">
        <h2 className="text-xl text-gray-200 font-bold font-syne max-w-4xl m-auto text-center mb-20">
          Have a wide range of creative projects{" "}
          <span className="inline-flex">
            {" "}
            <img src="/images/star2.png" alt="" />
          </span>
        </h2>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={2}
          slidesToScroll={1}
        >
          {sliderPage.map(({title, contain, className}, index) => (
            <div
              key={index}
              className="overflow-hidden border-[5px] border-gray-200 rounded-[20px]"
            >
              <div
                className={`p-6 scale-100 hover:scale-105 duration-500 w-full aspect-square ${className} flex flex-col justify-end`}
              >
                <h3 className="text-base text-gray-200 font-bold font-syne mb-2.5">
                  {title}
                </h3>
                <div className="flex flex-row gap- justify-between">
                  <p className="text-gray-200 text-sm">{contain}</p>
                  <Link href="/">
                    <img src="/images/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderCards;
