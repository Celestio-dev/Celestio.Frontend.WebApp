import React from "react";

function Paragraph(props) {
  return (
    <p
      className={`${props.size ? "text-[20px]" : ""} ${
        props.app ? "text-black" : "text-light-text"
      } font-medium ${props.className || ""}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </p>
  );
}

export default Paragraph;
