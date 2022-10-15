import { Flex, Heading, Text } from "@chakra-ui/react"
import react from "react"

export default function Home() {
  return (
    <Flex
      flexDir="column"
      bg="main-bg"
      minH="100vh"
      w="full"
      color="white-text"
      pb="2rm"
    >
      <Flex py="4rem" flexDir="column" align="center">
        <Heading fontSize="3xl" fontWeight={600}>
          React Beautiful Drag and Drop
        </Heading>
        <Text fontSize="20px" fontWeight={600} color="subtle-text">
          react-beautiful-dnd
        </Text>
      </Flex>
      <Flex justify="space-between" px="4rem">
        <Flex rounded="3px" bg="column-bg" w="400px" h="620px" flexDir="column">
          <Flex
            align="center"
            height="60px"
            bg="column-header-bg"
            rounded="3px 3px 0 0"
            px="1.5rem"
            mb="1.5rem"
          >
            <Text fontSize="17px" fontWeight={600} color="subtle-text">
              TO-DO
            </Text>
          </Flex>

          <Flex px="1.5rem" flex={1} flexDir="column">
            <Flex mb="1rem" h="72px" bg="card-bg" rounded="3px" p="1.5rem">
              <Text>Hey! There!</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
