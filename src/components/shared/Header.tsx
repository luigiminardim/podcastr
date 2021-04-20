import { Flex, Text } from "@chakra-ui/layout";
import format from "date-fns/format";
import { ptBR } from "date-fns/locale";

export default function Header() {
  return (
    <Flex
      as="header"
      dir="row"
      align="center"
      px="8"
      py="16"
      bg="white"
      h="6.5rem"
      borderBottomWidth="4"
      borderBottomStyle="solid"
      borderBottomColor="gray.100"
    >
      <img alt="Podcastr" src="/logo.svg" />
      <Text
        as="p"
        py="1"
        pl="8"
        ml="8"
        borderLeftWidth="4"
        borderLeftStyle="solid"
        borderLeftColor="gray.100"
      >
        O melhor para você ouvir, sempre
      </Text>
      <Text as="span" ml="auto" textTransform="capitalize">
        {format(new Date(), "EEEEEEE, d MMMM", { locale: ptBR })}
      </Text>
    </Flex>
  );
}
