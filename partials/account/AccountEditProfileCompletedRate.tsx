import { useToken } from "@gluestack-style/react";
import { Center, Text } from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import CircularProgress from "react-native-circular-progress-indicator";

type Props = {
  value: number;
};

const AccountEditProfileCompletedRate: React.FC<Props> = ({ value }) => {
  const { t } = useTranslation("account");
  const stroke = useToken("colors", "primary300");
  const color = useToken("colors", "secondary500");
  return (
    <Center
      sx={{
        bg: "$primary50",
        p: "$2",
        borderRadius: "$md",
      }}
    >
      <CircularProgress
        value={value}
        inActiveStrokeColor={stroke}
        activeStrokeColor={stroke}
        inActiveStrokeOpacity={0.2}
        progressValueColor={color}
        valueSuffix={"%"}
      />
      <Text
        sx={{
          fontSize: "$lg",
          fontWeight: "$semibold",
          color: "$primary500",
          textAlign: "center",
          mt: "$2",
        }}
      >
        {t("completion.title")}
      </Text>
      <Text
        sx={{
          fontSize: "$sm",
          color: "$primary500",
          textAlign: "center",
          mt: "$1",
        }}
      >
        {t("completion.desc")}
      </Text>
    </Center>
  );
};

export default AccountEditProfileCompletedRate;
