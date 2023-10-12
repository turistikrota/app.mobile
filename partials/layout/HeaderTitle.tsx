import { Text } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  customized?: string;
};

const HeaderTitle: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const params = useLocalSearchParams();
  const { t } = useTranslation("menu");
  return (
    <Text>{params && params.title ? params.title : t(children as string)}</Text>
  );
};

export default HeaderTitle;
