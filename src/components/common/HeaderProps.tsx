import Link from "next/link";
import React from "react";

interface HeaderPropsProps {
  title: string;
  subtitle: string;
}

function HeaderProps(props: HeaderPropsProps) {
  const {title, subtitle} = props;

  return (
    <div className="bg-black lg:pt-48 md:pt-44 pt-32 lg:pb-32 md:pb-24 pb-20">
      <h2 className="lg:text-2xl md:text-xl text-4xl font-bold text-center text-gray-200 font-syne lg:mb-12 mb-7">
        {title}
      </h2>
      <div className="md:text-md text-sm flex flex-row items-center gap-[18px] justify-center">
        <Link href="/" className="capitalize text-gray-200">
          Home
        </Link>
        <span>
          <img
            src="https://html.favdevs.com/aximo/assets/images/icon/arrow-right7.svg"
            alt=""
          />
        </span>
        <h6 className="font-bold text-praimary">{subtitle}</h6>
      </div>
    </div>
  );
}

export default HeaderProps;
