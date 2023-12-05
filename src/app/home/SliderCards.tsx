import Link from "next/link";
import React from "react";

const sliderPage = [
  {
    title: "Product Design",
    contain:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    icon: "/images/icons8-arrow-right-32 (1).png",
    className: "bg-slide1 bg-cover bg-no-repeat w-full",
  },
  {
    title: "Logo and Branding",
    contain:
      "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
    icon: "/images/icons8-arrow-right-32 (1).png",
    className: "bg-slide2 bg-cover bg-no-repeat w-full",
  },
  {
    title: "App UI/UX Design",
    contain:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    icon: "/images/icons8-arrow-right-32 (1).png",
  },
  {
    title: "Packaging Design",
    contain:
      "Creating packaging solutions for products that not only protect attract customers on store.",
    icon: "/images/icons8-arrow-right-32 (1).png",
  },
];

function SliderCards() {
  return (
    <section className="bg-black py-32">
      <div className="container">
        <h2 className="text-xl text-gray-200 font-bold font-syne max-w-4xl m-auto text-center mb-20">
          Have a wide range of creative projects{" "}
          <span className="inline-flex">
            {" "}
            <img src="/images/star2.png" alt="" />
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {sliderPage.map(({title, icon, contain, className}, index) => (
            <div
              key={index}
              className={`p-6 border-[5px] border-gray-200 rounded-[20px] ${className}`}
            >
              <h3 className="text-base text-gray-200 font-bold font-syne mb-2.5">
                {title}
              </h3>
              <div className="flex flex-row gap- justify-between">
                <p className="text-gray-200 text-sm">{contain}</p>
                <Link href="/">
                  <img src={icon} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SliderCards;
