import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
function SidebarLinks() {
  return (
    <Box className="nav_links">
      <List>
        <ListItem py={3} color={"white"} fontSize={19} w={"min-content"}>
          <Link to="/">
            <Box
              _hover={{ color: "#1DA1F2", transition: "0.5s" }}
              display={"flex"}
              alignItems={"center"}
            >
              <ListIcon as={BiSolidHomeCircle} fontSize={30}></ListIcon>
              Home
            </Box>
          </Link>
        </ListItem>

        <ListItem py={3} color={"white"} fontSize={19} w={"min-content"}>
          <Link to="/user">
            <Box
              _hover={{ color: "#1DA1F2", transition: "0.5s" }}
              display={"flex"}
              alignItems={"center"}
            >
              <ListIcon as={FaRegUser} fontSize={30}></ListIcon>
              Profile
            </Box>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default SidebarLinks;
