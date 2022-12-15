import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  colors: {
    background: "#F6DCB7",
  },
  fonts: {
    grotesk: `"Space Grotesk", sans-serif`,
    highman: `"Highman Trial", sans-serif`,
  },
});

export default theme;
