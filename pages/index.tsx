import { Box, Button, Image, Text, useColorMode } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import LandingDesc from "../components/landingDesc";
import LandingIntro from "../components/landingIntro";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>wtf-ai</title>
        <meta name="description" content="WTF AI" />
        <link rel="icon" href="exploding_head.png" />
      </Head>

      <LandingIntro />
      <LandingDesc />
      <Footer />
    </Box>
  );
};

export default Home;
