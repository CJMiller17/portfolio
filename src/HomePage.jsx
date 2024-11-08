import {
  Box,
  Container,
  Heading,
  Stack,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import HomePageImg from "./assets/HomePage.jpeg";
import { Link as RouterLink } from "react-router-dom";

const Homepage = () => {
  const ctas = [
    { text: "Explore my work.", link: "/projects" },
    { text: "Discover my skills.", link: "/resume" },
    { text: "Connect with me.", link: "/contact" },
  ];

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
            <Link as={RouterLink} to="/about" alignSelf="center" margin="2rem">
              <Image
                boxSize="250px"
                objectFit="cover"
                src={HomePageImg}
                alt="A picture of myself holding my son. We are both wearing a blue sweater"
                borderRadius="50px"
              />
            </Link>
            <HStack spacing="14" justify="center">
              {ctas.map((cta, index) => (
                <Link
                  as={RouterLink}
                  to={cta.link}
                  key={index}
                  fontFamily="Montserrat"
                  fontSize="lg"
                  fontWeight="250"
                  color="white"
                  textAlign="center"
                >
                  {cta.text}
                </Link>
              ))}
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Homepage;
