import React from "react";
import Logo from "../baseComponents/Logo";
import Button from "../baseComponents/Button";
import UserIcon from "../assets/icons/user.svg";
import Paragraph from "../baseComponents/Paragraph";
import { Link } from "react-router-dom";
import { useState } from "react";

function AppNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-secondary flex justify-center">
      <div className="w-[1280px] flex justify-between items-center py-4">
        <Logo />
        <div className="flex justify-center gap-[30px] items-center">
          <Link to="brand">
            <Paragraph app className="font-semibold">
              Profil brenda
            </Paragraph>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-[20px] py-[11px] px-[30px] font-[20px] hover:opacity-85 text-black font-semibold"
          >
            Ime brenda
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppNavBar;
