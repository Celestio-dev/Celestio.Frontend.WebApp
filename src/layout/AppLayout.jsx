import React from "react";
import { Outlet } from "react-router-dom";
import MainNavBar from "../components/AppNavBar";

function LoginLayout() {
  return (
    <div className="flex flex-col justify-center">
      <MainNavBar />
      <div className="flex justify-center">
        <div className="w-[1280px] flex justify-center my-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
