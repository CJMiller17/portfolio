import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  ButtonGroup,
  Image
} from "@chakra-ui/react";

const Homepage = () => {
  
  return (
    <Container
      zIndex="10"
      maxW="2xl"
      py={{ base: "20" }}
      px={{ base: "0", sm: "8" }}
      bg="transparent"
    >
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg="#023047"
          borderRadius="md"
          border
          boxShadow="xl"
          style={{
            backdropFilter: "blur(100px)", // Blur effect
            WebkitBackdropFilter: "blur(10px)", // Safari support
          }}
        >
          <Stack spacing="6">
            <Heading
              fontFamily="Montserrat"
              fontWeight="700"
              textAlign="center"
              fontSize="6xl"
              m="0"
              bgGradient="linear(to bottom, #FFB703, #FB8500)"
              bgClip="text"
            >
              I am Cody Miller
            </Heading>
            <Heading
              fontFamily="Montserrat"
              fontWeight="200"
              fontSize="1.7rem"
              color="white"
              mt="0"
              mb="-.5rem"
              textAlign="center"
            >
              Welcome to My Portfolio
            </Heading>
            <Image
              boxSize="250px"
              objectFit="cover"
              src="src/assets/HomePage.jpeg"
              alt="A picture of myself holding my son. We are both wearing a blue sweater"
              borderRadius="50px"
              alignSelf="center"
            />
            <Text
              fontFamily="Montserrat"
              fontSize="lg"
              fontWeight="250"
              color="white"
              textAlign="center"
            >
              Feel free to look around and get to know me!
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Homepage
