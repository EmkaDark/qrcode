import React, { ChangeEvent, FC } from "react";
import "@/styles/input.scss";
import { IVers } from "../QRGroup";
interface IProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  vers: IVers;
}
const BasicInput: FC<IProps> = ({ type, value, onChange, vers }) => {
  return (
    <div>
      <label className="label" htmlFor={"#qr"}>
        {vers.data && (
          <input
            className="input"
            type={type}
            id="qr"
            value={value}
            onChange={onChange}
          />
        )}
        {vers.url && (
          <input
            className="input"
            type={type}
            id="qr"
            value={value}
            onChange={onChange}
          />
        )}
        {vers.allow && (
          <input
            className="input"
            type={type}
            id="qr"
            value={value}
            onChange={onChange}
          />
        )}
      </label>
    </div>
  );
};

export default BasicInput;
