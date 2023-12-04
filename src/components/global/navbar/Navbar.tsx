import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";
import Navitem from "./Navitem";

const navLinks = [
  {
    title: "Demo",
    path: "/",
    list: [
      {title: "Design Agency", path: "/"},
      {title: "Startup Agency", path: "/"},
      {title: "SEO Agency", path: "/"},
      {title: "Business Consultation", path: "/"},
      {title: "Digital Marketing", path: "/"},
    ],
  },
  {title: "About Us", path: "/"},
  {title: "Pages", path: "/"},
  {title: "Blog", path: "/"},
  {title: "Contact Us", path: "/"},
];

function Navbar() {
  return (
    <nav className="container py-3.5 fixed left-0 right-0">
      <div className="flex justify-between items-center gap-9">
        <div className="flex items-center gap-9">
          <div>
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="flex">
            {navLinks.map(({title, path, list}, index) => (
              <Navitem title={title} path={path} list={list} key={index} />
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
