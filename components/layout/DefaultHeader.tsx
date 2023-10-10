import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Box, Text } from "@gluestack-ui/themed";
import React from "react";
import { Image } from "react-native";

const Header = () => {
  return (
    <Box
      sx={{
        p: "$3",
        flexDirection: "row",
        w: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Image
          source={require("../../assets/tr.png")}
          fadeDuration={0}
          style={{ width: 20, height: 20 }}
        ></Image>
      </Box>
      <Box sx={{}}>
        <Text>may be searchbar</Text>
      </Box>
      <Box>
        <FontAwesome size={20} name="user" />
      </Box>
    </Box>
  );
};

export default Header;
