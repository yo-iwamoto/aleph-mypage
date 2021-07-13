import React from "react";
import { useDeno } from "framework/react";

import { Heading } from "@/components/Heading.tsx";

const Page: React.VFC = () => {
  const envValue = useDeno(() => Deno.env.get("ENV_VALUE"));

  return (
    <Heading>{envValue}</Heading>
  );
};
