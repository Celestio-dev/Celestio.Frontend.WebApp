import React from "react";
import ErrorIcon from "../assets/icons/error-icon.svg";

function InputField(props) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex">
        <label className="text-text text-[20px] font-medium">
          {props.label}
        </label>
        {!props.notRequired && <p className="text-error">*</p>}
      </div>
      {props.type === "textarea" ? (
        <textarea
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className={`w-full border-[1px] border-light-text rounded-[20px] py-[11px] px-[20px] font-[20px] focus:outline-none focus:border-primary ${
            props.className && props.className
          }`}
        />
      ) : (
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className={`w-full border-[1px] border-light-text rounded-[20px] py-[11px] px-[20px] font-[20px] focus:outline-none focus:border-primary ${
            props.className && props.className
          }`}
        />
      )}
      {props.showError && !props.notRequired ? (
        <div className="flex gap-1 justify-start items-center">
          <img src={ErrorIcon} alt="error" />
          <p className="text-error text-[12px] font-medium">
            {!props.errorMessage
              ? "Molimo unesite ispravne podatke"
              : props.errorMessage}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputField;
