import { getData } from "@/redux/dataslice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import React, { FC, useEffect } from "react";
type IProps = {
  children: React.ReactNode;
};
const Layout: FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [getData]);
  return <>{children}</>;
};

export default Layout;
