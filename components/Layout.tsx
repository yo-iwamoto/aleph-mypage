import React from "react";
import { Header } from "@/components/Header.tsx";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="text-center text-main">
        {children}
      </div>
    </>
  );
};
