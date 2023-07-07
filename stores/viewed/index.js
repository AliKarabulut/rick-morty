import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  viewed: [],
};

export const getViewed = createAsyncThunk("viewed/getViewed", async (id) => {
  // I'm picking up a character as if we've looked at it before

  const res = await fetch("/api/getCharacter", {
    method: "GET",
    body: JSON.stringify(id),
  });

  return res;
});

export const updateRecentlyViewed = createAsyncThunk(
  "viewed/updateRecentlyViewed",
  async ({ newCharacter }, thunkAPI) => {
    const viewed = thunkAPI.getState().viewed.viewed;
    const merged = [...new Set([...viewed, ...newCharacter])];

    // Suppose we sent a request to the server :)

    return merged;
  }
);

export const { actions, reducer } = createSlice({
  name: "viewed",
  initialState: initialState,
  reducers: {
    deleteviewed: (state, action) => {
      const filteredArray = state.viewed.filter(
        (item) => item.id !== action.payload.id
      );
      state.viewed = filteredArray;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getViewed.fulfilled, (state, action) => {
      const merged = [
        ...new Set([...state.viewed, ...action.payload.data.character]),
      ];
      state.viewed = merged;
    });

    builder.addCase(updateRecentlyViewed.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = error.message;
      } else {
        state.viewed = action.payload;
      }
    });
    builder.addCase(updateRecentlyViewed.rejected, (state, action) => {
      state.error = action.payload.error.message;
    });
  },
});
