import React from "react";

function InputField(props) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex">
        <label className="text-text text-[20px] font-medium">
          {props.label}
        </label>
        <p className="text-error">*</p>
      </div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="w-full border-[1px] border-light-text rounded-[20px] py-[11px] px-[20px] font-[20px] focus:outline-none focus:border-primary"
      />
    </div>
  );
}

export default InputField;
