import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/footer";
import PromptHeader from "../components/promptHeader";
import PromptMain from "../components/promptMain";

const PromptPage = () => {
  const router = useRouter();
  const data = router.query;

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
      <PromptMain type={data["type"]?.toString() || "comeback"} />
      <Footer />
    </Box>
  );
};

export default PromptPage;
