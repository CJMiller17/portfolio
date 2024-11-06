import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

function NavItem({ to, children, fontSize="1.2rem" }) {
  return (
    <Text
      as={Link}
      to={to}
      fontFamily="Montserrat"
      letterSpacing="2px"
      fontSize={fontSize}
      mt=".5rem"
      bgGradient="linear(to bottom, #FFB703, #FB8500)"
      bgClip="text"
      transition="transform 0.2s ease"
      _hover={{
        textDecoration: "none",
        transform: "scale(1.06)",
      }}
      _active={{
        color: "#FFB703",
      }}
    >
      {children}
    </Text>
  );
}

function NavBar() {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      bg="#023047"
      alignItems="center"
      boxShadow="2xl"
    >
      <NavItem to="/" fontSize="2rem">
        Cody Miller
      </NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/resume">Résumé</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Box>
  );
}

export default NavBar;
