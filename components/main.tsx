import React, { ReactNode } from "react";
import { sans, brand, logo } from "@/styles/fonts/font";

type MainProps = {
  children: ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className={`${sans.variable} ${brand.variable} ${logo.variable}`}>{children}</main>;
};

export default Main;
