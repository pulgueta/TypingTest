import { VStack, Heading, Image } from "@chakra-ui/react";

export const App = () => {
  return (
    <VStack h="100vh" bgColor="brand.300">
      <Heading>Hello Danico, I love you my Piston Cup</Heading>
      <Image
        src="https://i.pinimg.com/originals/12/16/97/1216975d677fd42d42ce14e1694b8741.png"
        alt="Piston Cup"
      />
    </VStack>
  );
};
