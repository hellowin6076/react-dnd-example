import { Flex, Text } from "@chakra-ui/react"
import React from "react"

const Column = () => {
  return (
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
  )
}

export default Column
