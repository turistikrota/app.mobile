import {
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  Text,
  VStack,
  View,
  useToken,
} from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { usePlaceFilter } from "~contexts/place-filter";
import { useAlert } from "~hooks/alert";
import { deepMerge } from "~utils/object";

const list = [1, 2, 3, 4, 5];

const lastIdx = list.length - 1;

function PlaceFilterReviewGroup() {
  const { t } = useTranslation("place");
  const { query, setQuery } = usePlaceFilter();
  const iconColor = useToken("colors", "secondary500");
  const alert = useAlert();

  const currentMinReview = useMemo(() => {
    return query.filter.minReview;
  }, [query.filter.minReview]);

  const onSelect = (minReview: string) => {
    setQuery(deepMerge(query, { filter: { minReview: +minReview } }));
  };

  return (
    <VStack space="lg">
      <Alert mt="$2" action="info" variant="accent">
        <AlertIcon as={InfoIcon} mr="$3" />
        <AlertText>{t("filter.review.description")}</AlertText>
      </Alert>
      <RadioGroup value={`${currentMinReview}`} onChange={onSelect}>
        <VStack space="lg">
          {list.map((num, idx) => (
            <Radio
              value={num.toString()}
              key={num}
              size="md"
              justifyContent="space-between"
            >
              <RadioLabel>
                <View
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "$2",
                    mb: 0,
                    pb: 0,
                    h: "auto",
                  }}
                >
                  <BoxIcon name="star-alt" color={iconColor} />
                  <Text>
                    {t(
                      lastIdx === idx
                        ? "filter.review.labels.last"
                        : "filter.review.labels.x",
                      {
                        star: num,
                      }
                    )}
                  </Text>
                </View>
              </RadioLabel>
              <RadioIndicator
                mr="$2"
                bgColor={currentMinReview === num ? "$primary500" : undefined}
              >
                <BoxIcon name="check" width={22} height={22} color={"white"} />
              </RadioIndicator>
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </VStack>
  );
}

export default PlaceFilterReviewGroup;
