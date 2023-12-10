import React from "react";

interface textFildProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  className?: string;
}

function TextFild(props: textFildProps) {
  const {type, placeholder, title, className} = props;

  return (
    <label>
      <p className="text-xs font-bold mb-2.5">{title}</p>
      <input
        className={`text-xs font-bold placeholder:text-gray-400 bg-transparent focus:outline-none text-gray-400 w-full focus:border-praimary focus:border py-3.5 px-6 border border-gray-200 rounded-[50px] ${className}`}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}

export default TextFild;
