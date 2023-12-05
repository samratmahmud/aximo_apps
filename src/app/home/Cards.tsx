import Link from "next/link";
import React from "react";

const cards = [
  {
    logo: "/images/icons8-tools-64.png",
    title: "UI/UX Design",
    description:
      "Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
    arrowIcon: "/images/icons8-arrow-right-32.png",
  },
  {
    logo: "/images/icons8-branding-company-96.png",
    title: "Graphic Design",
    description:
      "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
    arrowIcon: "/images/icons8-arrow-right-32.png",
  },
  {
    logo: "/images/icons8-web-64.png",
    title: "Web Design",
    description:
      "Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
    arrowIcon: "/images/icons8-arrow-right-32.png",
  },
  {
    logo: "/images/icons8-thinking-48.png",
    title: "Motion Graphics",
    description:
      "Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
    arrowIcon: "/images/icons8-arrow-right-32.png",
  },
];

function Cards() {
  return (
    <section>
      <div className="container">
        <h2 className="text-xl font-bold font-syne max-w-4xl m-auto text-center mb-20">
          We provide effective design solutions{" "}
          <span className="inline-flex">
            {" "}
            <img src="/images/star2.png" alt="" />
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-5 mb-24">
          {cards.map(({title, logo, description, arrowIcon}, index) => (
            <div data-aos="fade-up">
              <div
                key={index}
                className="border-2 border-black rounded-[20px] p-[30px] hover:bg-praimary duration-500 hover:shadow-md"
              >
                <div className="mb-8">
                  <img className="w-20" src={logo} alt="" />
                </div>
                <div className=" text-base font-bold mb-4 font-syne">
                  {title}
                </div>
                <div className="text-sm mb-7">{description}</div>
                <Link href="/">
                  <img src={arrowIcon} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-full border border-black/10" />
      </div>
    </section>
  );
}

export default Cards;
