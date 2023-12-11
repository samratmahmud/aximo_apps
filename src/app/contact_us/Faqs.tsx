import React from "react";

const faqsContain = [
  {
    icons: "/images/question.svg",
    title: "What services does agency offer?",
    contain:
      "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding.",
  },
  {
    icons: "/images/question.svg",
    title: "What's your design process like?",
    contain:
      "Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization.",
  },
  {
    icons: "/images/question.svg",
    title: "What's your design process like?",
    contain: `Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.`,
  },
  {
    icons: "/images/question.svg",
    title: `How do you handle user feedback?`,
    contain:
      "We value client feedback and work closely with you to make sure user happy with the final design. We offer a specific number of revisions.",
  },
  {
    icons: "/images/question.svg",
    title: `How much does design work cost?`,
    contain:
      "The cost of our design services varies depending on the scope of the project. We provide customized quotes after discussing requirements.",
  },
  {
    icons: "/images/question.svg",
    title: `Can we see samples of your work?`,
    contain:
      "Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or view our portfolio.",
  },
];

function Faqs() {
  return (
    <section>
      <div className="container md:my-32 my-20">
        <h2 className="xl:text-xl md:text-4xl text-6xl md:font-bold font-semibold font-syne max-w-[865px] m-auto text-center md:mb-20 mb-10">
          These FAQs help clients learn about us{" "}
          <span className="inline-flex">
            {" "}
            <img
              className="w-10 lg:w-12 hidden md:inline"
              src="/images/star2.png"
              alt=""
            />
          </span>
        </h2>
        <div className="grid lg:grid-cols-2 lg:gap-y-9 gap-y-6 gap-x-6">
          {faqsContain.map(({icons, title, contain}, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <img className="mt-1.5" src={icons} alt="" />
              <div>
                <span className="text-base font-bold font-syne">{title}</span>
                <p className="text-sm mt-2.5">{contain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
