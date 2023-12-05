"use client";
import SocialMedia from "@/components/common/SocialMedia";
import React from "react";

const peopleImages = [
  {
    thumbnail: "/images/team1.png",
    name: "Andrew Mark",
    describtion: "Creative Director",
    socialSite: [
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
    ],
  },
  {
    thumbnail: "/images/team2.png",
    name: "Jack Taylor",
    describtion: "Senior Designer",
  },
];

function Peoples() {
  const [tab, setTab] = React.useState(0);

  return (
    <section>
      <div className="container">
        <h2 className="text-xl font-bold font-syne max-w-4xl m-auto text-center mb-20">
          We have a team of creative people{" "}
          <span className="inline-flex">
            {" "}
            <img src="/images/star2.png" alt="" />
          </span>
        </h2>
        <div className="flex gap-6">
          {peopleImages.map(
            ({thumbnail, name, describtion, socialSite}, index) => (
              <div key={index}>
                <div className="border-[5px] border-black rounded-2xl overflow-hidden mb-6">
                  <img
                    className="scale-100 hover:scale-105 duration-500"
                    src={thumbnail}
                    alt=""
                  />
                  <div className="relative z-10 flex">
                    {socialSite?.map(({icons, link}, index) => (
                      <SocialMedia
                        handelChange={() => setTab(index)}
                        key={index}
                        icons={icons}
                        link={link}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-base font-bold font-syne mb-2 text-center">
                  {name}
                </div>
                <div className="text-md text-center">{describtion}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Peoples;
