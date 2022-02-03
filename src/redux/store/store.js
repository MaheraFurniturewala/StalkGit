import { configureStore } from "@reduxjs/toolkit";
import repos from "../slices/githubReposAndUserSlicer";
const store = configureStore({
  reducer: {
    repos,
  },
});

export default store;