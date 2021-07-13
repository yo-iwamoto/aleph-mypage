import React from "react";
import { useRouter } from "framework/react";

import { Link } from "@/components/Link.tsx";

import { headerMenu } from "@/lib/headerMenu.ts";

export const Header: React.VFC = () => {
  const router = useRouter();

  return (
    <header
      className="flex items-center justify-between px-4 py-8 w-full md:w-4/5 mx-auto"
    >
      <Link href="/">
        <h1 className="font-bold text-main text-2xl sm:text-3xl">
          Iwamoto Yo
        </h1>
      </Link>
      <nav className="flex justify-end">
        {headerMenu.map((menu, index) => (
          <div className="px-2 text-lg sm:text-xl" key={index}>
            <Link
              href={menu.href}
              active={router.pathname === menu.href}
            >
              {menu.name}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};
