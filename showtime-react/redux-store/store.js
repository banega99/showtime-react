"use client";

import { configureStore } from "@reduxjs/toolkit";
import { watchlistSliceReducer } from "./watchlist";
import { filterSliceReducer } from "./filter";

const store = configureStore({
  reducer: {
    watchlist: watchlistSliceReducer,
    filter: filterSliceReducer,
  },
});

export default store;
