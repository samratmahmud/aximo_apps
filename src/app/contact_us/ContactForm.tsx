import React from "react";
import TextFild from "../../components/common/TextFild";
import TextArea from "@/components/common/TextArea";

function ContactForm() {
  return (
    <section>
      <div className="container md:my-32 my-20">
        <h2 className="xl:text-xl md:text-4xl text-6xl md:font-bold font-semibold font-syne max-w-4xl text-center lg:text-left md:mb-20 mb-10">
          Contact us for a{" "}
          <span className="inline-flex">
            {" "}
            <img
              className="w-10 lg:w-12 hidden md:inline"
              src="/images/star2.png"
              alt=""
            />
          </span>{" "}
          <br />
          personal experience{" "}
        </h2>
        <div className="flex lg:flex-row flex-col-reverse md:gap-14 gap-10">
          <div className="w-full">
            <div className="flex flex-col gap-[22px] p-[30px] border border-black rounded-[30px]">
              <TextFild
                className="border placeholder:text-black border-gray-950 focus:border-gray-950 text-gray-900"
                title="Your name"
              />
              <TextFild
                className="border placeholder:text-black border-gray-950 focus:border-gray-950 text-gray-900"
                title="Email Address"
              />
              <TextFild
                className="border placeholder:text-black border-gray-950 focus:border-gray-950 text-gray-900"
                title="Phone No"
              />
              <TextArea
                className="border placeholder:text-black border-gray-950 focus:border-gray-950 text-gray-900 md:min-h-[200px] min-h-[100px]"
                title="Write your message here..."
              />
              <div>
                <button
                  className="text-xs font-bold text-white rounded-full bg-black py-[15px] px-8 hover:bg-praimary duration-300 hover:text-black"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <img
              className="border-[7px] border-black rounded-2xl"
              src="/images/contact-thumb.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
