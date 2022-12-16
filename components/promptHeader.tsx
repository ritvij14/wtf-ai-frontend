import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const PromptHeader = () => {
  return (
    <Flex mx="3%" alignItems="center" color="#308CF8">
      <Text fontFamily="highman" fontSize="3.5rem">
        WTF AI
      </Text>
      <Spacer />
    </Flex>
  );
};

export default PromptHeader;
