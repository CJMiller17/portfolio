import { Link } from "react-router-dom";
import { Container, Box } from "@chakra-ui/react";


function NavBar() {


  return (
    <>
      <Box className="navbar" bg="myColor" variant="dark" sticky="top">
        {/* <Container >
          <Link className="navbar-brand" to="/">
            CM
          </Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/resume">
              Resume
            </Link>
          </Nav>
        </Container> */}
      </Box>
    </>
  );
}

export default NavBar;
