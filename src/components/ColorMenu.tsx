import React, { useState } from "react";
import BgSwitch from "./BgSwitch";
import BackgroundSwitch from "./ColorSwitch";
import "@/styles/ColorMenu.scss";
import { IoIosSettings } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const ColorMenu = () => {
  const [active, setActive] = useState<boolean>(false);

  const changeHandler = () => {
    console.log("wdawd");

    setActive((prev) => !prev);
  };
  return (
    <div className="color">
      <button onClick={changeHandler} className="openBtn">
        <IoIosSettings className="lolo" />
      </button>
      {active && (
        <div className="color_menu">
          <button className="close" onClick={changeHandler}>
            <IoMdCloseCircle className="closeImg" />
          </button>
          <div className="color_group">
            <p className="color_title">Цвет переднего плана</p>
            <BgSwitch />
          </div>
          <div className="color_group">
            <p className="color_title">Цвет фона</p>
            <BackgroundSwitch />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorMenu;
