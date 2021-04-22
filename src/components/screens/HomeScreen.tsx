import NextImage from "next/image";
import NextLink from "next/link";

import { Button, IconButton } from "@chakra-ui/button";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/layout";
import { Episode } from "../../entities/Episode";
import { chakra } from "@chakra-ui/system";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";

export type HomeScreenProps = {
  episodes: Episode[];
};

export default function HomeScreen({ episodes }: HomeScreenProps) {
  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return (
    <Box w="full" h="full" px="16" overflowY="auto">
      <Box as="section">
        <Heading as="h2" mt="12" mb="6">
          Últimos lançamentos
        </Heading>
        <Grid
          as="ul"
          templateColumns="repeat(2, 1fr)"
          gap="6"
          listStyleType="none"
        >
          {latestEpisodes.map((episode) => (
            <Flex
              key={episode.id}
              as="li"
              position="relative"
              bg="white"
              borderWidth="thin"
              borderStyle="solid"
              borderColor="gray.100"
              borderRadius="6"
              p="6"
              flexDir="row"
              align="center"
            >
              <Box
                position="relative"
                w="24"
                h="24"
                borderRadius="4"
                borderWidth="1"
              >
                <NextImage
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                  layout="fill"
                />
              </Box>
              <Flex ml="4" flex={1} flexDir="column">
                <NextLink
                  href={{
                    pathname: "/episodes/[slug]",
                    query: { slug: episode.id },
                  }}
                  passHref
                >
                  <Link
                    color="gray.800"
                    fontFamily="heading"
                    fontWeight="semibold"
                    lineHeight="base"
                  >
                    {episode.title}
                  </Link>
                </NextLink>
                <Text
                  as="p"
                  fontSize="sm"
                  marginTop="2"
                  maxW="70%"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {episode.members}
                </Text>
                <HStack mt="2">
                  <Text as="span" fontSize="sm">
                    {episode.published_at}
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
                    {episode.duration}
                  </Text>
                </HStack>
              </Flex>
              <IconButton
                position="absolute"
                right="8"
                bottom="8"
                w="12"
                h="12"
                aria-label="play"
                icon={
                  <chakra.img
                    src="/play-green.svg"
                    alt="Tocar episódio"
                    w="6"
                    h="6"
                  />
                }
              />
            </Flex>
          ))}
        </Grid>
      </Box>
      <Box as="section" pb="8">
        <Heading as="h2" mt="12" mb="6">
          Todos os Episódios
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Podcasts</Th>
              <Th>Integrantes</Th>
              <Th>Data</Th>
              <Th>Duração</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {allEpisodes.map((episode) => (
              <Tr>
                <Td position="relative">
                  <Box
                    w="12"
                    h="12"
                    position="relative"
                    overflow="hidden"
                    borderRadius="8"
                  >
                    <NextImage
                      src={episode.thumbnail}
                      alt={episode.title}
                      width={120}
                      height={120}
                      objectFit="cover"
                    />
                  </Box>
                </Td>
                <Td>
                  <NextLink
                    href={{
                      pathname: "/episodes/[slug]",
                      query: { slug: episode.id },
                    }}
                    passHref
                  >
                    <Link
                      color="gray.800"
                      fontFamily="heading"
                      fontWeight="semibold"
                      lineHeight="base"
                    >
                      {episode.title}
                    </Link>
                  </NextLink>
                </Td>
                <Td fontSize="sm">{episode.members}</Td>
                <Td fontSize="sm" whiteSpace="nowrap">
                  {episode.published_at}
                </Td>
                <Td fontSize="sm">{episode.duration}</Td>
                <Td>
                  <IconButton
                    aria-label="play"
                    icon={
                      <chakra.img
                        src="/play-green.svg"
                        alt="Tocar episódio"
                        w="6"
                        h="6"
                      />
                    }
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
