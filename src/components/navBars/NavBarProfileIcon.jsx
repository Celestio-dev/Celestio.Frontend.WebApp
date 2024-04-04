import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "../../baseComponents/Paragraph";
import UserIcon from "../../assets/icons/user.svg";
import { useDispatch } from "react-redux";
import { logOutCreator } from "../../slices/CreatorSlice";
import { logOutAgency, setSelectedBrand } from "../../slices/AgencySlice";
import { useState } from "react";

function NavBarProfileIcon(props) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const loogOutHandler = () => {
    dispatch(logOutCreator());
    dispatch(logOutAgency());
  };

  const profileHandler = () => {
    setOpen(false);
    dispatch(setSelectedBrand(""));
  };

  return (
    <div className="relative ">
      <img
        src={UserIcon}
        alt="User"
        onClick={() => setOpen(!open)}
        className="px-[14px] py-[10px] rounded-full bg-white hover:cursor-pointer hover:opacity-85 "
      />
      {open && (
        <div className="absolute bg-secondary flex flex-col   rounded-xl  border-light-text border-[1px] mt-2 ml-[-30px]">
          <Link to={props.type === "creator" ? "/app/creator" : "/app/agency"}>
            <Paragraph
              app
              className="font-semibold hover:opacity-85 border-b-light-text border-b-[1px] px-5 py-2"
            >
              Profil
            </Paragraph>
          </Link>
          <Link
            to={
              props.type === "creator"
                ? "/app/creator/edit"
                : "/app/agency/edit"
            }
          >
            <Paragraph
              app
              className="font-semibold hover:opacity-85 border-b-light-text border-b-[1px] px-5 py-2 "
            >
              Postavke
            </Paragraph>
          </Link>
          <button onClick={loogOutHandler}>
            <Paragraph app className="font-semibold hover:opacity-85 px-5 py-2">
              Odjavi se
            </Paragraph>
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBarProfileIcon;
