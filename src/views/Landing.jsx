import { VStack, Heading, Text, Button } from "@chakra-ui/react";

export const Landing = () => {
  return (
    <VStack h="calc(100vh - 48px)" bgColor="brand.900">
      <Heading color="white" py="56px" fontSize="5xl">
        Typing Test
      </Heading>

      <Text color="white" py="24px" fontWeight="400" fontSize="2xl">
        Take this simple quiz and have fun testing how fast can you type!
      </Text>

      <VStack bgColor="brand.800" p={16} rounded={16}>
        <Text mb={8}>Test yourself clicking down here!</Text>
        <Button bgColor="brand.700" color="white">
          Test me!
        </Button>
      </VStack>
    </VStack>
  );
};
