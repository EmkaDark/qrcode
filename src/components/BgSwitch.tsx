import { bgSwitch } from "@/redux/colorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { cleanText } from "@/redux/textSlice";
import React, { ChangeEvent } from "react";

const BgSwitch = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.color.bg);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(bgSwitch(e.target.value));

    dispatch(cleanText());
  };
  return (
    <div>
      <input type="color" value={color} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default BgSwitch;
