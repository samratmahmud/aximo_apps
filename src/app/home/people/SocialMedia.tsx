"use client";
import Link from "next/link";
import React from "react";

interface mediaProps {
  icons: {
    icon1: string;
    icon2: string;
  }[];
  link: string;
}

function SocialMedia(props: mediaProps) {
  const {icons, link} = props;
  const [icon, setIcon] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIcon(true)}
      onMouseOut={() => setIcon(false)}
      className={`hover:shadow-lg ${
        !icon
          ? "bg-black border border-white"
          : "bg-praimary border border-black"
      } duration-500 rounded-full w-9 h-9`}
    >
      <Link href={link} target="_blank">
        {icons?.map(({icon1, icon2}, index) => (
          <div key={index} className="p-1.5">
            <img
              onMouseEnter={() => setIcon(true)}
              onMouseOut={() => setIcon(false)}
              src={icon ? `${icon2}` : `${icon1}`}
              alt=""
            />
          </div>
        ))}
      </Link>
    </div>
  );
}

export default SocialMedia;
