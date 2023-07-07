import { configureStore } from "@reduxjs/toolkit";
import { reducer as recentlyViewed } from "./viewed";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      viewed: recentlyViewed,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
