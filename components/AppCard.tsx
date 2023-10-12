import { Box, Pressable, Text, useToken } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { BackgroundColors, Colors } from "~config/gluestack-ui.config";

type Props = {
  name: string;
  href: string;
  isReady: boolean;
  bg: BackgroundColors;
  titleColor: Colors;
  descriptionColor: Colors;
  icon: React.ReactNode;
};

const AppCard: React.FC<Props> = ({
  name,
  href,
  isReady,
  icon,
  bg,
  titleColor,
  descriptionColor,
}) => {
  const bgColor = useToken("colors", bg);
  return (
    <Pressable
      sx={{
        position: "relative",
        width: "48.8%",
        backgroundColor: bgColor,
        borderRadius: "$sm",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      disabled={!isReady}
      onPress={() => router.push(href)}
    >
      {!isReady && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "$sm",
              opacity: 0.5,
              backgroundColor: "$white",
              padding: "$3",
              zIndex: 1,
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              top: -55,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                px: "$2",
                backgroundColor: `$red100`,
                borderRadius: "$md",
              }}
            >
              <Text
                sx={{
                  color: `$red500`,
                  fontSize: "$xs",
                }}
              >
                Coming Soon
              </Text>
            </Box>
          </Box>
        </>
      )}
      <Text
        sx={{
          mt: "$5",
        }}
      >
        {icon}
      </Text>

      <Text
        sx={{
          fontWeight: "$bold",
          fontSize: "$lg",
          color: `$${titleColor}`,
          mb: "$5",
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};

export default AppCard;
export type { Props as AppCardProps };
