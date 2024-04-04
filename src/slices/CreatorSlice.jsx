import { createSlice } from "@reduxjs/toolkit";

const creatorSlice = createSlice({
  name: "creator",
  initialState: {
    name: "",
    loogedInCreator: false,
    categories: [],
    videos: [
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
    ],
  },
  reducers: {
    logInCreator(state) {
      state.loogedInCreator = true;
    },
    setCreatorName(state, action) {
      state.name = action.payload;
    },
    addCategories(state, action) {
      state.categories = action.payload;
    },
    addNewVideo(state, action) {
      state.videos.push(action.payload);
    },
    deleteVideo(state, action) {
      state.videos = state.videos.filter(
        (video) => video.id !== action.payload
      );
    },
    logOutCreator(state) {
      state.loogedInCreator = false;
    },
  },
});

export const {
  logInCreator,
  logOutCreator,
  addCategories,
  setCreatorName,
  deleteVideo,
  addNewVideo,
} = creatorSlice.actions;
export default creatorSlice.reducer;
