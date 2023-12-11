import React from "react";

const contactCard = [
  {
    icon: "https://html.favdevs.com/aximo/assets/images/icon/call2.svg",
    title: "Call us",
    contain1: "+088-234-6532-789",
    contain2: "+088-456-3217-005",
  },
  {
    icon: "	https://html.favdevs.com/aximo/assets/images/icon/email.svg",
    title: "Call us",
    contain1: "example@gmail.com",
    contain2: "example@gmail.com",
  },
  {
    icon: "	https://html.favdevs.com/aximo/assets/images/icon/email.svg",
    title: "Office address",
    contain1: "4132 Thornridge City, New York.",
  },
];

function ContactInformation() {
  return (
    <section className="container">
      <div className="md:my-32 my-20">
        <h2 className="xl:text-xl md:text-4xl text-6xl md:font-bold font-semibold font-syne max-w-4xl m-auto text-center lg:text-left mb-12">
          Contact Information{" "}
          <span className="inline-flex">
            {" "}
            <img
              className="w-10 lg:w-12 hidden md:inline"
              src="/images/star2.png"
              alt=""
            />
          </span>
        </h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 mb-[60px]">
          {contactCard.map(({title, icon, contain1, contain2}, index) => (
            <div
              key={index}
              className="bg-black text-gray-200 rounded-xl py-[30px] xl:px-16 lg:px-10 px-[30px] flex items-start gap-6"
            >
              <img src={icon} alt="" />
              <div>
                <span className="text-3xl font-bold">{title}</span>
                <p className="text-md mt-2.5">{contain1}</p>
                <p className="text-md">{contain2}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full min-h-[600px]">
          <iframe
            className="w-full h-screen border-[5px] border-black rounded-3xl"
            src="/about_us"
          ></iframe>
        </div>
      </div>
      <hr className="border border-gray-300" />
    </section>
  );
}

export default ContactInformation;
