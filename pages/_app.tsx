import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/styles.css";
import { Provider } from "next-auth/client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider session={session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
