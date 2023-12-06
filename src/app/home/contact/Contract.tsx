"use client";
import ContactMedia from "@/app/home/contact/ContactMedia";
import Link from "next/link";
import React from "react";
import TextFild from "./TextFild";

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

function Contract() {
  return (
    <section className="bg-black py-32">
      <div className="container flex justify-between gap-5">
        <div className="w-[54%]">
          <h2 className="text-xl text-gray-200 font-bold font-syne max-w-3xl mb-6">
            Let's start a{" "}
            <span className="inline-flex">
              {" "}
              <img src="/images/star2.png" alt="" />
            </span>{" "}
            project together{" "}
          </h2>
          <p className="text-md text-gray-200 mb-12">
            We work closely with our clients to understand their objectives,
            target audience, and unique needs. We use our creative skills to
            translate these requirements and practical design solutions.
          </p>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex flex-col gap-3 mb-16">
                {contractProps.map(({title, value}, index) => (
                  <div key={index}>
                    <h4 className="text-md text-praimary">{title}</h4>
                    <h4 className="text-md text-gray-200">{value}</h4>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {socialContract.map(({icons, link}, index) => (
                  <Link href={link} key={index}>
                    {icons.map(({icon1, icon2}, index) => (
                      <ContactMedia icon1={icon1} icon2={icon2} key={index} />
                    ))}
                  </Link>
                ))}
              </div>
            </div>
            <div className="">
              <img src="/images/shape1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[41%]">
          <h2 className="text-3xl font-syne font-bold mb-6 text-gray-200">
            Send us a message
          </h2>
          <div className="flex flex-col gap-6">
            <TextFild placeholder="Your name" type="text" />
            <TextFild placeholder="Your email address" type="email" />
            <TextFild placeholder="+088-234-6849" type="text" />
            <textarea
              className="bg-transparent focus:outline border border-gray-200 min-h-[150px] rounded-[20px] focus:border-praimary focus:border py-3.5 px-6 text-xs font-bold placeholder:text-gray-400 text-gray-400 w-full"
              placeholder="Write your message here..."
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contract;
