import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./feature/themeSlice";
import langReducer from "./feature/langSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
  },
});
