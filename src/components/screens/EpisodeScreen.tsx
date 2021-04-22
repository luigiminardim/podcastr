import NextImage from "next/image";
import NextLink from "next/link";
import { Button, IconButton } from "@chakra-ui/button";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Episode } from "../../entities/Episode";

export type EpisodeScreenProps = {
  episode: Episode;
};

export default function EpisodeScreen({ episode }: EpisodeScreenProps) {
  return (
    <Container maxW="3xl" px="8" py="12">
      <Box position="relative" className="thumbnailContainer">
        <Box position="relative" overflow="hidden" borderRadius="2xl">
          <NextImage
            src={episode.thumbnail}
            width={700}
            height={160}
            objectFit="cover"
          />
        </Box>
        <NextLink href={{ pathname: "/" }} passHref>
          <IconButton
            as="a"
            position="absolute"
            left="0"
            top="50%"
            transform="translate(-50%, -50%)"
            colorScheme="purple"
            aria-label="go-back"
            icon={<chakra.img src="/arrow-left.svg" alt="voltar" />}
          />
        </NextLink>
        <IconButton
          position="absolute"
          right="0"
          top="50%"
          colorScheme="green"
          transform="translate(50%, -50%)"
          aria-label="go-back"
          icon={<chakra.img src="/play.svg" alt="Tocar episódio" />}
        />
      </Box>
      <Box
        as="header"
        pb="4"
        borderBottomWidth="thin"
        borderBottomStyle="solid"
        borderBottomColor="gray.100"
      >
        <Heading as="h1" mt="8" mb="6">
          {episode.title}
        </Heading>
        <HStack spacing="4">
          <Text as="span" fontSize="sm">
            {episode.members}
          </Text>
          <Divider
            orientation="vertical"
            borderWidth="10"
            w="1"
            h="1"
            bg="gray.600"
            borderRadius="2"
          />
          <Text as="span" fontSize="sm">
            {episode.published_at}
          </Text>
          <Text as="span" fontSize="sm">
            {episode.duration}
          </Text>
        </HStack>
      </Box>
      <Box
        mt="8"
        lineHeight="tall"
        color="gray.800"
        dangerouslySetInnerHTML={{ __html: episode.description }}
        sx={{ "& p": { my: "6" } }}
      />
    </Container>
  );
}
