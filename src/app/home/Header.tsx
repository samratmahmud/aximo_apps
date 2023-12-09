import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

const imagesGroup = [
  "/images/user1.png",
  "/images/user3.png",
  "/images/user2.png",
];

function Header() {
  return (
    <section className="lg:pt-[200px] pt-32 lg:pb-28 pb-20 bg-black">
      <div className="container overflow-hidden lg:overflow-visible">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-7 gap-14">
          <div>
            <h1 className="xl:text-2xl md:text-xl text-4xl text-gray-200 font-bold mb-6 font-syne text-center lg:text-left">
              <span className="flex items-center gap-4 justify-center lg:justify-start">
                A creative
                <img
                  className="xl:h-[70px] h-12 hidden md:inline"
                  src="/images/star.png"
                  alt=""
                />
              </span>
              design studio
            </h1>
            <p className="lg:text-md text-sm text-gray-200 md:mb-11 mb-8 lg:max-w-[890px] max-w-[630px] m-auto lg:mr-28 text-center lg:text-left">
              We're a creative design studio specializing in meeting the needs
              of the new generation. We offer innovative and cutting-edge design
              solutions to help our clients stand out in today's fast-paced.
            </p>
            <div className="flex relative justify-center lg:justify-start">
              <div>
                <div className="flex md:flex-row flex-col items-center gap-5 mb-12">
                  <div className="flex">
                    {imagesGroup.map((image, index) => (
                      <div
                        key={index}
                        className={`-ml-1.5 first:-ml-0 animate__animated animate__fadeInUp animate__delay-${index}s`}
                      >
                        <img className="rounded-full" src={image} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="sm:text-sm text-xs text-gray-200">
                    Believed by more than a thousand people
                  </div>
                </div>
                <Link href="/" className="flex justify-center lg:justify-start">
                  <Buttons
                    className="pl-[42px] pr-1.5"
                    name="Book a free consultation "
                    icon="/images/icons8-call-24.png"
                  />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 hidden lg:inline">
                <img
                  className="animate__slideInLeft icon animate__animated animate__infinite xl:max-w-[284px] max-w-[184px]"
                  src="/images/shape1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="border-[5px] rounded-3xl border-gray-200 max-w-[490px] m-auto overflow-hidden">
              <img
                className="rounded-3xl scale-110 hover:scale-100 duration-500"
                src="/images/hero-thumb.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
