import React from "react";
import Logo from "../baseComponents/Logo";
import Button from "../baseComponents/Button";

function AppNavBar() {
  return (
    <div className="bg-secondary flex justify-center">
      <div className="w-[1280px] flex justify-between items-center py-4">
        <Logo />
        <div className="flex justify-center gap-[30px]">
          <Button label="Prijava za kreatore" type="primary" />
          <Button label="Prijava za agencije" type="primary" />
        </div>
      </div>
    </div>
  );
}

export default AppNavBar;
