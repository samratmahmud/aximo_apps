import React from "react";

function Header() {
  return (
    <section>
      <div className="container">
        <h1 className="text-2xl text-gray-200 font-bold mb-6">
          <span className="flex items-end gap-4">
            A creative
            <img className="h-[70px]" src="/images/star.png" alt="" />
          </span>
          design studio
        </h1>
        <p className="text-md text-gray-200 mb-11">
          We're a creative design studio specializing in meeting the needs of
          the new generation. We offer innovative and cutting-edge design
          solutions to help our clients stand out in today's fast-paced.
        </p>
      </div>
    </section>
  );
}

export default Header;
