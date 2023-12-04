import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "Demo",
    path: "/",
    list: [{title: "Design Agency", path: "/"}],
  },
  {title: "About Us", path: "/"},
  {title: "Pages", path: "/"},
  {title: "Blog", path: "/"},
  {title: "Contact Us", path: "/"},
];

function Navbar() {
  return (
    <nav className="container py-3.5">
      <div className="flex justify-between items-center gap-9">
        <div className="flex items-center gap-9">
          <div>
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="flex">
            {navLinks.map(({title, path, list}, index) => (
              <div key={index} className="group">
                <Link
                  href={path}
                  className="text-xs text-gray-200 font-semibold py-4 px-4 flex items-center "
                >
                  {title}
                  {list && (
                    <i className="ml-4  w-3 h-4 pt-1">
                      <img
                        className="group-hover:-rotate-180 duration-500"
                        src="images/icons8-down-16.png"
                        alt=""
                      />
                    </i>
                  )}
                </Link>
                <span className="hidden group-hover:block transitions">
                  {list && (
                    <div className="bg-gray-200">
                      {list.map(({title, path}, index) => (
                        <Link
                          key={index}
                          href={path}
                          className="text-xs text-black font-semibold py-1 px-5"
                        >
                          {title}
                        </Link>
                      ))}
                    </div>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Link href="">
          <Buttons name="Contact Us" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
