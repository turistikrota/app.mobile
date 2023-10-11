import { Text } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "~assets/Icons/Logo";

type Props = {
  customized?: string;
};

const HeaderTitle: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const params = useLocalSearchParams();
  const { t } = useTranslation("menu");
  if (children === "index") {
    return <Logo />;
  }
  return (
    <Text>{params && params.title ? params.title : t(children as string)}</Text>
  );
};

export default HeaderTitle;
