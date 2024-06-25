import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Homepage = () => {
  
  return (
    <Container maxW="2xl" py={{ base: "20" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "white" }}
          borderRadius="xl"
          boxShadow="dark-lg"
        >
          <Stack spacing="6">
            <Heading
              fontFamily="Lobster Two"
              color="#3C6286"
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
            <Text color="gray.500" fontSize="xl">
              Feel free to look around and get to know me. There are a lot of places to look at my projects, blog,
              and more.
            </Text>

            <ButtonGroup
              justifyContent="space-between"
            >
              <Button
                variant="solid"
                as={Link}
                to="/about"
              >
                About
              </Button>

              <Button
                variant="outline"
                as={Link}
                to="/register"
              >
                Blog
              </Button>

              <Button
                variant="outline"
                as={Link}
                to="/about"
              >
                About
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Homepage
