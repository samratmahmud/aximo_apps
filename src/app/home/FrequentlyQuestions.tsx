import Questions from "@/components/common/Questions";
import React from "react";

const questionsCard = [
  {
    question: "How do I get started?",
    answer:
      "You can get started by contacting us through our contact page or by sending us an email at",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by contacting us through our contact page or by sending us an email at",
  },
];

function FrequentlyQuestions() {
  return (
    <section>
      <div className="container my-32">
        <div>
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
        <div>
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
    </section>
  );
}

export default FrequentlyQuestions;
