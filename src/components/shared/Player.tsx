import NextLink from "next/link";
import { IconButton } from "@chakra-ui/button";
import { Box, Center, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";

export default function Player() {
  return (
    <Flex
      w="md"
      h="full"
      px="16"
      py="12"
      bg="purple.500"
      color="white"
      flexDir="column"
      justify="space-between"
      align="center"
    >
      <HStack spacing="4" as="header" align="center">
        <img src="/playing.svg" alt="Tocando agora." />
        <Text as="strong" fontFamily="heading" fontWeight="semibold">
          Tocando agora
        </Text>
      </HStack>
      <Center
        w="full"
        h="xs"
        borderWidth="thin"
        borderStyle="dashed"
        borderColor="purple.300"
        borderRadius="6"
        p="16"
        bgGradient="linear(to-b, purple.300 0%,transparent 100%)"
      >
        <Text as="strong" fontFamily="heading" fontWeight="semibold">
          Selecione um podcast para ouvir.
        </Text>
      </Center>
      <Box as="footer" opacity={0.8}>
        <HStack spacing="2">
          <Text as="span">00:00</Text>
          <Progress flexGrow={1} size="xs" value={0} />
          <Text as="span">00:00</Text>
        </HStack>
        <HStack mt="10" spacing="6" justify="center">
          <NextLink href={{ pathname: "/" }}>
            <IconButton
              aria-label="shuffle"
              variant="ghost"
              colorScheme="purple"
              color="red"
              icon={<img src="/shuffle.svg" alt="Embaralhar." />}
            />
          </NextLink>
          <IconButton
            aria-label="play-previous"
            variant="ghost"
            colorScheme="purple"
            color="red"
            icon={<img src="/play-previous.svg" alt="Tocar anterior." />}
          />
          <IconButton
            aria-label="play"
            variant="ghost"
            size="lg"
            colorScheme="purple"
            bg="purple.400"
            icon={<img src="/play.svg" alt="Tocar." />}
          />
          <IconButton
            aria-label="play-next"
            variant="ghost"
            colorScheme="purple"
            color="red"
            icon={<img src="/play-next.svg" alt="Tocar próxima." />}
          />
          <IconButton
            aria-label="repeat"
            variant="ghost"
            colorScheme="purple"
            color="red"
            icon={<img src="/repeat.svg" alt="Repetir." />}
          />
        </HStack>
      </Box>
    </Flex>
  );
}
