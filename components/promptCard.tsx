import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/space-grotesk/700.css";
import Link from "next/link";
import PromptType from "../types";

type Props = {
  emoji: String;
  type: PromptType;
  desc: String;
  color: `#${string}`;
};

const PromptCard: React.FC<Props> = ({ emoji, type, desc, color }) => {
  return (
    <Link href={{ pathname: "/prompt", query: { type: PromptType[type] } }}>
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
            {type == PromptType.comeback && "COMEBACK"}
            {type == PromptType.advice && "TERRIBLE ADVICE"}
            {type == PromptType.joke && "EXPLAIN A JOKE"}
            {type == PromptType.sucks && "WHY DO YOU SUCK AT...?"}
            {type == PromptType.endConversation && "HOW TO END A CONVERSATION"}
            {type == PromptType.compliment && "INSULT IN A COMPLIMENT"}
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
    </Link>
  );
};

export default PromptCard;
