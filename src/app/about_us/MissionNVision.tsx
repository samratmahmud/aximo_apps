import React from "react";

const PictureGroup = [
  "/images/story1.png",
  "/images/story2 (1).png",
  "/images/story3.png",
  "/images/story2.png",
];

const MissionVisionDetails = [
  {
    title: "Our core vision",
    descriptio1:
      "Empowering businesses to create impactful and visually stunning brand experiences that captivate audiences and drive success in the digital age.",
    description2:
      "Our team consists of experienced designers, developers. We have a wide variety of skills and backgrounds, allowing us to tackle projects of all sizes and complexities. We believe in the power of imagination and innovation.",
  },
  {
    title: "Our main mission",
    descriptio1:
      "Our mission is to collaborate with businesses of all sizes, from startups to established brands, to provide innovative and creative design solutions.",
    description2:
      "We are committed to creating designs that inspire, connect & our clients in the marketplace. Our focus is on understanding. Our clients' unique needs and delivery designs that not only meet but exceed their expectations.",
  },
];

function MissionNVision() {
  return (
    <section>
      <div className="container my-32">
        <h2 className="xl:text-xl md:text-4xl text-6xl font-bold font-syne max-w-4xl m-auto text-center mb-6">
          We think our story is{" "}
          <span className="inline-flex">
            {" "}
            <img
              className="w-10 lg:w-12 hidden md:inline"
              src="/images/star2.png"
              alt=""
            />
          </span>{" "}
          <br />
          worth sharing with you{" "}
        </h2>
        <p className="text-md text-center max-w-[850px] m-auto mb-20">
          Established in 2008, we began as a small but ambitious team. We
          understood the importance of creative and tech-savvy solutions to help
          businesses succeed in the ever-changing digital landscape.
        </p>
        <div className="grid grid-cols-3 gap-6 mb-11">
          {PictureGroup.map((picture, index) => (
            <div
              key={index}
              className="first:col-span-2 last:col-span-2 border-[5px] border-black rounded-[20px] overflow-hidden"
            >
              <img
                className="scale-100 hover:scale-105 duration-500 h-full w-full"
                src={picture}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex gap-6">
          {MissionVisionDetails.map(
            ({title, descriptio1, description2}, index) => (
              <div key={index}>
                <h2 className="text-base mb-4 font-bold font-syne">{title}</h2>
                <p className="text-sm mb-7">{descriptio1}</p>
                <p className="text-sm">{description2}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default MissionNVision;
