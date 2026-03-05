"use client";

import React from "react";
import Typewriter from "typewriter-effect";

interface Props {
  titles: string[];
}

const DynamicTyping: React.FC<Props> = ({ titles }) => {
  return (
    <Typewriter
      options={{
        strings: titles,
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 70,
        wrapperClassName: "typewriter-text", // Add custom CSS class for specific styling
      }}
    />
  );
};

export default DynamicTyping;