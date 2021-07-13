import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Heading: React.VFC<Props> = ({ children }) => {
  return (
    <h1
      className="font-extrabold text-4xl sm:text-4xl lg:text-6xl text-main"
    >
      {children}
    </h1>
  );
};
