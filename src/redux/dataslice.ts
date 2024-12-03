import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Idata {
  text: string;
  id: number;
  color: string;
  bgColor: string;
}
interface IInitial {
  data: Idata[];
}
const initialState: IInitial = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Idata>) => {
      if (state.data) {
        if (state.data.length >= 10) {
          state.data.pop();
        }
        state.data.unshift({
          text: action.payload.text,
          id: Math.random(),
          color: action.payload.color,
          bgColor: action.payload.bgColor,
        });
      }
    },
    getData: (state) => {
      const localData = window.localStorage.getItem("codes");
      let datar: Idata[] = localData ? JSON.parse(localData) : [];
      if (datar.length > 10) {
        datar = datar.slice(0, 10).reverse();
        // datar.reverse();
        console.log(state.data, "slice");
      }
      state.data = datar;
    },
    clearData: (state) => {
      state.data = [];
      window.localStorage.removeItem("codes");
    },
  },
});

export const { addData, getData, clearData } = dataSlice.actions;
export default dataSlice.reducer;
