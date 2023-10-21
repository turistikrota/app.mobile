import { Box, Heading, Text } from "@gluestack-ui/themed";
import React from "react";
import { Dimensions, Linking } from "react-native";
import FastImage from "react-native-fast-image";
import Markdown from "react-native-markdown-renderer";

type Props = {
  content: string;
};
const { width } = Dimensions.get("window");

const openUrl = (url?: string) => {
  if (!url) return;
  Linking.openURL(url).catch(() => {});
};

const PlaceDetailMarkdownContentSection: React.FC<Props> = ({ content }) => {
  return (
    <Markdown
      rules={{
        heading1: (node: any, children: any, parent: any, styles: any) => (
          <Heading key={node.key} color="$textLight800" mb="$2">
            {children}
          </Heading>
        ),
        heading2: (node: any, children: any, parent: any, styles: any) => (
          <Heading key={node.key} size="md" color="$textLight800">
            {children}
          </Heading>
        ),
        heading3: (node: any, children: any, parent: any, styles: any) => (
          <Heading key={node.key} size="md" color="$textLight700">
            {children}
          </Heading>
        ),
        heading4: (node: any, children: any, parent: any, styles: any) => (
          <Heading key={node.key} size="md" color="$textLight600">
            {children}
          </Heading>
        ),
        heading5: (node: any, children: any, parent: any, styles: any) => (
          <Heading key={node.key} size="md" color="$textLight500">
            {children}
          </Heading>
        ),
        heading6: (node: any, children: any, parent: any, styles: any) => (
          <Heading key={node.key} size="md" color="$textLight500">
            {children}
          </Heading>
        ),
        image: (node: any, children: any, parent: any, styles: any) => {
          return (
            <Box key={node.key} my="$1">
              <FastImage
                style={{
                  width: width - 2 * 8,
                  height: width * 0.7,
                  borderRadius: 4,
                }}
                aria-label={node.attributes.alt}
                source={{
                  uri: node.attributes.src,
                  priority: FastImage.priority.high,
                }}
              ></FastImage>
            </Box>
          );
        },
        strong: (node: any, children: any, parent: any, styles: any) => (
          <Text
            key={node.key}
            sx={{ fontWeight: "bold" }}
            color="$textLight600"
            size="md"
          >
            {children}
          </Text>
        ),
        paragraph: (node: any, children: any, parent: any, styles: any) => (
          <Text
            key={node.key}
            sx={{ fontWeight: "normal" }}
            color="$textLight600"
            size="md"
            mb="$1"
          >
            {children}
          </Text>
        ),
        list_item: (node: any, children: any, parent: any, styles: any) => (
          <Text
            key={node.key}
            sx={{
              fontWeight: "normal",
              ml: "$2",
              mb: "$1",
            }}
            color="$textLight600"
            size="md"
          >
            {children}
          </Text>
        ),
        link: (node: any, children: any, parent: any, styles: any) => (
          <Text
            key={node.key}
            sx={{
              fontWeight: "normal",
              color: "$primary600",
            }}
            color="$primary600"
            size="md"
            onPress={() => openUrl(node.attributes.href)}
          >
            {children}
          </Text>
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default PlaceDetailMarkdownContentSection;
