import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "../components/shared/Header";
import Player from "../components/shared/Player";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100vh" bg="gray.50" flexDir="row">
        <Flex as="main" flexDir="column" grow={1}>
          <Header />
          <Component {...pageProps} />
        </Flex>
        <Player />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
