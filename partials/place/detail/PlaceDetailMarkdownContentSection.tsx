import { Heading } from "@gluestack-ui/themed";
import React from "react";
import Markdown, { getUniqueID } from "react-native-markdown-renderer";

type Props = {
  content: string;
};

const PlaceDetailMarkdownContentSection: React.FC<Props> = ({ content }) => {
  return (
    <Markdown
      rules={{
        heading1: (node: any, children: any, parent: any, styles: any) => (
          <Heading key={getUniqueID()}>{children}</Heading>
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default PlaceDetailMarkdownContentSection;
