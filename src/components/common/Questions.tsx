"use client";
import React from "react";

interface questionProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

function Questions(props: questionProps) {
  const {question, answer, isOpen = false} = props;
  const [open, setOpen] = React.useState(isOpen);
  const handelClick = () => {
    setOpen((open) => !open);
  };

  return (
    <div
      className={`flex flex-col gap-4 border-2 border-black rounded-3xl p-6 ${
        open ? "shadow-md bg-praimary duration-300" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="lg:text-base text-3xl font-bold font-syne">
          {question}
        </h3>
        <button onClick={handelClick}>
          <img
            className={`duration-500 ${open ? "rotate-[270deg]" : "rotate-90"}`}
            src="/images/icons8-arrow-right-32 (2).png"
            alt=""
          />
        </button>
      </div>
      <div>{open && <p className="text-sm">{answer}</p>}</div>
    </div>
  );
}

export default Questions;
