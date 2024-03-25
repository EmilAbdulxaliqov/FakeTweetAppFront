import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/Aftafa.png";
import SidebarLinks from "./SidebarLinks";
import SidebarAccound from "./SidebarAccound";

function Sidebar() {
  return (
    <Box pos={"relative"} h={"full"}>
      <Box className="site_icon" p={2}>
        <Image src={logo} alt="site logo" h={"36px"} w={"36px"} />
      </Box>
      <SidebarLinks />
      <SidebarAccound />
    </Box>
  );
}

export default Sidebar;
