import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadtv: (state, action) => {
      state.info = action.payload;
    },
    removeDetail: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadtv, removeDetail } = tvSlice.actions;

export default tvSlice.reducer;
