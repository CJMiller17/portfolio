import React from "react";
import { SimpleGrid, Card, Image, Box, HStack, Badge, Stack, Button, Heading, Text, CardBody, CardFooter, Wrap } from "@chakra-ui/react";

// import "./App.css"

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
// import Birding from "./assets/Birding_screenshot.png";


export default function ProjectsCarousel() {

  const elevatedCards = [
    {
      title: "Adventure Game",
      text: "Developed an immersive adventure game with a seamlessly integrated front-end and back-end, showcasing proficiency in full-stack development. This project honed my skills in creating interactive, user-driven experiences with real-time data management.",
      image: Prince,
      link: "https://the-little-prince-returns.vercel.app/",
    },
    {
      title: "Birding Website",
      text: "Created a visually stunning birding website featuring multiple navigable pages and clickable images, emphasizing aesthetic design and user experience. This project enhanced my understanding of front-end development and responsive design principles.",
      image: Birding,
      link: "https://cjmiller17.github.io/Birding/",
    },
    {
      title: "Random Story Generator",
      text: "Designed a captivating random story generator inspired by the children's book 'The Gruffalo,' demonstrating creativity in algorithmic storytelling. This project improved my ability to implement logic for dynamic content generation.",
      image: StoryGen,
      link: "https://cjmiller17.github.io/Silly-Story/",
    },
    {
      title: "GeoDash World",
      text: "Designed a city exploration learning tool that can be customized for any city in the world.",
      image: Clock,
      link: "https://geodash-world-client-development.onrender.com/",
    },

    // {
    //   title: "Restaurant",
    //   text: "Built a functional restaurant website with an intuitive search bar that retrieves data from an external API, showcasing my API integration skills. This project strengthened my proficiency in asynchronous JavaScript and data fetching techniques.",
    //   image: Restaurant,
    //   link: "",
    // },
    // {
    //   title: "To Do List",
    //   text: "Developed an interactive to-do list application with editable input fields and dynamic color-changing status based on task deadlines, emphasizing task management and user interaction. This project advanced my knowledge of state management and real-time UI updates in JavaScript.",
    //   image: ToDoList,
    //   link: "",
    // },
    // {
    //   title: "Clock",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Clock,
    //   link: "https://cjmiller17.github.io/Alarm-Clock/",
    // },
    // {
    //   title: "Mind Reader",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: MindReader,
    //   link: "https://cjmiller17.github.io/mind-reader/",
    // },
    // {
    //   title: "Weather App",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Weather,
    //   link: "https://cjmiller17.github.io/weather-app/",
    // },
    // {
    //   title: "Tic Tac Toe",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: TicTacToe,
    //   link: "https://cjmiller17.github.io/terni-lapilli/",
    // },
    // {
    //   title: "Social Media Site",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Social,
    //   link: "",
    // },
  ];

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing=".5">
        {elevatedCards.map((card) => (
          <Card
            key={card.title}
            direction={{ base: "column", sm: "row" }} // Stack column for small screens, row for larger screens
            overflow="hidden"
            m="4"
            display="flex"
            flexDirection="column"
            height="93%"
          >
            <Image
              src={card.image}
              alt={card.title}
              objectFit="cover"
              width="100%"
              height="200px"
              mt="1rem"
            />
            <Stack p="4">
              <CardBody mt="-10" maxH="120px">
                <Heading size="md" noOfLines={1}>
                  {card.title}
                </Heading>
                <Text
                  fontSize=".9rem"
                  color="black"
                  maxHeight="90px"
                  overflowY="scroll"
                >
                  {card.text}
                </Text>
                <Wrap mt="4" spacing="2" maxH="40px">
                  <Badge>React</Badge>
                  <Badge>Django</Badge>
                  <Badge>Django</Badge>
                  <Badge>Django</Badge>
                </Wrap>
              </CardBody>
              <CardFooter mt="10">
                <HStack mt="4" spacing="4" justifyContent="flex-end">
                  <Button as="a" href={card.link} target="_blank">
                    Live
                  </Button>
                  <Button as="a" href={card.link} target="_blank">
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
