import React from "react";
import Paragraph from "../baseComponents/Paragraph";
import DownArrow from "../assets/icons/down-arrow.svg";
import UpArrow from "../assets/icons/up-arrow.svg";
import RemoveIcon from "../assets/icons/remove-icon.svg";
import { useState } from "react";

const categoriesTmp = [
  "Kategorija 1",
  "Kategorija 2",
  "Kategorija 3",
  "Kategorija 4",
  "Kategorija 5",
  "Kategorija 6",
  "Kategorija 7",
  "Kategorija 8",
  "Kategorija 9",
  "Kategorija 10",
];

function EditCategories({ selectedCategories, setSelectedCategories }) {
  const [open, setOpen] = useState(false);
  const selectedCategoriesTmp = selectedCategories || [];

  return (
    <div className="relative">
      <div
        className="flex justify-center bg-white items-center gap-4 border-[1px] border-light-text rounded-3xl px-[30px] py-[11px] hover:cursor-pointer hover:opacity-85"
        onClick={() => setOpen(!open)}
      >
        <Paragraph app className="font-semibold ">
          Kategorije
        </Paragraph>
        <img src={open ? UpArrow : DownArrow} alt="User" />
      </div>
      {open && (
        <div className="absolute z-50 bg-white flex flex-col rounded-xl  border-light-text border-[1px] w-full">
          {categoriesTmp.map(
            (category, index) =>
              !selectedCategoriesTmp.includes(category) && (
                <button
                  key={category}
                  onClick={() => {
                    if (selectedCategories.length <= 4) {
                      setSelectedCategories([...selectedCategories, category]);
                    } else {
                      alert("Maksimalno 5 kategorija");
                    }

                    setOpen(false);
                  }}
                  className="px-0 py-0"
                >
                  <Paragraph
                    app
                    className={`font-semibold hover:opacity-85  px-5 py-2 hover:cursor-pointer ${
                      index !== categoriesTmp.length - 1 &&
                      "border-b-light-text border-b-[1px]"
                    }`}
                  >
                    {category}
                  </Paragraph>
                </button>
              )
          )}
        </div>
      )}
      {selectedCategoriesTmp.length > 0 && (
        <div className="mt-2 flex gap-2 z-10 flex-col">
          {selectedCategories.map((category) => (
            <div
              key={category}
              className="flex justify-center items-center gap-4 z-10 border-[1px] bg-white border-light-text rounded-3xl px-[30px] py-[11px] hover:cursor-pointer hover:opacity-85"
            >
              <Paragraph app className="font-semibold">
                {category}
              </Paragraph>
              <img
                src={RemoveIcon}
                onClick={() =>
                  setSelectedCategories(
                    selectedCategories.filter((item) => item !== category)
                  )
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EditCategories;
