import { configureStore } from "@reduxjs/toolkit";
import creatorReducer from "./slices/CreatorSlice";
import agencyReducer from "./slices/AgencySlice";

export const store = configureStore({
  reducer: {
    creator: creatorReducer,
    agency: agencyReducer,
  },
});
