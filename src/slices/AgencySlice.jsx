import { createSlice } from "@reduxjs/toolkit";

const agencySlice = createSlice({
  name: "agency",
  initialState: {
    brands: [],
    managerName: "",
    selectedBrand: {
      briefs: [],
    },
    loogedInAgency: false,
  },
  reducers: {
    logInAgency(state) {
      state.loogedInAgency = true;
    },
    setAgencyName(state, action) {
      state.name = action.payload;
    },
    setManagerName(state, action) {
      state.managerName = action.payload;
    },

    // Brands
    addBrands(state, action) {
      state.brands = action.payload;
    },
    addSingleBrand(state, action) {
      state.brands.push(action.payload);
    },
    updateBrand(state, action) {
      const index = state.brands.findIndex(
        (brand) => brand.id === action.payload.id
      );
      state.brands[index] = action.payload;
    },
    setSelectedBrand(state, action) {
      state.selectedBrand = state.brands.find(
        (brand) => brand.id === action.payload
      );
    },
    deleteBrand(state, action) {
      state.brands = state.brands.filter(
        (brand) => brand.id !== action.payload
      );
      if (state.selectedBrand.id === action.payload) {
        state.selectedBrand = "";
      }
    },

    // Briefs
    addBriefs(state, action) {
      const index = state.brands.findIndex(
        (brand) => brand.id === action.payload.brandId
      );
      state.brands[index].briefs = action.payload.briefs;
    },
    addSingleBrief(state, action) {
      const index = state.brands.findIndex(
        (brand) => brand.id === action.payload.brandId
      );
      console.log();
      state.brands[index].briefs.push(action.payload);
    },
    updateBrief(state, action) {
      const brandIndex = state.brands.findIndex(
        (brand) => brand.id === action.payload.brandId
      );
      const briefIndex = state.brands[brandIndex].briefs.findIndex(
        (brief) => brief.id === action.payload.id
      );
      state.brands[brandIndex].briefs[briefIndex] = action.payload;
    },
    deleteBrief(state, action) {
      const brandIndex = state.brands.findIndex(
        (brand) => brand.id === action.payload.brandId
      );

      state.brands[brandIndex].briefs = state.brands[brandIndex].briefs.filter(
        (brief) => brief.id !== action.payload.briefId
      );
      if (state.selectedBrand.id === action.payload.brandId) {
        state.selectedBrand.briefs = state.selectedBrand.briefs.filter(
          (brief) => brief.id !== action.payload.briefId
        );
      }
    },

    logOutAgency(state) {
      state.loogedInAgency = false;
      state.brands = [];
      state.managerName = "";
      state.selectedBrand = {
        briefs: [],
      };
    },
  },
});

export const {
  logInAgency,
  logOutAgency,
  addBrands,
  setSelectedBrand,
  setAgencyName,
  addSingleBrand,
  setManagerName,
  updateBrand,
  addBriefs,
  addSingleBrief,
  updateBrief,
  deleteBrand,
  deleteBrief,
} = agencySlice.actions;
export default agencySlice.reducer;
