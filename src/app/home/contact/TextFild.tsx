import React from "react";

interface textFildProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextFild(props: textFildProps) {
  const {type, placeholder} = props;
  return (
    <div>
      <input
        className={`text-xs font-bold placeholder:text-gray-400 bg-transparent focus:outline text-gray-400 w-full focus:border-praimary focus:border py-3.5 px-6 border border-gray-200 rounded-[50px]`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextFild;
