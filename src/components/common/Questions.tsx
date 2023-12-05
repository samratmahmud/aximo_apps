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
    <div className="flex flex-col gap-4 border-2 border-black rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold font-syne">{question}</h3>
        <button onClick={handelClick}>
          <img
            className={`duration-500 ${open ? "rotate-[270deg]" : "rotate-90"}`}
            src="/images/icons8-arrow-right-32 (2).png"
            alt=""
          />
        </button>
      </div>
      {open && <p className="text-md">{answer}</p>}
    </div>
  );
}

export default Questions;
