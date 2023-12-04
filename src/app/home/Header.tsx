import React from "react";

function Header() {
  return (
    <section className="py-24 pt-48">
      <div className="container flex gap-7">
        <div>
          <h1 className="text-2xl text-gray-200 font-bold mb-6">
            <span className="flex items-end gap-4">
              A creative
              <img className="h-[70px]" src="/images/star.png" alt="" />
            </span>
            design studio
          </h1>
          <p className="text-md text-gray-200 mb-11 mr-32">
            We're a creative design studio specializing in meeting the needs of
            the new generation. We offer innovative and cutting-edge design
            solutions to help our clients stand out in today's fast-paced.
          </p>
        </div>
        <div className="border-[5px] rounded-3xl border-gray-200 max-w-[490px] overflow-hidden">
          <img
            className="rounded-3xl scale-125 hover:scale-100 duration-500"
            src="/images/hero-thumb.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
