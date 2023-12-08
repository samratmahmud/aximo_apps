import Questions from "@/components/common/Questions";
import React from "react";

const questionsCard = [
  {
    question: "01/ Project idea",
    answer:
      "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
  {
    question: "02/ Brainstorming",
    answer:
      "Brainstorming is a group creativity technique in which members attempt to find a conclusion.",
  },
  {
    question: "03/ Launch",
    answer:
      "The completed design assets or final product are delivered with necessary documentation.",
  },
];

function FrequentlyQuestions() {
  return (
    <section>
      <div className="container md:my-32 my-20 flex md:flex-row flex-col gap-7">
        <div className="md:w-[63%]">
          <h2 className="lg:text-xl md:text-4xl text-6xl font-bold font-syne max-w-4xl md:mb-6 mb-4 text-center md:text-left">
            Our high-quality{" "}
            <span className="inline-flex">
              {" "}
              <img
                className="hidden md:inline"
                src="/images/star2.png"
                alt=""
              />
            </span>{" "}
            working processes{" "}
          </h2>
          <p className="md:text-md text-sm text-center md:text-left mb-7">
            We focus at every stage on effective communication and collaboration
            between the client and ensuring that the final design meets the
            client's objectives and expectations.
          </p>
          <p className="md:text-md text-sm text-center md:text-left">
            It is important to note that these are simplified steps, and the
            actual work process may vary depending on the complexity of the
            project.
          </p>
        </div>
        <div data-aos="fade-up" className="md:w-[37%] flex flex-col gap-5">
          {questionsCard.map(({answer, question}, index) => (
            <Questions
              key={index}
              isOpen={index === 0}
              answer={answer}
              question={question}
            />
          ))}
        </div>
      </div>
      <hr className="border border-gray-300" />
    </section>
  );
}

export default FrequentlyQuestions;
