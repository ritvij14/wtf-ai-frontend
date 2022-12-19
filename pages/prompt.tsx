import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/footer";
import PromptHeader from "../components/promptHeader";
import PromptMain from "../components/promptMain";
import PromptType from "../types";

const PromptPage = () => {
  const router = useRouter();
  const data = router.query;

  var options = [
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
      type: PromptType.sucks,
    },
    {
      color: "C4D4F8",
      desc: "A perfect way to stop a BOOOOORING chat!",
      emoji: "😶‍🌫️",
      type: PromptType.endConversation,
    },
    {
      color: "E3EC80",
      desc: "HOW TO ASK SOMEONE TO F#@K OFF, POLITELY? IS IT EVEN POSSIBLE?!",
      emoji: "😤",
      type: PromptType.compliment,
    },
  ];

  options = options.filter((val) => PromptType[val.type] != data["type"]);
  const option1 = options[Math.floor(Math.random() * options.length)];
  options = options.filter((val) => val.type != option1.type);
  const option2 = options[Math.floor(Math.random() * options.length)];
  options = options.filter((val) => val.type != option2.type);
  const option3 = options[Math.floor(Math.random() * options.length)];

  const sentOptions = [option1, option2, option3];

  return (
    <Box
      backgroundColor={
        data["type"] == "comeback"
          ? "#FFD503"
          : data["type"] == "advice"
          ? "#F78166"
          : data["type"] == "joke"
          ? "#F480E5"
          : data["type"] == "sucks"
          ? "#8AEC80"
          : data["type"] == "endConversation"
          ? "#C4D4F8"
          : "#E3EC80"
      }
    >
      <PromptHeader />
      <PromptMain
        type={data["type"]?.toString() || "comeback"}
        options={sentOptions}
      />
      <Footer />
    </Box>
  );
};

export default PromptPage;
