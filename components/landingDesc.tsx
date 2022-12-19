import React from "react";
import { Box, Button, Flex, Text, Wrap } from "@chakra-ui/react";
import PromptCard from "./promptCard";
import { BsArrowRight } from "react-icons/bs";
import PromptType from "../types";
import { useRouter } from "next/router";

const LandingDesc = () => {
  const options = [
    {
      color: "FFD503",
      desc: "A perfect comeback for every A##h%e out there",
      emoji: "🤬",
      type: PromptType.comeback,
    },
    {
      color: "F78166",
      desc: "Nothing helps better in life than a terrible advice",
      emoji: "🫤",
      type: PromptType.advice,
    },
    {
      color: "F480E5",
      desc: 'Stop being a boomer and finally "GET" a joke!',
      emoji: "🧐",
      type: PromptType.joke,
    },
    {
      color: "8AEC80",
      desc: "You suck at a lot of things, ever wondered why?",
      emoji: "🥶",
      type: PromptType.you_suck,
    },
    {
      color: "C4D4F8",
      desc: "A perfect way to stop a BOOOOORING chat!",
      emoji: "😶‍🌫️",
      type: PromptType.end_convo,
    },
    {
      color: "E3EC80",
      desc: "HOW TO ASK SOMEONE TO F#@K OFF, POLITELY? IS IT EVEN POSSIBLE?!",
      emoji: "😤",
      type: PromptType.insult,
    },
  ];

  const router = useRouter();

  return (
    <Box mt="9%" display="flex" flexDirection="column">
      <Text
        mx={{ base: "6%", md: "10%" }}
        fontFamily="highman"
        fontSize={{ base: "2.75rem", lg: "5.25rem" }}
        letterSpacing="-0.04em"
        color="#308CF8"
        lineHeight="5.775rem"
      >
        what all you can do?
      </Text>
      <Wrap spacing="3rem" px="10%" py="3rem">
        {options.map((option) => (
          <PromptCard
            key={option.desc.length}
            color={`#${option.color}`}
            desc={option.desc}
            emoji={option.emoji}
            type={option.type}
          />
        ))}
      </Wrap>
      <Button
        alignSelf="end"
        mr="2.5rem"
        backgroundColor="#308CF8"
        borderRadius="4px"
        px="3.125rem"
        py="1.5rem"
        border="2px"
        borderColor="black"
        color="white"
        _hover={{
          color: "#308CF8",
          backgroundColor: "white",
        }}
        boxShadow="4px 5px #000"
        onClick={() => {
          router.push("/prompt?type=comeback");
        }}
      >
        <Flex alignItems="center">
          <Text fontFamily="highman" fontSize="2rem" mr="4px">
            Try it now
          </Text>
          <BsArrowRight size="1.5rem" />
        </Flex>
      </Button>
    </Box>
  );
};

export default LandingDesc;
