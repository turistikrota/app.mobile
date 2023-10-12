import {
  Box,
  Pressable,
  Progress,
  ProgressFilledTrack,
  Text,
} from "@gluestack-ui/themed";
import React from "react";

type Props = {
  onPress: () => void;
  icon: React.ReactNode;
  userName: string;
  fullName?: string;
  progress?: number;
  disabled?: boolean;
};

const AccountSelectionCard: React.FC<Props> = ({
  onPress,
  icon,
  userName,
  fullName,
  progress,
  disabled
}) => {
  return (
    <Pressable sx={{ mb: "$4", flex: 1 }} onPress={onPress} disabled={disabled}>
      <Box
        sx={{
          flexDirection: "row",
          alignItems: "center",
          bg: "$light50",
          borderTopLeftRadius: "$sm",
          borderTopRightRadius: "$sm",
          borderBottomRightRadius: !progress ? "$sm" : 0,
          borderBottomLeftRadius: !progress ? "$sm" : 0,
        }}
      >
        <Box
          sx={{
            w: "$1/4",
            justifyContent: "center",
            alignItems: "center",
            p: "$4",
          }}
        >
          {icon}
        </Box>
        <Box
          sx={{
            w: "$3/4",
            p: "$4",
            bg: "$light100",
            h: "$full",
            alignItems: "flex-start",
            justifyContent: "center",
            borderTopRightRadius: "$sm",
            borderBottomRightRadius: !progress ? "$sm" : 0,
          }}
        >
          <Text sx={{ fontSize: "$lg", fontWeight: "bold" }}>{userName}</Text>
          {fullName && (
            <Text sx={{ fontSize: "$sm", color: "$trueGray600" }}>
              {fullName}
            </Text>
          )}
        </Box>
      </Box>
      {progress && (
        <Progress
          value={progress}
          w="$full"
          size="xs"
          bgColor="$light200"
          borderTopRightRadius="$sm"
          borderTopLeftRadius="$sm"
        >
          <ProgressFilledTrack bgColor="$green500" />
        </Progress>
      )}
    </Pressable>
  );
};

export default AccountSelectionCard;
