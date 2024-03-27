import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../assets/logo_v2.svg";

function Logo() {
  return (
    <Link to="/">
      <img src={LogoSvg} alt="" className="h-[23px]" />
    </Link>
  );
}

export default Logo;
