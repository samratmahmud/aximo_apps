import React from "react";

const feadbackCards = [
  {
    title: "Super customer service!",
    description:
      "Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.",
    thumbnail: "/images/t_thumb1.png",
    name: "William Jack",
    name2: " Founder@XYZ",
  },
  {
    title: "Exceptional creativity and vision",
    description:
      "Working Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!",
    thumbnail: "/images/t_thumb2.png",
    name: "Smith Align",
    name2: " Businessman",
  },
  {
    title: "Innovative and professional",
    description:
      "I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.",
    thumbnail: "/images/t_thumb3.png",
    name: "Milano Joe",
    name2: " Creative Director",
  },
  {
    title: "Transformed our brand",
    description:
      "Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.",
    thumbnail: "/images/t_thumb2.png",
    name: "Danial Mark ",
    name2: " Marketing Director",
  },
];

function Feadback() {
  return (
    <section>
      <div className="container md:my-32 my-20">
        <h2 className="lg:text-xl md:text-4xl text-lg font-bold font-syne max-w-4xl m-auto text-center md:mb-20 mb-10">
          Clients are always satisfied with us{" "}
          <span className="inline-flex">
            {" "}
            <img
              className="hidden md:inline lg:max-w-none md:max-w-[40px]"
              src="/images/star2.png"
              alt=""
            />
          </span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {feadbackCards.map(
            ({title, description, thumbnail, name, name2}, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="border-2 border-black rounded-3xl p-[30px] hover:shadow-md duration-500"
              >
                <div className="flex gap-2 mb-7">
                  {[...Array(5)].map((_, index) => (
                    <img key={index} src="/images/icons8-star-48.png" alt="" />
                  ))}
                </div>
                <div className="text-base font-bold font-syne mb-4">
                  {title}
                </div>
                <div className="text-sm mb-7">{description}</div>
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full border-[3px] border-black"
                    src={thumbnail}
                    alt=""
                  />
                  <div className="text-md">
                    <span className="font-bold">{name}</span>
                    <span>{name2}</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Feadback;
