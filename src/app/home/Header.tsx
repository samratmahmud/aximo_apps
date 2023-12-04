import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

const imagesGroup = [
  "/images/user1.png",
  "/images/user3.png",
  "/images/user1.png",
];

function Header() {
  return (
    <section className="pt-[200px] pb-28 bg-black mb-32">
      <div className="container flex flex-row gap-7">
        <div>
          <h1 className="text-xl text-gray-200 font-bold mb-6 font-syne">
            <span className="flex items-center gap-4">
              A creative
              <img className="h-[70px]" src="/images/star.png" alt="" />
            </span>
            design studio
          </h1>
          <p className="text-md text-gray-200 mb-11 max-w-[890px] mr-28">
            We're a creative design studio specializing in meeting the needs of
            the new generation. We offer innovative and cutting-edge design
            solutions to help our clients stand out in today's fast-paced.
          </p>
          <div className="flex relative">
            <div>
              <div className="flex items-center gap-5 mb-14">
                <div className="flex">
                  {imagesGroup.map((image, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration={`${index + 1}000`}
                      className="-ml-1.5 first:-ml-0"
                    >
                      <img
                        className="rounded-full w-16h-16"
                        src={image}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-200">
                  Believed by more than a thousand people
                </div>
              </div>
              <Link href="/" className="inline-block">
                <Buttons
                  className="pl-[42px] pr-2.5"
                  name="Book a free consultation "
                  icon="/images/icons8-call-24.png"
                />
              </Link>
            </div>
            <div className="absolute right-0">
              <img src="/images/shape1.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos="fade-left"
            className="border-[5px] rounded-3xl border-gray-200 max-w-[490px] overflow-hidden"
          >
            <img
              className="rounded-3xl scale-110 hover:scale-100 duration-500"
              src="/images/hero-thumb.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
