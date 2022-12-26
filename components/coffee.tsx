import { Image } from "@chakra-ui/react";
import React, { useEffect } from "react";

const coffee = () => {
  return (
    <div>
      <a
        href="https://www.buymeacoffee.com/heyatomic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{ height: "60px" }}
        />
      </a>
    </div>
  );
};

export default coffee;
