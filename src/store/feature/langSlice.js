import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  langToggle: false,
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang: (state) => {
      state.langToggle = !state.langToggle;
    },
    closeLang: (state) => {
      state.langToggle = false;
    },
  },
});

export const { toggleLang, closeLang } = langSlice.actions;
export default langSlice.reducer;
