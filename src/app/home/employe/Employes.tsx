"use client";
import React from "react";
import PeopleGroup from "./PeopleGroup";

const peopleDetailsGroup = [
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
    thumbnail: "/images/team4.png",
    name: "Adam Straw",
    describtion: "Web Developer",
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

function Employes() {
  return (
    <section>
      <div className="container md:my-32 my-20">
        <h2 className="lg:text-xl md:text-4xl text-6xl font-bold font-syne max-w-4xl m-auto text-center lg:mb-20 mb-10">
          We have a team of creative people{" "}
          <span className="inline-flex">
            {" "}
            <img
              className="max-w-[36px] lg:max-w-none hidden md:inline"
              src="/images/star2.png"
              alt=""
            />
          </span>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          {peopleDetailsGroup.map(
            ({thumbnail, name, describtion, socialSite}, index) => (
              <div data-aos="fade-up" data-aos-duration={`${index + 0}000`}>
                <PeopleGroup
                  key={index}
                  thumbnail={thumbnail}
                  name={name}
                  describtion={describtion}
                  socialSite={socialSite}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Employes;
