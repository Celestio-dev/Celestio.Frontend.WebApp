import React from "react";

function Paragraph(props) {
  return (
    <p
      className={`${
        props.size ? "text-[20px]" : ""
      } text-light-text font-medium ${props.className || ""}
      `}
    >
      {props.children}
    </p>
  );
}

export default Paragraph;
