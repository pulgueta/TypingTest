import { VStack, Heading, Text, Button, Box } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export const Landing = () => {

  const navigate = useNavigate()

  return (
    <VStack h="calc(100vh - 80px)" bgColor="brand.900">
      <Heading color="white" py="56px" fontSize="5xl">
        Typing Test
      </Heading>

      <Text color="white" py="24px" fontWeight="400" fontSize="2xl">
        Take this simple quiz and have fun testing how fast can you type!
      </Text>
      <Box>
        <VStack bgColor="brand.800" p={16} rounded={16} mt={20}>
          <Text
            mb={8}
            color="white"
            fontWeight="300"
            fontStyle="italic"
            fontSize="xl"
          >
            Test yourself clicking down here!
          </Text>
          <Button
            px={10}
            py={6}
            _hover={{ backgroundColor: "#946cf5" }}
            bgColor="brand.700"
            color="white"
            onClick={() => navigate("/test")}
          >
            Test me!
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};
