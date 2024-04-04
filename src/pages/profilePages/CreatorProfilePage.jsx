import React from "react";
import DashboardProfileDetails from "../../components/DashboardProfileDetails";
import AppHeading from "../../baseComponents/AppHeading";
import UGCPortfolioVideo from "../../components/UGCPortfolioVideo";
import { useState } from "react";
import { useSelector } from "react-redux";

function CreatorProfilePage() {
  const categories = [];
  const [selectedCategory, setSelectedCategory] = useState("");
  const creator = useSelector((state) => state.creator);
  const videos = creator.videos;

  videos.forEach((item) => item.category.map((cat) => categories.push(cat)));

  const uniqueCategories = [...new Set(categories)];

  const handleCategoryClick = (e) => {
    setSelectedCategory(e.target.innerText);
  };

  return (
    <div className="flex justify-between w-full gap-12">
      <DashboardProfileDetails data={creator} type="creator" />
      <div className="flex flex-col gap-5 w-[75%]">
        <AppHeading>UGC Portfolio</AppHeading>
        <div className="flex gap-5 flex-wrap">
          {uniqueCategories.map((category, index) => (
            <span
              key={index}
              className={`${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-black"
              } py-[11px] px-[30px] rounded-[20px] font-semibold hover:cursor-pointer`}
              onClick={handleCategoryClick}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="flex w-full flex-wrap gap-5 justify-between">
          <UGCPortfolioVideo addNew />
          {videos.map((video) =>
            selectedCategory === "" ||
            video.category.includes(selectedCategory) ? (
              <UGCPortfolioVideo video={video} key={video.id} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatorProfilePage;
