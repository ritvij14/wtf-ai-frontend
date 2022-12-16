import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import PromptCard from "./promptCard";
import Marquee from "react-fast-marquee";

const LandingIntro = () => {
  return (
    <Box mx="6%" h="100%">
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
      <Box display="flex" flexDir="column">
        <Image
          src="/landing.svg"
          alt="landing-vector"
          w="65rem"
          alignSelf="center"
        />
        <Box
          position="absolute"
          top="27%"
          left="50%"
          transform="translate(-50%, -50%)"
          display="flex"
          flexDir="column"
        >
          <Text
            fontFamily="highman"
            fontSize="4.625rem"
            color="#308CF8"
            textAlign="center"
            w="37.25rem"
            lineHeight="5rem"
          >
            Let AI take care of dumb things you say & do in life
          </Text>
          <Button
            mt="1.5rem"
            mb="1.125rem"
            alignSelf="center"
            mr="2.5rem"
            backgroundColor="#308CF8"
            borderRadius="4px"
            px="3.125rem"
            py="1.5rem"
            border="2px"
            borderColor="black"
            boxShadow="4px 5px #000"
          >
            <Flex alignItems="center">
              <FaTwitter color="white" size="1.5rem" />
              <Text fontFamily="highman" fontSize="2rem" color="white" mr="4px">
                Sign up now!
              </Text>
            </Flex>
          </Button>
          <Text
            fontFamily="grotesk"
            fontSize="1rem"
            fontWeight="400"
            alignSelf="center"
            color="black"
          >
            This will make your life fun :{")"}
          </Text>
        </Box>
        <Box position="absolute" top="28%">
          <PromptCard
            color="#FFD503"
            desc="Throw your best insult at me, and be prepared to be destroyed."
            emoji="🤬"
            type="COMEBACKS"
          />
        </Box>
        <Box position="absolute" right="20%">
          <PromptCard
            color="#F78166"
            desc="Can't stop texting my ex, what do I do?"
            emoji="🫤"
            type="TERRIBLE ADVICE"
          />
        </Box>
        <Box position="absolute" top="32%" right="10%">
          <PromptCard
            color="#F480E5"
            desc="Feeling dumb for not getting a joke?"
            emoji="🧐"
            type="EXPLAIN A JOKE"
          />
        </Box>
        <Box w="64rem" position="absolute" top="50%" left="14%">
          <Marquee gradient={false} speed={100}>
            Why always win, when you lose with AI? ✶ Why always win, when you
            lose with AI?✶ Why always win, when you lose with AI?✶ Why always
            win, when you lose with AI?
          </Marquee>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingIntro;
