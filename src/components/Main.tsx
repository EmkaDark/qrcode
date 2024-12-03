import React, { FC } from "react";
type IProps = {
  children: React.ReactNode;
};
const Main: FC<IProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
