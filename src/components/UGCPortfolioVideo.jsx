import React from "react";

function UGCPortfolioVideo({ item }) {
  return (
    <div className="flex flex-col justify-end items-center w-[415px] h-[780px] bg-placeholder rounded-[50px]">
      <div className="flex justify-center items-center gap-5 mb-5">
        {item.category.map((category, index) => (
          <div
            key={category}
            className="bg-secondary py-[11px] px-[30px] rounded-[20px] "
          >
            <span className="text-black font-semibold">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UGCPortfolioVideo;
