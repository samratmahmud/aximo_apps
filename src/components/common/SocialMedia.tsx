"use client";
import Link from "next/link";
import React from "react";

interface mediaProps {
  icons: {
    icon1: string;
    icon2: string;
  }[];
  link: string;
  handelChange?: () => void;
}

function SocialMedia(props: mediaProps) {
  const {icons, link} = props;
  const [icon, setIcon] = React.useState(icons[0].icon1);
  const handelMouseEnter = () => {
    setIcon((prev) =>
      prev === icons[0].icon1 ? icons[0].icon2 : icons[0].icon1
    );
  };
  return (
    <div className="bg-black hover:bg-praimary duration-500 p-1.5 rounded-full w-9 h-9">
      <Link href={link}>
        {icons?.map(({icon1, icon2}, index) => (
          <div key={index}>
            <img
              onMouseEnter={handelMouseEnter}
              src={index === 0 ? `${icon1}` : `${icon2}`}
              alt=""
            />
          </div>
        ))}
      </Link>
    </div>
  );
}

export default SocialMedia;
