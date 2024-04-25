"use client";

import { createSlice } from "@reduxjs/toolkit";

// localStorage.clear();

const initialState = localStorage?.getItem("watchlist")
  ? JSON.parse(localStorage.getItem("watchlist") || "{[]}")
  : [];

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state));
    },
    removeFromWatchlist: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
      localStorage.setItem("watchlist", JSON.stringify(state));
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export const watchlistSliceReducer = watchlistSlice.reducer;
