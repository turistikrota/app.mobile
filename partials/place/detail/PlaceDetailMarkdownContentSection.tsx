import React from "react";
import XMarkdown from "~components/XMarkdown";

type Props = {
  content: string;
  onClose?: () => void;
};

const PlaceDetailMarkdownContentSection: React.FC<Props> = ({
  content,
  onClose,
}) => {
  return <XMarkdown content={content} onClose={onClose} />;
};

export default PlaceDetailMarkdownContentSection;
