import {
  Box,
  Center,
  Heading,
  ScrollView,
  Text,
  VStack,
  View,
  useToken,
} from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";

export default function VisionPage() {
  const { t } = useTranslation("vision");
  const iconColor = useToken("colors", "secondary500");
  const features = ["quality", "experience", "social"];
  const icons: Record<string, string> = {
    quality: "star",
    experience: "trophy",
    social: "group",
  };
  return (
    <View
      sx={{
        bg: "$white",
        h: "$full",
      }}
    >
      <ScrollView>
        <VStack space="md">
          <Text
            sx={{
              pt: "$2",
              px: "$2",
              color: "$textLight600",
            }}
          >
            {t("firstParagraph")}
          </Text>
          <Text
            sx={{
              px: "$2",
              color: "$textLight600",
            }}
          >
            {t("secondParagraph")}
          </Text>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                mx: "$2",
                bg: "$backgroundLightMuted",
                borderRadius: "$sm",
              }}
            >
              <Center>
                <BoxIcon
                  name={icons[feature]}
                  width={64}
                  height={64}
                  color={iconColor}
                />
              </Center>
              <Heading sx={{ color: "$primary500", textAlign: "center" }}>
                {t(`${feature}.title`)}
              </Heading>
              <Text
                sx={{
                  color: "$textLight600",
                  px: "$2",
                  pb: "$2",
                }}
              >
                {t(`${feature}.text`)}
              </Text>
            </Box>
          ))}
        </VStack>
      </ScrollView>
    </View>
  );
}
