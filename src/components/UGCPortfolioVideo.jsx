import React from "react";
import EditCategories from "./EditCategories";
import { useState } from "react";
import TrashCanIcon from "../assets/icons/trashcan-icon.svg";
import { deleteVideo, addNewVideo } from "../slices/CreatorSlice";
import { useDispatch } from "react-redux";
import Button from "../baseComponents/Button";
import UploadNewVidImg from "../assets/placeHolders/upload-new-video.svg";

function UGCPortfolioVideo({ video, addNew }) {
  const dispatch = useDispatch();

  const [selectedCategories, setSelectedCategories] = useState(
    !addNew ? video.category : []
  );

  const newVideoId = Math.random();

  const handleVideoDelete = () => {
    dispatch(deleteVideo(video.id));
  };

  const newVideoHandler = () => {
    if (selectedCategories.length === 0)
      return alert("Odaberite barem jednu kategoriju");
    setSelectedCategories([]);

    dispatch(
      addNewVideo({
        category: selectedCategories,
        id: Math.random(),
        video: "video",
      })
    );
  };

  return (
    <div className="flex flex-col justify-between items-center w-[440px] h-[780px] bg-placeholder rounded-[50px] p-8">
      <div className="flex flex-row justify-between items-start gap-8  w-full">
        <EditCategories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        {addNew && (
          <Button type="primary" label="Objavi" onClick={newVideoHandler} />
        )}
      </div>
      {addNew && (
        <div>
          <label
            htmlFor={newVideoId}
            className="flex flex-col justify-center items-center gap-2 hover:cursor-pointer hover:opacity-85 h-full w-full"
          >
            <img src={UploadNewVidImg} alt="upload" />
          </label>
          <input
            type="file"
            onChange={() => setNewVideo(e.target.value)}
            id={newVideoId}
            className="absolute z-[-1] overflow-hidden h-[0.1px] w-[0.1px] opacity-0"
          />
        </div>
      )}
      <div className="flex flex-col items-end justify-center w-full">
        {!addNew && (
          <button onClick={handleVideoDelete}>
            <img
              src={TrashCanIcon}
              alt="Trash can"
              className="bg-white rounded-full p-4 hover:cursor-pointer hover:opacity-85"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default UGCPortfolioVideo;
