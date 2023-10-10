import { Box, View } from "@gluestack-ui/themed";
import { Slot } from "expo-router";
import Logo from "../../assets/Icons/Logo";

export default function AuthLayout() {
  return (
    <View px="$4">
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          w: "$full",
        }}
      >
        <Logo.Vertical />
      </Box>
      <Slot></Slot>
    </View>
  );
}
