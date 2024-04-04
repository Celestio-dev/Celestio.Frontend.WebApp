import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/google-icon.svg";
import IGIcon from "../assets/icons/ig-icon.svg";

function Button(props) {
  return (
    <button
      className={`rounded-[20px] py-[11px] px-[30px] font-[20px] hover:opacity-85 ${
        props.className || ""
      }

      ${
        props.type == "primary"
          ? "bg-primary text-white"
          : props.type == "secondary"
          ? "bg-secondary text-text"
          : props.type == "danger"
          ? "bg-error text-white"
          : props.type == "white"
          ? "bg-white text-text"
          : ""
      }`}
      onClick={props.onClick}
    >
      {props.linkTo ? (
        <Link
          to={props.linkTo}
          className="flex justify-center items-center gap-3"
        >
          {props.icon ? (
            <img
              src={`${
                props.icon == "google"
                  ? GoogleIcon
                  : props.icon == "ig"
                  ? IGIcon
                  : ""
              }`}
              alt="icon"
              className="w-5"
            />
          ) : (
            ""
          )}
          <p className="font-semibold">{props.label}</p>
        </Link>
      ) : (
        <p className="font-semibold">{props.label}</p>
      )}
    </button>
  );
}

export default Button;
