import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, Styles } from "@chakra-ui/theme-tools";
import { Global } from "@emotion/react";

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode("#F6DCB7", "#F6DCB7")(props),
      overflow: "scroll",
    },
  }),
};

const theme = extendTheme({
  styles,
  colors: {
    background: "#F6DCB7",
  },
  fonts: {
    grotesk: `"Space Grotesk", sans-serif`,
    highman: `"Highman Trial", sans-serif`,
  },
});

export default theme;
