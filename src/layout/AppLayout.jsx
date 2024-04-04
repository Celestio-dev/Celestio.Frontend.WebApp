import React from "react";
import { Outlet } from "react-router-dom";
import AgencyNavBar from "../components/navBars/AgencyNavBar";
import CreatorNavBar from "../components/navBars/CreatorNavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginLayout() {
  const agency = useSelector((state) => state.agency);
  const creator = useSelector((state) => state.creator);

  const navigate = useNavigate();

  useEffect(() => {
    if (!agency.loogedInAgency && !creator.loogedInCreator) navigate("/");
  }, [agency.loogedInAgency, creator.loogedInCreator]);

  const MainNavBar = creator.loogedInCreator ? (
    <CreatorNavBar />
  ) : (
    <AgencyNavBar />
  );

  return (
    <div className="flex flex-col justify-center">
      {MainNavBar}
      <div className="flex justify-center">
        <div className="w-[1280px] flex justify-center my-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
