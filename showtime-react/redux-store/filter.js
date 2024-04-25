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
    sort: [],
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
      if (action.payload.checked) state.filter.sort.push(action.payload);
      else {
        let index = copy[`${property}`].indexOf(e.target.value);
        //     copy[`${property}`].splice(index, 1);
      }
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
} = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer;
