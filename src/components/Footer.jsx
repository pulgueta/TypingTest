import { Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <VStack h="48px" bgColor="brand.900" py="14px">
      <Text
        as={motion.p}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1.15,
          }
        }}
        color="white"
        fontWeight="200"
        fontSize={{ base: "8px", md: "16px" }}
        userSelect="false"
      >
        Developed by Andrés Rodríguez in Colombia
      </Text>
    </VStack>
  );
};
