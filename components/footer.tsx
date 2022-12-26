import { Flex, Spacer, Text } from "@chakra-ui/react";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import { FaTwitter } from "react-icons/fa";
import React from "react";
import BuyMeACoffeeWidget from "./coffee";

const Footer = () => {
  return (
    <Flex
      pt="3.125rem"
      pb="1.25rem"
      pl="9%"
      pr="2%"
      alignItems="center"
      flexDir={{ base: "column", sm: "row" }}
    >
      <Text
        fontFamily="grotesk"
        fontWeight="700"
        fontSize="1rem"
        color="#308CF8"
      >
        made with love at makerdock
      </Text>
      <Spacer />
      <a
        href="https://twitter.com/makerdock_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex>
          <FaTwitter color="#308CF8" size="1.5rem" />
          <Text
            ml={1}
            fontFamily="grotesk"
            fontWeight="400"
            fontSize="1rem"
            color="black"
          >
            @makerdock
          </Text>
        </Flex>
      </a>
      <Spacer />
      <BuyMeACoffeeWidget />
    </Flex>
  );
};

export default Footer;
