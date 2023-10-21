import React from "react";
import { Dimensions, Linking } from "react-native";
import XMarkdown from "~components/XMarkdown";

type Props = {
  content: string;
};
const { width } = Dimensions.get("window");

const openUrl = (url?: string) => {
  if (!url) return;
  Linking.openURL(url).catch(() => {});
};

const PlaceDetailMarkdownContentSection: React.FC<Props> = ({ content }) => {
  return <XMarkdown content={content} />;
};

export default PlaceDetailMarkdownContentSection;
