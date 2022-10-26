import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) || false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = true;
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
    defaultTheme: (state) => {
      state.theme = false;
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
    toggleTheme: (state, action) => {
      const currentTheme = action.payload;
      state.theme = !currentTheme;
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});

export const { changeTheme, defaultTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
