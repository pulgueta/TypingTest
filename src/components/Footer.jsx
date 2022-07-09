import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <Flex h="80px" bgColor="brand.900" justifyContent="center" alignItems="center">
        <Text
          as={motion.p}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1.15,
            },
          }}
          color="white"
          fontWeight="200"
          fontSize={{ base: "8px", md: "16px" }}
          userSelect="false"
        >
          Developed by Andrés Rodríguez in Colombia
        </Text>
    </Flex>
  );
};
