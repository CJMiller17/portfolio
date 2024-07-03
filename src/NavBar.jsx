import { Link } from "react-router-dom";
import { Container, Box, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'




function NavBar() {


  return (
    <>
      <Menu
      >
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="solid"
          p=".5rem"
          icon={<HamburgerIcon />}
          boxShadow="dark-lg"
          borderRadius="md"
        />
        <MenuList>
          <MenuItem>
            New Tab
          </MenuItem>
          <MenuItem>
            New Window
          </MenuItem>
          <MenuItem>
            Open Closed Tab
          </MenuItem>
          <MenuItem>
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default NavBar;
