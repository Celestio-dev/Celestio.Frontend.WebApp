import React, { useEffect } from "react";
import Logo from "../../baseComponents/Logo";
import NavBarProfileIcon from "./NavBarProfileIcon";
import Paragraph from "../../baseComponents/Paragraph";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedBrand } from "../../slices/AgencySlice";
import { useSelector } from "react-redux";
import DownArrow from "../../assets/icons/down-arrow.svg";
import UpArrow from "../../assets/icons/up-arrow.svg";

function AgencyNavBar() {
  const [open, setOpen] = useState(false);
  const brands = useSelector((state) => state.agency.brands);
  const selectedBrand = useSelector((state) => state.agency.selectedBrand);

  const dispatch = useDispatch();

  return (
    <div className="bg-secondary flex justify-center">
      <div className="w-[1280px] flex justify-between items-center py-4">
        <Logo />
        <div className="flex justify-center gap-[30px] items-center">
          {selectedBrand != "" && (
            <Link to="brand">
              <Paragraph
                app
                className="font-semibold hover:border-b-[1px] hover:pb-[3px]"
              >
                Profil brenda
              </Paragraph>
            </Link>
          )}
          <div className="relative ">
            <div
              className="flex justify-start items-center gap-4 border-[1px] border-light-text rounded-3xl px-[30px] py-[11px] hover:cursor-pointer hover:opacity-85"
              onClick={() => setOpen(!open)}
            >
              <Paragraph app className="font-semibold ">
                {selectedBrand.name ? selectedBrand.name : "Odaberi brend"}
              </Paragraph>
              <img src={open ? UpArrow : DownArrow} alt="User" />
            </div>
            {open && (
              <div className="absolute bg-secondary flex flex-col rounded-xl  border-light-text border-[1px] w-full">
                {brands.map(
                  (brand, index) =>
                    brand.name !== selectedBrand.name && (
                      <button
                        key={brand.id}
                        onClick={() => {
                          setOpen(false);
                          dispatch(setSelectedBrand(brand.id));
                        }}
                        className="px-0 py-0"
                      >
                        <Paragraph
                          app
                          className={`font-semibold hover:opacity-85  px-5 py-2 hover:cursor-pointer ${
                            index !== brands.length - 1 &&
                            "border-b-light-text border-b-[1px]"
                          }`}
                        >
                          {brand.name}
                        </Paragraph>
                      </button>
                    )
                )}
              </div>
            )}
          </div>
          <NavBarProfileIcon type="agency" />
        </div>
      </div>
    </div>
  );
}

export default AgencyNavBar;
