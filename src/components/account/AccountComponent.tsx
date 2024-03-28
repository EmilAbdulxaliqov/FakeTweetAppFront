import { Avatar, Box, Image } from "@chakra-ui/react";
import HeaderImg from "../../assets/images/Placeholder.png"
import { useQuery } from "react-query";

import Loading from "../../pages/Loading";
import TabsAccound from "./Tabs";
import { HomeService } from "../../services/api/HomeService";

function AccountComponent() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { isLoding, error, data } = useQuery("user", () => {
    return HomeService.getUserById(user.userId);
  });

  if (isLoding) return <Loading />;
  if (error) return "An error has occurred: " + error;

  return (
    <Box borderX={"1px"} borderColor={"#8899A6"} minH={"100vh"}>
      <Box className="header_img">
        <Image src={HeaderImg} alt="header_img" w={"full"} h={"30vh"} />
      </Box>
      <Box pos={"relative"} top={-10} px={5}>
        <Box className="profile_info">
          <Box className="profile_img">
            <Avatar name={data?.data.username} boxSize={20} />
          </Box>
          <Box
            className="profile_details "
            color={"white"}
            mt={3}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box className="profile_name">{data?.data.username}</Box>
          </Box>
        </Box>
      </Box>
      <TabsAccound/>
    </Box>
  );
}

export default AccountComponent;
