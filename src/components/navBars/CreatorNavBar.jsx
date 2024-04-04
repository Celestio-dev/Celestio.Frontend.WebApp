import React from "react";
import Logo from "../../baseComponents/Logo";
import NavBarProfileIcon from "./NavBarProfileIcon";
import Paragraph from "../../baseComponents/Paragraph";
import { Link } from "react-router-dom";
import { useState } from "react";

function CreatorNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-secondary flex justify-center">
      <div className="w-[1280px] flex justify-between items-center py-4">
        <Logo />
        <div className="flex justify-center gap-[30px] items-center">
          <Link to="/app/creator/dashboard">
            <Paragraph
              app
              className="font-semibold hover:border-b-[1px] hover:pb-[3px]"
            >
              Dashboard
            </Paragraph>
          </Link>
          <Link to="/app/creator/search">
            <Paragraph
              app
              className="font-semibold hover:border-b-[1px] hover:pb-[3px]"
            >
              Pretraži
            </Paragraph>
          </Link>
          <NavBarProfileIcon type="creator" />
        </div>
      </div>
    </div>
  );
}

export default CreatorNavBar;
