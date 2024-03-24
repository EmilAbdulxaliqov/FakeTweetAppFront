import { Text } from "@chakra-ui/react";

function HomePage() {
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
    </div>
  );
}

export default HomePage;
