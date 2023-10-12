import { Text } from "@gluestack-ui/themed";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  customized?: string;
};

const HeaderTitle: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const params = useGlobalSearchParams();
  const { t } = useTranslation("menu");
  return (
    <Text isTruncated>
      {params && params.title ? params.title : t(children as string)}
    </Text>
  );
};

export default HeaderTitle;
