import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
function SidebarLinks() {
  const route = useLocation();
  const routeName = route.pathname.split("/")[1];
  return (
    <Box className="nav_links">
      <List>
        <ListItem py={3} color={"white"} fontSize={19} w={"min-content"}>
          <Link to="/">
            <Box
              _hover={{ color: "#1DA1F2", transition: "0.5s" }}
              display={"flex"}
              alignItems={"center"}
              color={{ base: routeName === "" ? "#1DA1F2" : "white" }}
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
              color={{
                base: routeName === "user" ? "#1DA1F2" : "white",
              }}
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
