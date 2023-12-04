import React from "react";

interface ButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

function Buttons(props: ButtonsProps) {
  const {name} = props;
  return (
    <div className="text-xs font-semibold px-8 leading-[46px] bg-praimary rounded-[50px] border-2 border-black shadow-sm hover:shadow-transparent duration-700">
      {name}
    </div>
  );
}

export default Buttons;
