import { AntDesign } from "@expo/vector-icons";
import { Box } from "@gluestack-ui/themed";
import React from "react";
import LogoSvg from "../../assets/Icons/LightbulbPerson";

const Header = () => {
  return (
    <Box
      sx={{
        px: "$2",
        h: "$11",
        flexDirection: "row",
        w: "$full",
        alignItems: "center",
        borderBottomColor: "$borderLight100",
        borderBottomWidth: 1,
      }}
    >
      <Box w="$1/6"></Box>
      <Box
        w="$4/6"
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoSvg />
      </Box>
      <Box
        w="$1/6"
        sx={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <AntDesign name="user" size={20} color="black" />
      </Box>
    </Box>
  );
};

export default Header;
