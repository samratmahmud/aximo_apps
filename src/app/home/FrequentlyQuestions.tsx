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
      <div className="container my-32 flex gap-4">
        <div className="w-[63%]">
          <h2 className="text-xl font-bold font-syne max-w-4xl mb-6">
            Our high-quality{" "}
            <span className="inline-flex">
              {" "}
              <img src="/images/star2.png" alt="" />
            </span>{" "}
            working processes{" "}
          </h2>
          <p className="text-md mb-7">
            We focus at every stage on effective communication and collaboration
            between the client and ensuring that the final design meets the
            client's objectives and expectations.
          </p>
          <p className="text-md">
            It is important to note that these are simplified steps, and the
            actual work process may vary depending on the complexity of the
            project.
          </p>
        </div>
        <div className="w-[37%] flex flex-col gap-5">
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
