import Link from "next/link";
import React from "react";

interface HeaderPropsProps {
  title: string;
  subtitle: string;
}

function HeaderProps(props: HeaderPropsProps) {
  const {title, subtitle} = props;

  return (
    <div className="bg-black pt-48 pb-32">
      <h2 className="text-2xl font-bold text-center text-gray-200 font-syne mb-12">
        {title}
      </h2>
      <div className="flex flex-row items-center gap-[18px] justify-center">
        <Link href="/" className="text-md capitalize text-gray-200">
          Home
        </Link>
        <span>
          <img
            src="https://html.favdevs.com/aximo/assets/images/icon/arrow-right7.svg"
            alt=""
          />
        </span>
        <h6 className="text-md font-bold text-praimary">{subtitle}</h6>
      </div>
    </div>
  );
}

export default HeaderProps;
