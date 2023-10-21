import { Heading, Image, Text } from "@gluestack-ui/themed";
import React from "react";
import { Dimensions } from "react-native";
import Markdown from "react-native-markdown-renderer";

type Props = {
  content: string;
};

const { width } = Dimensions.get("window");

const openUrl = (url: string) => {};

const XMarkdown: React.FC<Props> = ({ content }) => {
  return (
    <Markdown
      rules={{
        heading1: (node: any, children: any, parent: any, styles: any) => (
          <Heading key={node.key} color="$textLight800">
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
        image: (node: any, children: any, parent: any, styles: any) => (
          <Image
            key={node.key}
            sx={{
              w: width,
              h: width * 0.7,
              borderRadius: "$sm",
              my: "$2",
            }}
            source={{
              uri: node.attributes.src,
            }}
            alt={node.attributes.alt}
            // add preview on click
          ></Image>
        ),
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

export default XMarkdown;
