import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/space-grotesk/700.css";
import Link from "next/link";
import PromptType from "../types";
import { useRouter } from "next/router";

type Props = {
  emoji: String;
  type: String;
  desc: String;
  color: `#${string}`;
};

const PromptCard: React.FC<Props> = ({ emoji, type, desc, color }) => {
  const router = useRouter();
  return (
    <Flex
      maxW="21rem"
      minH="9.3rem"
      py="0.875rem"
      px="1rem"
      background={color}
      borderRadius="0.5rem"
      border="4px"
      borderStyle="solid"
      borderColor="black"
      boxShadow="2px 4px #000"
      transition="all .2s ease-in-out"
      _hover={{
        transform: "scale(1.1)",
      }}
      onClick={() => {
        router.replace(`/prompt?type=${type}`);
      }}
    >
      <Box
        background="white"
        borderRadius="100rem"
        height="fit-content"
        px="0.5rem"
        py="0.15rem"
        fontSize="1.5rem"
      >
        {emoji}
      </Box>
      <Box pl="0.5rem">
        <Text
          fontFamily="grotesk"
          fontSize="0.5rem"
          fontWeight="700"
          color="black"
        >
          {type == PromptType[PromptType.comeback] && "COMEBACK"}
          {type == PromptType[PromptType.advice] && "TERRIBLE ADVICE"}
          {type == PromptType[PromptType.joke] && "EXPLAIN A JOKE"}
          {type == PromptType[PromptType.sucks] && "WHY DO YOU SUCK AT...?"}
          {type == PromptType[PromptType.endConversation] &&
            "HOW TO END A CONVERSATION"}
          {type == PromptType[PromptType.compliment] &&
            "INSULT IN A COMPLIMENT"}
        </Text>
        <Text
          fontFamily="highman"
          fontSize="2rem"
          letterSpacing="tight"
          lineHeight="2.2rem"
          color="black"
        >
          {desc}
        </Text>
      </Box>
    </Flex>
  );
};

export default PromptCard;
