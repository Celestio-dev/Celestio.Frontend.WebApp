import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <button
      className={`rounded-[20px] py-[11px] px-[30px] font-[20px] hover:opacity-85 ${
        props.className || ""
      }

      ${
        props.type == "primary"
          ? "bg-primary text-white"
          : "bg-secondary text-text"
      }`}
      onClick={props.onClick}
    >
      {props.linkTo ? (
        <Link
          to={props.linkTo}
          className="flex justify-center items-center gap-3"
        >
          {props.icon ? (
            <img src={`src/assets/${props.icon}`} alt="icon" className="w-5" />
          ) : (
            ""
          )}
          <p className="font-medium">{props.label}</p>
        </Link>
      ) : (
        <p className="font-medium">{props.label}</p>
      )}
    </button>
  );
}

export default Button;
