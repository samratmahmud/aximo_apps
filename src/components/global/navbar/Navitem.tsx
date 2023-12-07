import Link from "next/link";
import React from "react";

interface NavitemProps {
  title: string;
  path: string;
  list?: {title: string; path: string}[];
}

function Navitem(props: NavitemProps) {
  const {title, path, list} = props;

  const [show, setShow] = React.useState(false);

  return (
    <div
      className="group relative"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div className="">
        <Link
          href={path}
          className="text-xs lg:text-gray-200 text-black font-semibold lg:py-4 py-2 lg:px-4 flex justify-between items-center lg:items-start"
        >
          {title}
          {list && (
            <i className="ml-4 w-3 h-4">
              <img
                className="group-hover:-rotate-180 duration-500 hidden lg:inline"
                src="images/icons8-down-16.png"
                alt=""
              />
              <img
                className="lg:hidden group-hover:-rotate-90 duration-500"
                src="/images/icons8-arrow-right-64.png"
                alt=""
              />
            </i>
          )}
        </Link>
        <hr className="lg:hidden border border-gray-300" />
      </div>
      <span
        className={`absolute min-w-[205px] animate__faster animate__animated ${
          show ? "animate__fadeInUp" : "animate__fadeOutDown hidden"
        }`}
      >
        {list && (
          <div>
            <div className="w-4 h-4 bg-white translate-x-9 translate-y-2 rotate-45" />
            <div className="bg-white relative z-40 rounded-md flex flex-col py-2">
              {list.map(({title, path}, index) => (
                <Link
                  key={index}
                  href={path}
                  className="text-sx text-black font-semibold py-1 px-5 hover:underline"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </span>
    </div>
  );
}

export default Navitem;
