import type { HeaderButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import BoxIcon from "~assets/Icons/BoxIcon";

const HeaderRight: React.FC<HeaderButtonProps> = ({ canGoBack }) => {
  if (canGoBack) {
    return null;
  }
  return <BoxIcon name="user" />;
};

export default HeaderRight;
