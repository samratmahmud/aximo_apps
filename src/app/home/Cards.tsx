import Link from "next/link";
import React from "react";

const cards = [
  {
    logo: "/images/icons8-tools-64.png",
    title: "UI/UX Design",
    description:
      "Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
    arrowIcon:
      "https://html.favdevs.com/aximo/assets/images/icon/arrow-right.svg",
  },
  {
    logo: "/images/icons8-branding-company-96.png",
    title: "Graphic Design",
    description:
      "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
    arrowIcon:
      "https://html.favdevs.com/aximo/assets/images/icon/arrow-right.svg",
  },
  {
    logo: "/images/icons8-web-64.png",
    title: "Web Design",
    description:
      "Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
    arrowIcon:
      "https://html.favdevs.com/aximo/assets/images/icon/arrow-right.svg",
  },
  {
    logo: "/images/icons8-thinking-48.png",
    title: "Motion Graphics",
    description:
      "Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
    arrowIcon:
      "https://html.favdevs.com/aximo/assets/images/icon/arrow-right.svg",
  },
];

function Cards() {
  return (
    <section>
      <div className="container">
        <div className="md:my-32 my-20">
          <h2 className="md:text-xl text-6xl md:font-bold font-semibold font-syne max-w-4xl m-auto text-center md:mb-20 mb-10">
            We provide effective design solutions{" "}
            <span className="inline-flex">
              {" "}
              <img
                className="hidden md:inline"
                src="/images/star2.png"
                alt=""
              />
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-7">
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
                  <div className="text-sm md:mb-7 mb-5">{description}</div>
                  <Link href="/">
                    <img src={arrowIcon} alt="" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full border border-black/10" />
      </div>
    </section>
  );
}

export default Cards;

////arrowIconPic - /images/icons8-arrow-right-32.png
