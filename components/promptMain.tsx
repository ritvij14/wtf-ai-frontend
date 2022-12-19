import { Box, Button, Flex, Text, Textarea, Wrap } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import PromptType from "../types";
import PromptCard from "./promptCard";
import { TbEdit } from "react-icons/tb";

type Props = {
  type: String;
};

const PromptMain: React.FC<Props> = ({ type }) => {
  const [prompt, setPrompt] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const generate = async () => {
    setLoading(true);
    const data = await axios.post(`/api/generate`, { prompt, type });
    console.log(data);
    setResponse(data.data.toString().trim());
    setLoading(false);
  };

  useEffect(() => {
    setPrompt("");
    setResponse("");
  }, [type]);

  const options = [
    {
      color: "8AEC80",
      desc: "I DON'T KNOW HOW TO GET BETTER AT LIFE, HELP A FRIEND OUT?",
      emoji: "🥶",
      type: PromptType.sucks,
    },
    {
      color: "F78166",
      desc: "WHAT IS THE BEST THING TO DO IF MY EX MESSAGES ME TODAY?",
      emoji: "🫤",
      type: PromptType.advice,
    },
    {
      color: "F480E5",
      desc: "what's the meaning of “the vibe shift”? i don't get any of it.",
      emoji: "🧐",
      type: PromptType.joke,
    },
  ];

  return (
    <Box
      px={{ base: "1.5rem", md: "5rem", lg: "7.5rem" }}
      display="flex"
      flexDir="column"
    >
      <Text
        fontFamily="highman"
        fontSize={
          response == "" ? { base: "3.5rem", md: "5.25rem" } : "2.25rem"
        }
        color="#308CF8"
        lineHeight={{ base: "4.15rem", md: "6rem" }}
      >
        {type == PromptType[PromptType.comeback] && "COMEBACK"}
        {type == PromptType[PromptType.advice] && "TERRIBLE ADVICE"}
        {type == PromptType[PromptType.joke] && "EXPLAIN A JOKE"}
        {type == PromptType[PromptType.sucks] && "WHY DO YOU SUCK AT...?"}
        {type == PromptType[PromptType.endConversation] &&
          "HOW TO END A CONVERSATION"}
        {type == PromptType[PromptType.compliment] && "INSULT IN A COMPLIMENT"}
      </Text>
      {response != "" && (
        <Flex>
          <Text mr="1rem" fontFamily="highman" fontSize="2rem" color="black">
            {prompt}
          </Text>
          <TbEdit
            size="1.75rem"
            style={{
              alignSelf: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setResponse("");
              setPrompt(prompt);
            }}
          />
        </Flex>
      )}
      <Text
        mt={response == "" ? "1.5rem" : "0"}
        fontFamily="highman"
        fontSize="2rem"
        color="black"
        lineHeight="2rem"
      >
        {type == PromptType[PromptType.comeback] &&
          (response == ""
            ? "WHAT DID YOU GET CALLED"
            : "Here is your comeback:")}
        {type == PromptType[PromptType.advice] &&
          (response == ""
            ? "let ai decide what you will ruin today?"
            : "Here is your advice:")}
        {type == PromptType[PromptType.joke] &&
          (response == ""
            ? "you might be dumb but the ai is smart :)"
            : "Here is the explanation:")}
        {type == PromptType[PromptType.sucks] &&
          (response == ""
            ? "you just do man but everyone needs a closure."
            : "This is why you suck:")}
        {type == PromptType[PromptType.endConversation] &&
          (response == ""
            ? "please shut up...respectfully."
            : "Here is your response:")}
        {type == PromptType[PromptType.compliment] &&
          (response == ""
            ? "SAY IT WITH A SMILE BUT MEAN IT LIKE AN INSULT"
            : "Here is your compliment:")}
      </Text>

      <Textarea
        placeholder="What do you need help with today..."
        borderWidth="3px"
        borderColor="black"
        onChange={(e) => {
          if (response == "") setPrompt(e.target.value);
        }}
        bg="white"
        value={response == "" ? prompt : response}
        pointerEvents={response != "" ? "painted" : "all"}
      />
      <Button
        mt="1.625rem"
        mb="3.625rem"
        alignSelf="center"
        fontFamily="grotesk"
        fontWeight="400"
        fontSize="2rem"
        letterSpacing="-0.04em"
        color="white"
        textTransform="uppercase"
        backgroundColor="#308CF8"
        borderRadius="4px"
        px="3rem"
        py="1.75rem"
        border="2px"
        borderColor="black"
        boxShadow="4px 5px #000"
        isLoading={isLoading}
        loadingText="Generating..."
        _hover={{
          color: "#308CF8",
          backgroundColor: "white",
        }}
        onClick={() => {
          generate();
        }}
      >
        {response == "" ? "Generate" : "Try Again"}
      </Button>
      {/* <Flex alignItems="center" flexDir={{ base: "column", md: "row" }}>
        <Text
          pb="6px"
          height="fit-content"
          borderBottom="2px solid"
          style={{
            borderImage:
              "linear-gradient(to right, #000 50%, transparent 50%) 100% 1",
          }}
          fontFamily="grotesk"
          fontWeight="700"
          fontSize="1.125rem"
          color="black"
        >
          give these a shot:
        </Text>
        <Spacer />
        <Flex>
          <Box
            p="0.5rem"
            w="12.75rem"
            borderRadius="0.5rem"
            boxShadow="4px 4px #000"
            backgroundColor="#CAE3FF"
            border="1px"
            borderStyle="solid"
            borderColor="black"
            fontFamily="grotesk"
            fontWeight="400"
            fontSize="1.125rem"
            color="black"
            transition="all .2s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            sample copy for the best comeback you’ve ever seen.
          </Box>
          <Text
            fontFamily="grotesk"
            fontWeight="400"
            fontSize="1.125rem"
            color="black"
            mx="1.5rem"
            h="fit-content"
            alignSelf="center"
          >
            ✶
          </Text>
          <Box
            p="0.5rem"
            w="12.75rem"
            borderRadius="0.5rem"
            boxShadow="4px 4px #000"
            backgroundColor="#CAE3FF"
            border="1px"
            borderStyle="solid"
            borderColor="black"
            fontFamily="grotesk"
            fontWeight="400"
            fontSize="1.125rem"
            color="black"
            transition="all .2s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            sample copy for the best comeback you’ve ever seen.
          </Box>
          <Text
            fontFamily="grotesk"
            fontWeight="400"
            fontSize="1.125rem"
            color="black"
            mx="1.5rem"
            h="fit-content"
            alignSelf="center"
          >
            ✶
          </Text>
          <Box
            p="0.5rem"
            w="12.75rem"
            borderRadius="0.5rem"
            boxShadow="4px 4px #000"
            backgroundColor="#CAE3FF"
            border="1px"
            borderStyle="solid"
            borderColor="black"
            fontFamily="grotesk"
            fontWeight="400"
            fontSize="1.125rem"
            color="black"
            transition="all .2s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            sample copy for the best comeback you’ve ever seen.
          </Box>
        </Flex>
      </Flex> */}
      <Text
        mt="1.375rem"
        fontFamily="highman"
        fontSize="3.5rem"
        color="black"
        letterSpacing="-0.04em"
      >
        Try more
      </Text>
      <Wrap spacing="3rem" py="1.5rem" px="1.5rem">
        {options.map((option) => (
          <PromptCard
            key={option.desc.length}
            color={`#${option.color}`}
            desc={option.desc}
            emoji={option.emoji}
            type={PromptType[option.type]}
          />
        ))}
      </Wrap>
    </Box>
  );
};

export default PromptMain;
/**
 *
 */
