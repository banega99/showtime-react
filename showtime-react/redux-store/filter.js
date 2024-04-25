import { createSlice } from "@reduxjs/toolkit";

function genericSet(state, action, prop) {
  const { value, checked } = action.payload;
  if (checked && !state.filter[`${prop}`]?.includes(value))
    state.filter[`${prop}`].push(value);
  else if (!checked && state.filter[`${prop}`]?.includes(value)) {
    const index = state.filter.genres.indexOf(value);
    state.filter[`${prop}`].splice(index, 1);
  }
}

const initialState = {
  filter: {
    genres: [],
    years: [],
    countries: [],
    companies: [],
    sort: "popularity.desc",
    languages: [],
    page: 1,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterData: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    resetFilterData: () => {
      return initialState;
    },
    setGenres: (state, action) => {
      genericSet(state, action, "genres");
    },
    setYears: (state, action) => {
      genericSet(state, action, "years");
    },
    setCountries: (state, action) => {
      genericSet(state, action, "countries");
    },
    setCompanies: (state, action) => {
      genericSet(state, action, "genres");
    },
    setSort: (state, action) => {
      state.filter.sort = action.payload.value;
    },
    setLanguages: (state, action) => {
      genericSet(state, action, "languages");
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  setFilterData,
  resetFilterData,
  setGenres,
  setCountries,
  setYears,
  setLanguages,
  setSort,
} = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer;
