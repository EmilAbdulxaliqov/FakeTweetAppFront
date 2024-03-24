import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <Box px={"5%"} bg={"#17202A"}>
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateColumns={"1fr 3fr"}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          pl="2"
          bg="pink.300"
          area={"nav"}
          height={"100vh"}
          pos={"sticky"}
          top={"0"}
        >
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default MainLayout;
