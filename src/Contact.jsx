import * as React from "react";
import { IconButton, Link, Card, CardBody, Text, Heading, Stack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";




function Contact() {
  return (
    <Card
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="transparent"
      height="70vh"
      boxShadow="none"
    >
      <CardBody
        // py={{ base: "0", sm: "8" }}
        // px={{ base: "4", sm: "4" }}
        bg="linear-gradient(to bottom, black, gray)"
        borderRadius="lg"
        boxShadow="dark-lg"
        margin="3rem"
      >
        <Text
          fontSize="7rem"
          fontFamily="Strike Brush"
          p="1rem"
          letterSpacing="2px"
        >
          Cody Miller
        </Text>
        <Text
          textAlign="center"
          color="white"
          fontSize="1.5rem"
          fontWeight="semi-bold"
          m="1rem"
        >
          Feel free to contact me here:
        </Text>
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-around"
          margin="1rem"
        >
          <IconButton
            className="icon-button"
            variant="ghost"
            aria-label="Done"
            fontSize="6.7rem"
            mt="1.5rem"
            icon={<MdEmail color="white" />}
            as={Link}
            href="mailto:C.JMiller17@yahoo.com"
            target="_blank"
            _hover={{
              bgGradient: "transparent",
            }}
          />

          <IconButton
            className="icon-button"
            variant="ghost"
            aria-label="Done"
            mt="1.5rem"
            fontSize="5.7rem"
            icon={<FaLinkedin color="white" />}
            _hover={{ bgColor: "transparent" }}
            as={Link}
            href="https://www.linkedin.com/in/cjmiller17/"
            target="_blank"
          />

          <IconButton
            className="icon-button"
            variant="ghost"
            aria-label="Done"
            mt="1.5rem"
            fontSize="5.7rem"
            icon={<FaGithub color="white" />}
            _hover={{ bgColor: "transparent" }}
            as={Link}
            href="https://github.com/CJMiller17"
            target="_blank"
          />
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Contact
