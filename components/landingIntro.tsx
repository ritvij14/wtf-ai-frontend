import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import PromptCard from "./promptCard";
import Marquee from "react-fast-marquee";
import PromptType from "../types";
import Link from "next/link";
import { useRouter } from "next/router";

const LandingIntro = () => {
  const router = useRouter();

  return (
    <Box mx="6%" h="100%">
      <Flex mx="3%" alignItems="center" color="#308CF8">
        <Link href="/">
          <Text
            fontFamily="highman"
            fontSize={{ base: "2.5rem", lg: "3.5rem" }}
          >
            WTF AI
          </Text>
        </Link>
        <Spacer />
        {/* <Text fontFamily="grotesk" fontWeight="400" fontSize="1.25rem">
          what all you can do&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text fontFamily="grotesk" fontWeight="700" fontSize="1.25rem" as="u">
          sign up
        </Text>
        <Text fontFamily="grotesk" fontWeight="700" fontSize="1.25rem">
          /login
        </Text> */}
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
          top={{ base: "11%", sm: "13%", md: "20%", lg: "22%", xl: "27%" }}
          left="50%"
          transform="translate(-50%, -50%)"
          display="flex"
          flexDir="column"
        >
          <Text
            fontFamily="highman"
            fontSize={{
              base: "1.75rem",
              sm: "2rem",
              md: "3rem",
              xl: "4.625rem",
            }}
            color="#308CF8"
            textAlign="center"
            maxW="37.25rem"
            minW="17rem"
            lineHeight={{ base: "2.25rem", xl: "5rem" }}
          >
            Let AI take care of dumb things you say & do in life
          </Text>
          <Button
            mt={{ base: "0", md: "1.5rem" }}
            mb="1.125rem"
            mr={{ base: "0", lg: "2.5rem" }}
            alignSelf="center"
            color="white"
            backgroundColor="#308CF8"
            borderRadius="4px"
            px={{ base: "2rem", md: "3.125rem" }}
            py={{ base: "1rem", md: "2rem" }}
            border="2px"
            borderColor="black"
            boxShadow="4px 5px #000"
            onClick={() => {
              router.push("/prompt?type=comeback");
            }}
            _hover={{
              color: "#308CF8",
              backgroundColor: "white",
            }}
          >
            <Flex alignItems="center">
              {/* <FaTwitter size="1.5rem" /> */}
              <Text
                fontFamily="highman"
                fontSize={{ base: "1.5rem", md: "2rem" }}
              >
                TRY IT NOW!
              </Text>
            </Flex>
          </Button>
          <Text
            fontFamily="grotesk"
            fontSize="1rem"
            fontWeight="400"
            alignSelf="center"
            color="black"
            visibility={{ base: "hidden", lg: "visible" }}
          >
            This will make your life fun :{")"}
          </Text>
        </Box>
        <Box
          position="absolute"
          top="28%"
          visibility={{ base: "hidden", xl: "visible" }}
        >
          <PromptCard
            color="#FFD503"
            desc="Throw your best insult at me, and be prepared to be destroyed."
            emoji="🤬"
            type={PromptType[PromptType.comeback]}
          />
        </Box>
        <Box
          position="absolute"
          right="20%"
          visibility={{ base: "hidden", xl: "visible" }}
        >
          <PromptCard
            color="#F78166"
            desc="Can't stop texting my ex, what do I do?"
            emoji="🫤"
            type={PromptType[PromptType.advice]}
          />
        </Box>
        <Box
          position="absolute"
          top="32%"
          right="10%"
          visibility={{ base: "hidden", xl: "visible" }}
        >
          <PromptCard
            color="#F480E5"
            desc="Feeling dumb for not getting a joke?"
            emoji="🧐"
            type={PromptType[PromptType.joke]}
          />
        </Box>
        <Box
          maxW="65rem"
          border="4px"
          borderColor="#308CF8"
          mt="-0.5%"
          fontFamily="grotesk"
          textTransform="uppercase"
          alignSelf="center"
        >
          <Marquee gradient={false} speed={100}>
            Why always win, when you can lose with AI? ✶ Find the reason why you
            suck so much ✶ Insult someone with a compliment ✶ Atleast the AI
            will get the jokes ✶&nbsp;
          </Marquee>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingIntro;
