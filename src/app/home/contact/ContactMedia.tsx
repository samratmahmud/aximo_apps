import React from "react";

interface contractProps {
  icon1: string;
  icon2: string;
}

function ContactMedia(props: contractProps) {
  const {icon1, icon2} = props;
  const [show, setShow] = React.useState(false);
  return (
    <div
      className={`w-11 h-11 flex justify-center rounded-full border border-white hover:border-black ${
        !show ? "" : "bg-praimary hover:shadow-lg duration-500"
      }`}
    >
      <img
        className="p-2"
        onMouseEnter={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        src={`${!show ? icon1 : icon2}`}
        alt=""
      />
    </div>
  );
}

export default ContactMedia;
