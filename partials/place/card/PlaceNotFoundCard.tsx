import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useToken,
} from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";

type Props = {
  onReset: () => void;
  isFiltered?: boolean;
};

const PlaceNotFoundCard: React.FC<Props> = ({
  isFiltered = false,
  onReset,
}) => {
  const { t } = useTranslation("place");
  const iconColor = useToken("colors", "secondary500");
  return (
    <Center>
      <BoxIcon name="search" color={iconColor} width={80} height={80} />
      <Heading size="md">{t("notFound.title")}</Heading>
      <Box mt="$2">
        <Text textAlign="center">{t("notFound.desc")}</Text>
      </Box>
      {isFiltered && (
        <Button mt="$2" onPress={() => onReset()}>
          <Text color="$white">{t("notFound.button")}</Text>
        </Button>
      )}
    </Center>
  );
};

export default PlaceNotFoundCard;
