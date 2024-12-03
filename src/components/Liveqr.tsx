import React from "react";
import QRCode from "react-qr-code";
import { useAppSelector } from "@/redux/hooks/hooks";
const Liveqr = ({ value }: { value: string }) => {
  const bgColor = useAppSelector((state) => state.color.bg);
  const color = useAppSelector((state) => state.color.color);

  return (
    <QRCode
      level={"H"}
      value={value}
      bgColor={color ? color : "white"}
      fgColor={bgColor ? bgColor : "black"}
    ></QRCode>
  );
};

export default Liveqr;
