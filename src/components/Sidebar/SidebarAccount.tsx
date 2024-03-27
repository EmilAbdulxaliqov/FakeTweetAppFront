import {
  Avatar,
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
function SidebarAccount() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth/login";
  };

  return (
    <Box
      className="sidebar_accound"
      pos={"absolute"}
      w={"full"}
      bottom={"20px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Link to="/user/2" style={{ width: "50%" }}>
        <Box display={"flex"} gap={3} alignItems={"center"}>
          <Avatar name={user?.sub || ""} boxSize={10} />
          <Text color={"white"} w={"100%"}>
            {user?.sub}
          </Text>
        </Box>
      </Link>

      <Menu placement="top-end">
        <MenuButton>
          <Icon as={BsThreeDots} color={"white"} />
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="#" display={"flex"} gap={3} onClick={Logout}>
            <Icon as={MdLogout} />
            Logout
          </MenuItem>
          <MenuItem as="a" href="/service" display={"flex"} gap={3}>
            <Icon as={BsFillGearFill} />
            Service
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SidebarAccount;
