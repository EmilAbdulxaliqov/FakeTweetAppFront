import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import TweetTab from "./TweetTab";

function TabsAccound() {
  return (
    <Box>
      <Tabs colorScheme="blue" color={"#8899A6"} mt={10}>
        <TabList
          borderBottom={"1px"}
          borderX={"none"}
          borderTop={"none"}
          gap={4}
        >
          <Tab fontSize={17} fontWeight={700}>
            Tweets
          </Tab>
          <Tab fontSize={17} fontWeight={700}>
            Likes
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
             <TweetTab />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default TabsAccound;
