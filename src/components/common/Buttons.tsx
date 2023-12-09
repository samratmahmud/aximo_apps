import React from "react";

interface ButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  icon?: string;
}

function Buttons(props: ButtonsProps) {
  const {name, icon, className} = props;
  return (
    <div
      className={`${className} text-xs font-bold py-1 px-[30px] leading-[39px] bg-praimary rounded-[50px] border-2 border-black shadow-sm hover:shadow-transparent duration-700 flex justify-between items-center gap-14`}
    >
      {name}
      {icon && (
        <img
          className="bg-black p-2 rounded-full h-[50px] w-[50px]"
          src={icon}
          alt=""
        />
      )}
    </div>
  );
}

export default Buttons;
