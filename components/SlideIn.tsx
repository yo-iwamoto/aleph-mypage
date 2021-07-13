import React, { useEffect, useState } from "react";
import cn from "classnames";

type Props = {
  children: React.ReactNode;
};

export const SlideIn: React.VFC<Props> = ({ children }) => {
  const [transparent, setTransparent] = useState(true);
  useEffect(() => {
    setTransparent(false);
  }, []);

  return (
    <div
      className={cn({
        ["transition-all duration-500 transform"]: true,
        ["opacity-0 translate-y-2"]: transparent,
      })}
    >
      {children}
    </div>
  );
};
