"use client";
import ContactMedia from "@/components/global/footer/ContactMedia";
import Link from "next/link";
import React from "react";
import TextFild from "../../common/TextFild";
import Buttons from "@/components/common/Buttons";
import TextArea from "@/components/common/TextArea";

const contractProps = [
  {
    title: "Give us a call:",
    value: "(123) 456-7890",
  },
  {
    title: "Send us an email:",
    value: "info@mthemeus.com",
  },
];

const socialContract = [
  {
    icons: [
      {
        icon1: "/images/icons8-twitter-32.png",
        icon2: "/images/icons8-twitter-24.png",
      },
    ],
    link: "https://twitter.com/",
  },
  {
    icons: [
      {
        icon1: "/images/icons8-fb-24 (1).png",
        icon2: "/images/icons8-fb-24.png",
      },
    ],
    link: "https://www.facebook.com/",
  },
  {
    icons: [
      {
        icon1: "/images/icons8-instagram-30.png",
        icon2: "/images/icons8-instagram-30 (1).png",
      },
    ],
    link: "https://www.instagram.com/",
  },
  {
    icons: [
      {
        icon1: "/images/icons8-linkedin-30 (1).png",
        icon2: "/images/icons8-linkedin-30.png",
      },
    ],
    link: "https://www.linkedin.com/",
  },
];

function Footer() {
  return (
    <section className="bg-black">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between gap-5 md:py-32 py-20">
          <div className="lg:w-[54%]">
            <h2 className="lg:text-xl md:text-4xl text-6xl text-gray-200 font-bold font-syne lg:max-w-3xl mb-6 max-w-md m-auto text-center lg:text-left">
              Let's start a{" "}
              <span className="hidden md:inline">
                {" "}
                <img
                  className=" max-w-[40px] lg:max-w-none hidden md:inline"
                  src="/images/star2.png"
                  alt=""
                />
              </span>{" "}
              project together{" "}
            </h2>
            <p className="md:text-md text-sm text-center lg:text-left text-gray-200 md:mb-12 mb-5">
              We work closely with our clients to understand their objectives,
              target audience, and unique needs. We use our creative skills to
              translate these requirements and practical design solutions.
            </p>
            <div className="flex lg:justify-between justify-center items-center text-center lg:text-left">
              <div className="">
                <div className="flex flex-col gap-3 mb-12">
                  {contractProps.map(({title, value}, index) => (
                    <div key={index}>
                      <h4 className="text-md text-praimary">{title}</h4>
                      <h4 className="text-md text-gray-200">{value}</h4>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 outlineoutline-white">
                  {socialContract.map(({icons, link}, index) => (
                    <Link
                      href={link}
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration={`${index + 0}000`}
                      target="_blank"
                    >
                      {icons.map(({icon1, icon2}, index) => (
                        <ContactMedia icon1={icon1} icon2={icon2} key={index} />
                      ))}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden lg:inline">
                <img
                  className="line-movement"
                  src="/images/shape1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[41%]">
            <h2 className="text-3xl font-syne font-bold mb-6 text-gray-200">
              Send us a message
            </h2>
            <div className="flex flex-col gap-6 mb-8">
              <TextFild placeholder="Your name" type="text" />
              <TextFild placeholder="Your email address" type="email" />
              <TextFild placeholder="+088-234-6849" type="text" />
              <TextArea placeholder="Write your message here..." />
            </div>
            <Link href="/">
              <Buttons
                className="pr-1"
                name="Send message"
                icon="/images/arrow-right3.svg"
              />
            </Link>
          </div>
        </div>
        <hr className="border border-gray-500" />
        <div className="flex lg:flex-row flex-col justify-between items-center gap-5 lg:py-9 p-[30px]">
          <img src="/images/logo.svg" alt="" />
          <p className="text-sm text-center text-gray-600">
            © Copyright 2023, All Rights Reserved by Mthemeus
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
