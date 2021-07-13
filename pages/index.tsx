import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa.js";

import { Heading } from "@/components/Heading.tsx";
import { SlideIn } from "@/components/SlideIn.tsx";

const Page: React.VFC = () => {
  return (
    <SlideIn>
      <div className="h-12"></div>
      <Heading>Iwamoto Yo 👓</Heading>
      <div className="h-16"></div>
      <div className="flex justify-between items-center w-64 mx-auto">
        <div className="flex flex-col items-center">
          <a href="https://github.com/you-5805" target="_blank">
            <FaGithub size="64" />
          </a>
          <p className="text-lg text-gray-500">@you-5805</p>
        </div>

        <div className="flex flex-col items-center">
          <a href="https://twitter.com/you_5805" target="_blank">
            <FaTwitter size="64" color="skyblue" />
          </a>
          <p className="text-lg text-gray-500">@you_5805</p>
        </div>
      </div>
    </SlideIn>
  );
};

export default Page;
