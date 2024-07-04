import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import CMLogo from "./assets/CM.png";


function NavBar() {

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        bgGradient="linear(to-b, rgba(33, 156, 144, 0.3), rgba(33, 156, 144, 0.8), rgba(33, 156, 144, 1))"
        alignItems="center"
        boxShadow="2xl"
      >
        <Text as={Link} to="/" p="0" minW="auto" mt=".3rem" bgColor="none">
          <img
            src={CMLogo}
            alt="Home"
            style={{
              width: "80px",
              height: "80px",
              maxWidth: ["50px", "60px", "70px", "80px"], // Responsive widths
              maxHeight: ["50px", "60px", "70px", "80px"], // Responsive heights
            }}
          />
        </Text>

        <Text as={Link} to="/about">
          About
        </Text>

        <Text as={Link} to="/blog">
          Blog
        </Text>

        <Text as={Link} to="/projects">
          Projects
        </Text>

        <Text as={Link} to="/resume">
          Résumé
        </Text>

        <Text as={Link} to="/contact">
          Contact
        </Text>
      </Box>
    </>
  );
}

export default NavBar;
