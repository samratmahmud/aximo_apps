"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderPage = [
  {
    title: "Product Design",
    contain:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    thumnail: "/images/project1.png",
  },
  {
    title: "Logo and Branding",
    contain:
      "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    thumnail: "/images/project2.png",
  },
  {
    title: "App UI/UX Design",
    contain:
      "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
    thumnail: "/images/project3.png",
  },
  {
    title: "Packaging Design",
    contain:
      "Creating packaging solutions for products that not only protect attract customers on store.",
    thumnail: "/images/project4.png",
  },
];

function SliderCards() {
  return (
    <section className="bg-black lg:py-32 py-20">
      <h2 className="lg:text-xl md:text-4xl text-6xl text-gray-200 font-bold font-syne max-w-4xl m-auto text-center md:mb-20 mb-10">
        Have a wide range of creative projects{" "}
        <span className="inline-flex">
          {" "}
          <img
            className="max-w-[40px] lg:max-w-none hidden md:inline"
            src="/images/star2.png"
            alt=""
          />
        </span>
      </h2>
      <div className="overflow-hidden">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={2}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
          ]}
        >
          {sliderPage.map(({title, contain, thumnail}, index) => (
            <div key={index} className="group">
              <div className="border-[5px] border-gray-200 rounded-[20px] aspect-[690/524] flex flex-col justify-end sm:mx-3 mx-1 relative z-0 overflow-hidden">
                <img
                  className="absolute h-full object-cover top-0 left-0 -z-10 scale-100 group-hover:scale-110 duration-500 ease-in-out"
                  src={thumnail}
                  alt=""
                />
                <div
                  className="p-5 md:p-6"
                  style={{
                    background: "linear-gradient(transparent 1%,black 99%)",
                  }}
                >
                  <h3 className="text-base text-gray-200 font-bold font-syne mb-2.5">
                    {title}
                  </h3>
                  <div className="flex md:flex-row flex-col gap-5 justify-between">
                    <p className="text-gray-200 text-sm">{contain}</p>
                    <Link href="/">
                      <img
                        className="flex-grow"
                        src="/images/arrow-right.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderCards;

// "use client";
// import Link from "next/link";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const sliderPage = [
//   {
//     title: "Product Design",
//     contain:
//       "Developing the look and feel of physical products, aesthetics, and functionality.",
//   },
//   {
//     title: "Logo and Branding",
//     contain:
//       "Creating or refreshing a company's logo and developing a cohesive visual identity.",
//   },
//   {
//     title: "App UI/UX Design",
//     contain:
//       "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
//   },
//   {
//     title: "Packaging Design",
//     contain:
//       "Creating packaging solutions for products that not only protect attract customers on store.",
//   },
// ];

// function SliderCards() {
//   return (
//     <section className="bg-black lg:py-32 py-20">
//       <h2 className="lg:text-xl md:text-4xl text-6xl text-gray-200 font-bold font-syne max-w-4xl m-auto text-center md:mb-20 mb-10">
//         Have a wide range of creative projects{" "}
//         <span className="inline-flex">
//           {" "}
//           <img
//             className="max-w-[40px] lg:max-w-none hidden md:inline"
//             src="/images/star2.png"
//             alt=""
//           />
//         </span>
//       </h2>
//       <Slider
//         dots={true}
//         infinite={true}
//         arrows={true}
//         speed={500}
//         slidesToShow={2}
//         slidesToScroll={1}
//         responsive={[
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               dots: true,
//               arrows: false,
//             },
//           },
//         ]}
//       >
//         {sliderPage.map(({title, contain}, index) => (
//           <div key={index} className="group">
//             <div className="border-[5px] border-gray-200 rounded-[20px] aspect-[690/524] flex flex-col justify-end lg:mx-3 relative z-0 overflow-hidden">
//               <img
//                 className="absolute h-full object-cover top-0 left-0 -z-10 scale-100 group-hover:scale-110 duration-500 ease-in-out"
//                 src="/images/project4.png"
//                 alt=""
//               />
//               <div
//                 className="p-6"
//                 style={{
//                   background: "linear-gradient(transparent 1%,black 99%)",
//                 }}
//               >
//                 <h3 className="text-base text-gray-200 font-bold font-syne mb-2.5">
//                   {title}
//                 </h3>
//                 <div className="flex md:flex-row flex-col gap-5 justify-between">
//                   <p className="text-gray-200 text-sm">{contain}</p>
//                   <Link href="/">
//                     <img
//                       className="flex-grow"
//                       src="/images/arrow-right.svg"
//                       alt=""
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

// export default SliderCards;
