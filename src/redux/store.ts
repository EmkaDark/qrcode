import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import dataSlice from "./dataslice";
import textSLice from "./textSlice";
export const store = configureStore({
  reducer: {
    color: colorSlice,
    data: dataSlice,
    text: textSLice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
