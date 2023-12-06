import React from "react";
import SocialMedia from "./SocialMedia";

interface PeopleGroupProps {
  thumbnail: string;
  name: string;
  describtion: string;
  socialSite: {
    icons: {
      icon1: string;
      icon2: string;
    }[];
    link: string;
  }[];
}

function PeopleGroup(props: PeopleGroupProps) {
  const {thumbnail, name, describtion, socialSite} = props;
  const [show, setShow] = React.useState(false);

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div className="border-[5px] border-black rounded-2xl overflow-hidden mb-6 relative">
        <img
          className="scale-100 hover:scale-105 duration-500"
          src={thumbnail}
          alt=""
        />
        <span className={`absolute bottom-5 left-1/2 -translate-x-1/2 z-10 `}>
          <div
            className={`flex gap-1.5 animate__animated animate__faster	500ms ${
              show ? "animate__fadeInUp" : "animate__fadeOutDown"
            }`}
          >
            {socialSite?.map(({icons, link}, index) => (
              <SocialMedia key={index} icons={icons} link={link} />
            ))}
          </div>
        </span>
      </div>
      <div className="text-base font-bold font-syne mb-2 text-center">
        {name}
      </div>
      <div className="text-md text-center">{describtion}</div>
    </div>
  );
}

export default PeopleGroup;
