import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IInitial {
  bg: string;
  color: string;
}
const initialState: IInitial = {
  bg: "",
  color: "",
};

export const colorSLice = createSlice({
  name: "color",
  initialState,
  reducers: {
    bgSwitch: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.bg = action.payload;
    },

    colorSwitch: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.color = action.payload;
    },
  },
});

export const { bgSwitch, colorSwitch } = colorSLice.actions;
export default colorSLice.reducer;
