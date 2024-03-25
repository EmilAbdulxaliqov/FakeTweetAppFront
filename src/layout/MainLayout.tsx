import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";

function MainLayout() {
  return (
    <Box px={"5%"} bg={"#17202A"}>
      <Grid
        templateAreas={{base:`"main main"`, md: `"nav main side"` }}
        gridTemplateColumns={"1fr 3fr 1fr"}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          display={{base: "none", md: "block" }}
          px="2"
          area={"nav"}
          height={"100vh"}
          pos={"sticky"}
          top={"0"}
        >
          <Sidebar />
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default MainLayout;
