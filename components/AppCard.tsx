import { Box, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import React from "react";
import { BackgroundColors, Colors } from "~config/gluestack-ui.config";
import { useAlert } from "~hooks/alert";

type Props = {
  name: string;
  description: string;
  href: string;
  isReady: boolean;
  bg: BackgroundColors;
  titleColor: Colors;
  descriptionColor: Colors;
  icon: React.ReactNode;
};

const AppCard: React.FC<Props> = ({
  name,
  description,
  href,
  isReady,
  icon,
  bg,
  titleColor,
  descriptionColor,
}) => {
  const alert = useAlert();
  return (
    <Link
      disabled={!isReady}
      href={href}
      style={{
        marginBottom: 10,
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: 10,
        overflow: "hidden",
        flex: 1,
      }}
    >
      <Box
        sx={{
          flexDirection: "row",
          gap: "$3",
          width: "100%",
          p: "$3",
          borderRadius: 10,
          backgroundColor: `$${bg}`,
        }}
      >
        {icon}
        <Box
          sx={{
            flexDirection: "column",
            gap: "$1",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            sx={{
              fontWeight: "$bold",
              fontSize: "$lg",
              color: `$${titleColor}`,
            }}
          >
            {name}
          </Text>
          <Text
            sx={{
              color: `$${descriptionColor}`,
              fontWeight: "$bold",
              fontSize: "$sm",
            }}
          >
            {description}
          </Text>
        </Box>
        {!isReady && (
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              alignItems: "center",
              justifyContent: "center",
              px: "$2",
              py: "$1",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Text sx={{ color: `$red700`, fontSize: "$sm" }}>
              {isReady ? "Ready" : "Coming soon"}
            </Text>
          </Box>
        )}
      </Box>
    </Link>
  );
};

export default AppCard;
export type { Props as AppCardProps };
