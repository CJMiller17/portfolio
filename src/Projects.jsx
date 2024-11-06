import React, { useState } from "react";
import { SimpleGrid, Card, Image, Modal, ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  HStack, Badge, Stack, Button, Heading, Text, CardBody, CardFooter, Wrap
} from "@chakra-ui/react";

import Birding from "./assets/Birding.png";
import StoryGen from "./assets/Story.png"
import Clock from "./assets/Clock.png";
import MindReader from "./assets/Mind.png";
import Weather from "./assets/Weather.png";
import TicTacToe from "./assets/TicTac.png";
import Restaurant from "./assets/Food.png";
import ToDoList from "./assets/ToDo.png";
import Social from "./assets/Social.png";
import Prince from "./assets/Prince.png";
import GeoDash from "./assets/GeoDash.png";
import GeoDashDemo from "./assets/GeoDashDemo.webm";


// import Birding from "./assets/Birding_screenshot.png";


export default function ProjectsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(null)
  const [hovered, setHovered] = useState(null)

  const elevatedCards = [
    {
      title: "Adventure Game",
      text: "Developed an immersive adventure game with a seamlessly integrated front-end and back-end, showcasing proficiency in full-stack development. This project honed my skills in creating interactive, user-driven experiences with real-time data management.",
      image: Prince,
      video: "",
      liveLink: "https://the-little-prince-returns.vercel.app/",
      githubLink: "https://github.com/CJMiller17/little-prince-client",
    },
    {
      title: "Birding Website",
      text: "Created a visually stunning birding website featuring multiple navigable pages and clickable images, emphasizing aesthetic design and user experience. This project enhanced my understanding of front-end development and responsive design principles.",
      image: Birding,
      liveLink: "https://cjmiller17.github.io/Birding/",
      githubLink: "https://github.com/CJMiller17/Birding",
    },
    {
      title: "Random Story Generator",
      text: "Designed a captivating random story generator inspired by the children's book 'The Gruffalo,' demonstrating creativity in algorithmic storytelling. This project improved my ability to implement logic for dynamic content generation.",
      image: StoryGen,
      liveLink: "https://cjmiller17.github.io/Silly-Story/",
      githubLink: "https://github.com/CJMiller17/Silly-Story",
    },
    {
      title: "GeoDash World",
      text: "Designed a city exploration learning tool that can be customized for any city in the world.",
      image: GeoDash,
      video: GeoDashDemo,
      liveLink: "https://geodash-world-client-development.onrender.com/",
      githubLink: "https://github.com/chingu-voyages/v51-tier3-team-34",
    },

    // {
    //   title: "Restaurant",
    //   text: "Built a functional restaurant website with an intuitive search bar that retrieves data from an external API, showcasing my API integration skills. This project strengthened my proficiency in asynchronous JavaScript and data fetching techniques.",
    //   image: Restaurant,
    //   liveLink: "",
    //   githubLink: "https://the-little-prince-returns.vercel.app/",
    // },
    // {
    //   title: "To Do List",
    //   text: "Developed an interactive to-do list application with editable input fields and dynamic color-changing status based on task deadlines, emphasizing task management and user interaction. This project advanced my knowledge of state management and real-time UI updates in JavaScript.",
    //   image: ToDoList,
    //   liveLink: "",
    //   githubLink: "https://the-little-prince-returns.vercel.app/",
    // },
    // {
    //   title: "Clock",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Clock,
    //   liveLink: "https://cjmiller17.github.io/Alarm-Clock/",
    //   githubLink: "https://the-little-prince-returns.vercel.app/",
    // },
    // {
    //   title: "Mind Reader",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: MindReader,
    //   liveLink: "https://cjmiller17.github.io/mind-reader/",
    //   githubLink: "https://the-little-prince-returns.vercel.app/",
    // },
    // {
    //   title: "Weather App",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Weather,
    //   liveLink: "https://cjmiller17.github.io/weather-app/",
    //   githubLink: "https://the-little-prince-returns.vercel.app/",
    // },
    // {
    //   title: "Tic Tac Toe",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: TicTacToe,
    //   liveLink: "https://cjmiller17.github.io/terni-lapilli/",
    //   githubLink: "https://the-little-prince-returns.vercel.app/",
    // },
    // {
    //   title: "Social Media Site",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Social,
    //   liveLink: "",
    //   githubLink: "https://the-little-prince-returns.vercel.app/",
    // },
  ];

  return (
    <>
      <Box
        bg="#023047"
        color="white"
        py="1"
        px="8"
        borderRadius="md"
        m="8"
        maxWidth="90%"
        mx="auto"
        textAlign="center"
      >
        <Heading
          fontSize="5xl"
          bgGradient="linear(to bottom, #FFB703, #FB8500)"
          bgClip="text"
        >
          Here's what I have been up to
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing=".5">
        {elevatedCards.map((card, index) => (
          <Card
            key={index}
            direction={{ base: "column", sm: "row" }} // Stack column for small screens, row for larger screens
            overflow="hidden"
            m="4"
            display="flex"
            flexDirection="column"
            height="93%"
            bg="#023047"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index && card.video ? (
              <video
                src={card.video}
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  marginTop: "1rem",
                }}
              />
            ) : (
              <Image
                src={card.image}
                alt={card.title}
                objectFit="cover"
                width="100%"
                height="200px"
                mt="1rem"
              />
            )}
            <Stack p="4">
              <CardBody mt="-10" maxH="120px">
                <Heading
                  size="md"
                  noOfLines={1}
                  color="white"
                  textAlign="center"
                  bgGradient="linear(to bottom, #FFB703, #FB8500)"
                  bgClip="text"
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize=".9rem"
                  color="white"
                  maxHeight="90px"
                  noOfLines={4}
                >
                  {card.text}
                </Text>
                <Button
                  color="white"
                  variant="unstyled"
                  border="none"
                  fontSize=".8rem"
                  _hover={{ textDecoration: "underline", color: "#FFB703" }}
                  onClick={() => setIsModalOpen(index)}
                >
                  See More
                </Button>

                <Modal
                  isOpen={isModalOpen === index}
                  onClose={() => setIsModalOpen(null)}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{card.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text color="black">{card.text}</Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={() => setIsModalOpen(null)}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

                <Wrap mt="4" spacing="2" maxH="40px">
                  <Badge>React</Badge>
                  <Badge>Django</Badge>
                  <Badge>Django</Badge>
                  <Badge>Django</Badge>
                </Wrap>
              </CardBody>
              <CardFooter mt="10">
                <HStack mt="4" spacing="4" justifyContent="flex-end">
                  <Button
                    as="a"
                    href={card.liveLink}
                    target="_blank"
                    variant="outline"
                    color="white"
                    textDecoration="none"
                    _hover={{ color: "#FFB703", borderColor: "#FFB703" }}
                  >
                    Live
                  </Button>
                  <Button
                    as="a"
                    href={card.githubLink}
                    target="_blank"
                    variant="outline"
                    color="white"
                    textDecoration="none"
                    _hover={{ color: "#FFB703", borderColor: "#FFB703" }}
                  >
                    Code
                  </Button>
                </HStack>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
