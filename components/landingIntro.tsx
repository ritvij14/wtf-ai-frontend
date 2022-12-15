import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";

const LandingIntro = () => {
  return (
    <Box mx="6%">
      <Flex mx="3%" alignItems="center" color="#308CF8">
        <Text fontFamily="highman" fontSize="3.5rem">
          WTF AI
        </Text>
        <Spacer />
        <Text fontFamily="grotesk" fontWeight="400" fontSize="1.25rem">
          what all you can do&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text fontFamily="grotesk" fontWeight="700" fontSize="1.25rem" as="u">
          sign up
        </Text>
        <Text fontFamily="grotesk" fontWeight="700" fontSize="1.25rem">
          /login
        </Text>
      </Flex>
    </Box>
  );
};

export default LandingIntro;
