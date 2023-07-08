import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewed: [],
};

export const { actions, reducer } = createSlice({
  name: "viewed",
  initialState: initialState,
  reducers: {
    addviewed: (state, action) => {
      const { id, name, image, status } = action.payload;

      const existingItem = state.viewed.find((item) => item.id === id);
      if (existingItem) {
        return;
      } else {
        const merged = [...state.viewed, { id, name, image, status }];
        state.viewed = merged;
      }
    },
  },
});
