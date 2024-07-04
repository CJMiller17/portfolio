import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  ButtonGroup,
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
          bg="transparent"
          borderRadius="md"
          boxShadow="dark-lg"
        >
          <Stack spacing="6">
            <Heading
              fontFamily="Koh Santepheap"
              color="white"
              textAlign="center"
              fontSize="6xl"
            >
              Cody Miller
            </Heading>
            <Heading
              fontFamily="Lobster Two"
              fontSize="1.7rem"
              color="#B8D4E6"
              mt="-6"
              textAlign="center"
              // textShadow="2px 1px 0px  gray"
            >
              Welcome to My Portfolio
            </Heading>
            <p color="gray.500" fontSize="xl">
              Feel free to look around and get to know me. There are a lot of
              places to look at my projects, blog, and more.
            </p>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Homepage
