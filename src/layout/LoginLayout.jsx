import React from "react";
import { Outlet } from "react-router-dom";
import MainNavBar from "../components/AppNavBar";
import LoginNavBar from "../components/LoginNavBar";
import { useLocation } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="flex flex-col justify-center">
      <LoginNavBar />
      <div className="flex justify-center">
        <div className="w-[1280px] flex justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;