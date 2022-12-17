import { Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PromptHeader = () => {
  return (
    <Flex mx="3%" alignItems="center" color="#308CF8">
      <Link href="/">
        <Text fontFamily="highman" fontSize="3.5rem">
          WTF AI
        </Text>
      </Link>
      <Spacer />
    </Flex>
  );
};

export default PromptHeader;
