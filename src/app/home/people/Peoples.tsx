"use client";
import React from "react";
import PeopleGroup from "./PeopleGroup";

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
    thumbnail: "/images/team3.png",
    name: "Martine Joy",
    describtion: "Project Manager",
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
];

function Peoples() {
  return (
    <section>
      <div className="container mb-24">
        <h2 className="text-xl font-bold font-syne max-w-4xl m-auto text-center mb-20">
          We have a team of creative people{" "}
          <span className="inline-flex">
            {" "}
            <img src="/images/star2.png" alt="" />
          </span>
        </h2>
        <div className="flex gap-5">
          {peopleImages.map(
            ({thumbnail, name, describtion, socialSite}, index) => (
              <PeopleGroup
                key={index}
                thumbnail={thumbnail}
                name={name}
                describtion={describtion}
                socialSite={socialSite}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Peoples;
