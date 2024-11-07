import * as React from "react";
import {
  IconButton,
  Link,
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
import GithubIcon from "../src/assets/github.svg";
import LinkedinIcon from "../src/assets/linkedin.svg";
import EmailIcon from "../src/assets/google.svg";

const contacts = [
  { icon: EmailIcon, label: "Email", href: "mailto:C.JMiller17@yahoo.com" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cjmiller17/",
  },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/CJMiller17" },
];

function Contact() {
  return (
    <Card
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="transparent"
      height="50vh"
      boxShadow="none"
    >
      <CardBody
        bg="#023047"
        borderRadius="lg"
        boxShadow="dark-lg"
        margin="3rem"
      >
        <Heading
          textAlign="center"
          color="white"
          fontSize="5xl"
          bgGradient="linear(to bottom, #FFB703, #FB8500)"
          bgClip="text"
          mt="3rem"
          mb=".5rem"
        >
          Get in touch with me here
        </Heading>
        <Text
          fontSize="md"
          fontFamily="Montserrat"
          fontWeight="450"
          color="white"
          textAlign="center"
        >
          I would love to chat
        </Text>
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-around"
          margin="1rem"
        >
          {contacts.map(({ icon, label, href }) => (
            <IconButton
              key={label}
              variant="ghost"
              aria-label={label}
              mt="1.5rem"
              as={Link}
              href={href}
              target="_blank"
              icon={
                <Image
                  src={icon}
                  alt={label}
                  boxSize="6rem"
                  sx={{
                    ":hover": {
                      animation: "hithere 1s ease 1",
                    },
                    "@keyframes hithere": {
                      "30%": { transform: "scale(1.2)" },
                      "40%": { transform: "rotate(-20deg) scale(1.2)" },
                      "50%": { transform: "rotate(20deg) scale(1.2)" },
                      "60%": { transform: "rotate(-20deg) scale(1.2)" },
                      "70%": { transform: "rotate(0deg) scale(1.2)" },
                      "100%": { transform: "scale(1)" },
                    },
                  }}
                />
              }
              _hover={{ bg: "none" }}
            />
          ))}
        </Stack>
        <Text
          fontSize="md"
          fontFamily="Montserrat"
          fontWeight="450"
          color="white"
          mt="3.5rem"
          textAlign="center"
        >
          Talk to you soon!
        </Text>
      </CardBody>
    </Card>
  );
}

export default Contact;