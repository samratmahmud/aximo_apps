import React from "react";

interface textAreaProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
}

function TextArea(props: textAreaProps) {
  const {placeholder, className, title} = props;
  return (
    <label>
      <p className="text-xs font-bold mb-2.5">{title}</p>
      <textarea
        className={`bg-transparent focus:outline border border-gray-200 md:min-h-[150px] min-h-[100px] rounded-[20px] focus:border-praimary focus:border py-3.5 px-6 text-xs font-bold placeholder:text-gray-400 text-gray-400 w-full focus:outline-none ${className}`}
        placeholder={placeholder}
        name=""
        id=""
      />
    </label>
  );
}

export default TextArea;
