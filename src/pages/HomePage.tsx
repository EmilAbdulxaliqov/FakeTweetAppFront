import { Text } from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {HomeService} from "../services/api/HomeService.ts";

function HomePage() {
  const [data, setData] = useState([]); // [1]
  useEffect(() => {
      HomeService.getPosts().then(response => {
            console.log(response);
            setData(response.data);
      });
  }, [])
  return (
    <div>
      <Text
        color="tomato"
        fontStyle={"normal"}
        fontWeight={"900"}
        fontSize={"larger"}
        textAlign={"center"}
        background={"#f5f5f5"}
      >
        Home
      </Text>
      <p>Welcome to the Home page!</p>
        {
            JSON.stringify(data, null, 2)
        }
    </div>
  );
}

export default HomePage;
