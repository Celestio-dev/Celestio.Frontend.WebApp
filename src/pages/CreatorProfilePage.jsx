import React from "react";
import DashboardProfileDetails from "../components/DashboardProfileDetails";
import AppHeading from "../baseComponents/AppHeading";
import UGCPortfolioVideo from "../components/UGCPortfolioVideo";
import { useState } from "react";

const videos = [
  {
    id: 1,
    category: ["#kategorija", "#kategorija2"],
    video: "video",
  },
  {
    id: 2,
    category: ["#kategorija1", "#kategorija2"],
    video: "video",
  },
  {
    id: 3,
    category: ["#kategorija2", "#kategorija"],
    video: "video",
  },
  ,
  {
    id: 4,
    category: ["#kategorija3", "#kategorija4"],
    video: "video",
  },
  {
    id: 5,
    category: ["#kategorija4", "#kategorija3"],
    video: "video",
  },
  {
    id: 6,
    category: ["#kategorija", "#kategorija4"],
    video: "video",
  },
];

function CreatorProfilePage() {
  const categories = [];
  const [selectedCategory, setSelectedCategory] = useState("");

  videos.forEach((item) => item.category.map((cat) => categories.push(cat)));

  const uniqueCategories = [...new Set(categories)];

  const handleCategoryClick = (e) => {
    setSelectedCategory(e.target.innerText);
  };

  return (
    <div className="flex justify-between w-full gap-12">
      <DashboardProfileDetails name="Ime Prezime" type="creator" />
      <div className="flex flex-col gap-5">
        <AppHeading>UGC Portfolio</AppHeading>
        <div className="flex gap-5">
          {uniqueCategories.map((category, index) => (
            <span
              key={index}
              className={`${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-black"
              } py-[11px] px-[30px] rounded-[20px]  font-semibold hover:opacity-65 hover:cursor-pointer`}
              onClick={handleCategoryClick}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="flex w-full flex-wrap gap-5 justify-between">
          {videos.map((item, index) =>
            selectedCategory === "" ||
            item.category.includes(selectedCategory) ? (
              <UGCPortfolioVideo item={item} key={item.id} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatorProfilePage;
