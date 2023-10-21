import { View } from "@gluestack-ui/themed";
import React from "react";
import FitImage from "react-native-fit-image";
import Markdown from "react-native-markdown-display";

type Props = {
  content: string;
};

const newRules = {
  image: (
    node: any,
    children: any,
    parent: any,
    styles: any,
    allowedImageHandlers: any,
    defaultImageHandler: any
  ) => {
    const { src, alt } = node.attributes;
    const show =
      allowedImageHandlers.filter((value: any) => {
        return src.toLowerCase().startsWith(value.toLowerCase());
      }).length > 0;

    if (show === false && defaultImageHandler === null) {
      return null;
    }

    const imageProps: any = {
      indicator: true,
      key: node.key,
      style: styles._VIEW_SAFE_image,
      source: {
        uri: show === true ? src : `${defaultImageHandler}${src}`,
      },
    };

    if (alt) {
      imageProps.accessible = true;
      imageProps.accessibilityLabel = alt;
    }

    return <FitImage {...imageProps} borderRadius={4} />;
  },
  blockquote: (node: any, children: any, parent: any, styles: any) => (
    <View
      key={node.key}
      style={{
        ...styles._VIEW_SAFE_blockquote,
      }}
      my="$2"
    >
      {children}
    </View>
  ),
};

const XMarkdown: React.FC<Props> = ({ content }) => {
  const onLinkPress = (url: string) => {
    if (url) {
      // some custom logic
      return false;
    }

    // return true to open with `Linking.openURL
    // return false to handle it yourself
    return true;
  };
  // @ts-ignore
  return (
    <Markdown rules={newRules} onLinkPress={onLinkPress}>
      {content}
    </Markdown>
  );
};

export default XMarkdown;
