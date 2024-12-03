import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IText {
  text: string;
}

const initialState: IText = {
  text: "",
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    cleanText: (state) => {
      console.log("switched");

      state.text = "";
    },
  },
});

export const { addText, cleanText } = textSlice.actions;
export default textSlice.reducer;
