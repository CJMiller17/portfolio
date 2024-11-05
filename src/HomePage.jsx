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
          bg="rgba(24, 25, 26, 0.8)"
          borderRadius="md"
          borderColor="white"
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
              bgGradient="linear(to bottom, #FFF455, #FFC700, #EE6E4E)"
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
              textAlign="center"
              // textShadow="2px 1px 0px  gray"
            >
              Welcome to My Portfolio
            </Heading>
            <p className="home-page-paragraph">
              Feel free to look around and get to know me!
            </p>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Homepage
