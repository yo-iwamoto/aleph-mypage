import React from "react";
import { useRouter } from "framework/react";
import cn from "classnames";

type Props = {
  href: string;
  active?: boolean;
  children: React.ReactNode;
};

export const Link: React.VFC<Props> = ({ href, active, children }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  return (
    <div
      onClick={onClick}
      className={cn({
        ["text-yellow-500"]: active,
      })}
    >
      <a>{children}</a>
    </div>
  );
};
