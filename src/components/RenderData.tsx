import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import React from "react";

import "@/styles/HistoryList.scss";
import QRCode from "react-qr-code";
import { clearData } from "@/redux/dataslice";

const RenderData = () => {
  // const [data, setData] = useState<IData[]>();
  const data = useAppSelector((state) => state.data.data);
  const dispatch = useAppDispatch();
  const clear = () => {
    const result = confirm("Вы уверены?");

    if (result) {
      dispatch(clearData());
    }
  };
  return (
    <div className="container">
      <h2 className="history_heading">Ранее вы генерировали:</h2>
      <button className="history_btn" onClick={clear}>
        Очистить историю
      </button>
      <ul className="history_list">
        {data &&
          data.map((item) => (
            <li key={item.id} className="history_list_item">
              <QRCode
                className="qrcode_history"
                level={"H"}
                value={item.text}
                bgColor={item.color ? item.color : "white"}
                fgColor={item.bgColor ? item.bgColor : "black"}
              ></QRCode>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RenderData;
