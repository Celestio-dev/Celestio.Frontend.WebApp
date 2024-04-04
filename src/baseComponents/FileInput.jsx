import React from "react";
import ErrorIcon from "../assets/icons/error-icon.svg";
import UploadLogo from "../assets/placeHolders/upload-logo.svg";
import UploadImg from "../assets/placeHolders/upload-product-img.svg";

function FileInput(props) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        htmlFor={props.id}
        className="flex flex-col gap-2 hover:cursor-pointer hover:opacity-85"
      >
        <div className="flex ">
          <p className="text-text text-[20px] font-medium">{props.label}</p>
          {!props.notRequired && <p className="text-error">*</p>}
        </div>
        <img
          src={props.id == "image-input" ? UploadImg : UploadLogo}
          alt="upload"
          className={`${props.showError ? "border-error border-[1px]" : ""}`}
        />
      </label>
      <input
        type="file"
        onChange={props.onChange}
        id={props.id}
        className="absolute z-[-1] overflow-hidden h-[0.1px] w-[0.1px] opacity-0"
      />

      {props.showError ? (
        <div className="flex gap-1 justify-start items-center">
          <img src={ErrorIcon} alt="error" />
          <p className="text-error text-[12px] font-medium">
            Fotografija može imati max. 5Mb
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FileInput;
