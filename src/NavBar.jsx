import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import CMLogo from "./assets/CM.png";


function NavBar() {

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        bgGradient="linear(to-b, rgba(24, 25, 26, 0.3), rgba(24, 25, 26, 0.8), rgba(24, 25, 26, 1))"
        alignItems="center"
        boxShadow="2xl"
      >
        <Text as={Link} to="/" fontFamily="Zeyada" letterSpacing="2px" fontSize="2rem" mt=".5rem">
          Cody Miller
        </Text>

        <Text
          as={Link}
          to="/about"
          fontFamily="Strike Brush"
          letterSpacing="2px"
        >
          About
        </Text>

        {/* <Text as={Link} to="/blog" fontFamily="Strike Brush">
          Blog
        </Text> */}

        <Text
          as={Link}
          to="/projects"
          fontFamily="Strike Brush"
          letterSpacing="2px"
        >
          Projects
        </Text>

        <Text
          as={Link}
          to="/resume"
          fontFamily="Strike Brush"
          letterSpacing="2px"
        >
          Résumé
        </Text>

        <Text
          as={Link}
          to="/contact"
          fontFamily="Strike Brush"
          letterSpacing="2px"
        >
          Contact
        </Text>
      </Box>
    </>
  );
}

export default NavBar;
