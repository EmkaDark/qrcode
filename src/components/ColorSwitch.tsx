import { colorSwitch } from "@/redux/colorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { cleanText } from "@/redux/textSlice";
import React, { ChangeEvent } from "react";

const BackgroundSwitch = () => {
  const dipatch = useAppDispatch();
  const color = useAppSelector((state) => state.color.color);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dipatch(colorSwitch(e.target.value));
    console.log("switccc");

    dipatch(cleanText());
  };
  return (
    <div>
      <input type="color" value={color} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default BackgroundSwitch;
