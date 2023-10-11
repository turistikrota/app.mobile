import type { HeaderButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import UserIcon from "~assets/Icons/UserIcon";

const HeaderRight: React.FC<HeaderButtonProps> = ({ canGoBack }) => {
  if (canGoBack) {
    return null;
  }
  return <UserIcon />;
};

export default HeaderRight;
