import React from "react";
import Paragraph from "../baseComponents/Paragraph";
import Button from "../baseComponents/Button";
import ImgPlaceholder from "../assets/placeHolders/img-placeholder.svg";
import FolderIcon from "../assets/icons/folder-icon.svg";
import AppHeading from "../baseComponents/AppHeading";

function Brief(props) {
  return (
    <div className="bg-secondary flex w-[900px] items-center justify-start gap-5 p-6 rounded-[35px]">
      <div className="flex justify-start items-start h-full">
        <img src={ImgPlaceholder} alt="upload product" />
      </div>
      <div className="flex flex-col gap-5 w-full justify-start items-start h-full">
        <AppHeading>{props.brandName}</AppHeading>
        <div className="flex gap-5 items-center w-full">
          <div className="flex items-center gap-2">
            <img src={FolderIcon} alt="price tag" />
            <Paragraph app>
              {props.numOfSubmissions} objavljenih UGC zahtjeva
            </Paragraph>
          </div>
        </div>

        <Paragraph app>{props.description}</Paragraph>
        <div className="flex justify-end items-end h-full w-full">
          <Button label={props.btn} type="primary" />
        </div>
      </div>
    </div>
  );
}

export default Brief;
