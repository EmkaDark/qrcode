"use client";
import React, { ChangeEvent, useState } from "react";
import QRCode from "qrcode";
import BasicInput from "./ui/BasicInput";
import Liveqr from "./Liveqr";
import "@/styles/QR.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { addData } from "@/redux/dataslice";
import ColorMenu from "./ColorMenu";
import { addText, cleanText } from "@/redux/textSlice";

export interface IVers {
  data: boolean;
  url: boolean;
  allow: boolean;
}
const IVers = {
  data: false,
  url: false,
  allow: false,
};
const QRGroup = () => {
  const [qrCode, setQrCode] = useState("");

  const qrText = useAppSelector((state) => state.text.text);
  const [vers, setVers] = useState<IVers>({ ...IVers, url: true });

  const bgColor = useAppSelector((state) => state.color.bg);
  const color = useAppSelector((state) => state.color.color);
  const dispatch = useAppDispatch();

  const generateQrCode = () => {
    QRCode.toDataURL(
      qrText,
      {
        width: 90,
        color: {
          dark: bgColor,
          light: color,
        },
      },
      (err, url) => {
        if (err) return console.log(err);

        setQrCode(url);
      }
    );
  };
  const handleDownloadClick = () => {
    // Диспатчим действие addData с qrText
    const storedData = window.localStorage.getItem("codes");
    const data = storedData ? JSON.parse(storedData) : [];
    if (data.length > 10) {
      data.pop();
    }
    data.unshift({ text: qrText, id: Math.random(), bgColor, color });

    window.localStorage.setItem("codes", JSON.stringify(data));
    dispatch(addData({ text: qrText, id: Math.random(), bgColor, color }));
  };
  const handleQrURLCode = (e: ChangeEvent<HTMLInputElement>) => {
    let inputText = e.target.value;
    // Проверяем, начинается ли введенная строка с https://
    if (!inputText.startsWith("https://")) {
      inputText = "https://".concat(inputText); // Если нет, добавляем https://
    }

    dispatch(addText(inputText));

    generateQrCode();
  };
  const handleDataQrCode = (e: ChangeEvent<HTMLInputElement>) => {
    let inputText = e.target.value;

    // Убираем все символы { и } внутри строки
    inputText = inputText.replace(/[{}]/g, "");

    // Проверяем, начинается ли строка с {
    if (!inputText.startsWith("{")) {
      inputText = "{".concat(inputText); // Если нет, добавляем {
    }

    // Проверяем, заканчивается ли строка на }
    if (!inputText.endsWith("}")) {
      inputText = inputText.concat("}"); // Если нет, добавляем }
    }

    // Обновляем состояние с новой строкой
    dispatch(addText(inputText));

    // Генерируем новый QR-код с обновленным текстом
    generateQrCode();
  };
  const handleQRText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addText(e.target.value));

    // Генерируем новый QR-код с обновленным текстом
    generateQrCode();
  };

  return (
    <div className="qr_group">
      <ColorMenu></ColorMenu>
      <div className="qr_img">
        <Liveqr value={qrText}></Liveqr>
      </div>

      <a
        className={`qr_download ${qrText ? "active" : ""}`}
        href={qrCode}
        download={`${qrText}.png`}
        onClick={handleDownloadClick}
      >
        Скачать QR
      </a>
      <div className="buttons_group">
        <button
          className={vers.data ? "active" : ""}
          onClick={() => {
            setVers({ ...IVers, data: true });
            dispatch(cleanText());
          }}
        >
          Данные
        </button>
        <button
          className={vers.url ? "active" : ""}
          onClick={() => {
            setVers({ ...IVers, url: true });
            dispatch(cleanText());
          }}
        >
          ссылка
        </button>
        <button
          className={vers.allow ? "active" : ""}
          onClick={() => {
            setVers({ ...IVers, allow: true });
            dispatch(cleanText());
          }}
        >
          другое
        </button>
      </div>
      {vers.data && (
        <>
          <b className="input_data">Введите данные</b>
          <BasicInput
            type={"text"}
            value={qrText}
            onChange={handleDataQrCode}
            vers={vers}
          ></BasicInput>
        </>
      )}
      {vers.url && (
        <>
          <b className="input_data">Введите ссылку</b>
          <BasicInput
            type={"text"}
            value={qrText}
            onChange={handleQrURLCode}
            vers={vers}
          ></BasicInput>
        </>
      )}
      {vers.allow && (
        <>
          <b className="input_data">Введите информацию</b>
          <BasicInput
            type={"text"}
            value={qrText}
            onChange={handleQRText}
            vers={vers}
          ></BasicInput>
        </>
      )}
    </div>
  );
};

export default QRGroup;
