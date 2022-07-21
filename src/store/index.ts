import { githubApi } from './github/github-api';
import { configureStore } from "@reduxjs/toolkit";

export const store: any = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  }
})