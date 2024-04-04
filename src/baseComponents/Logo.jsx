import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../assets/logo_v2.svg";

function Logo() {
  return <img src={LogoSvg} alt="" className="h-[23px]" />;
}

export default Logo;
