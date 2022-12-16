import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import PromptType from "../types";

type Props = {
  type: String;
};

const PromptMain: React.FC<Props> = ({ type }) => {
  const generate = async () => {
    const { data } = await axios.post(`/api/generate`, { prompt, type });
    console.log(data);
  };

  const [prompt, setPrompt] = React.useState("");

  return (
    <Box px="7.5rem">
      <Text fontFamily="highman" fontSize="5.25rem" color="#308CF8">
        {type == PromptType[PromptType.comeback] && "COMEBACK"}
        {type == PromptType[PromptType.advice] && "TERRIBLE ADVICE"}
        {type == PromptType[PromptType.joke] && "EXPLAIN A JOKE"}
        {type == PromptType[PromptType.you_suck] && "WHY DO YOU SUCK AT...?"}
        {type == PromptType[PromptType.end_convo] &&
          "HOW TO END A CONVERSATION"}
        {type == PromptType[PromptType.insult] && "INSULT IN A COMPLIMENT"}
      </Text>
      <Text mt="1.5rem" fontFamily="highman" fontSize="2rem" color="black">
        {type == PromptType[PromptType.comeback] && "WHAT DID YOU GET CALLED"}
        {type == PromptType[PromptType.advice] &&
          "let ai decide what you will ruin today?"}
        {type == PromptType[PromptType.joke] &&
          "you might be dumb but the ai is smart :)"}
        {type == PromptType[PromptType.you_suck] &&
          "you just do man but everyone needs a closure."}
        {type == PromptType[PromptType.end_convo] &&
          "please shut up...respectfully."}
        {type == PromptType[PromptType.insult] &&
          "SAY IT WITH A SMILE BUT MEAN IT LIKE AN INSULT"}
      </Text>

      <Textarea
        border="3px"
        borderColor="black"
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
        variant="filled"
      />
      <Button onClick={generate}>Click Me</Button>
    </Box>
  );
};

export default PromptMain;
