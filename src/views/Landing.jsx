import { VStack, Heading, Text } from "@chakra-ui/react";

export const Landing = () => {
  return (
    <VStack h="calc(100vh - 48px)" bgColor="brand.900">
      <Heading color="white" py="56px" fontSize="5xl">
        Typing Test
      </Heading>

      <Text color="white" py="24px" fontWeight="400" fontSize="2xl">
        Take this simple quiz and have fun testing how fast can you type!
      </Text>
    </VStack>
  );
};
