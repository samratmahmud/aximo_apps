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
  const {icons, link, handelChange} = props;
  const [icon, setIcon] = React.useState(false);
  const [show, setShow] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseUp={() => setShow(true)}
      onMouseDown={() => setShow(false)}
    >
      <div
        className={`bg-black hover:bg-praimary duration-500 p-1.5 rounded-full w-9 h-9 border border-white hover:border-black`}
      >
        <Link href={link}>
          {icons?.map(({icon1, icon2}, index) => (
            <div key={index}>
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
    </div>
  );
}

export default SocialMedia;
