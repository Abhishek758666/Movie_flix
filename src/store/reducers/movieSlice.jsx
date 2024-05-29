import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMovie: (state, action) => {
      state.info = action.payload;
    },
    removeDetail: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadMovie, removeDetail } = movieSlice.actions;

export default movieSlice.reducer;
