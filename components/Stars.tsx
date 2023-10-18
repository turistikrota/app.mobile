import { Box, useToken } from "@gluestack-ui/themed";
import React from "react";
import BoxIcon from "~assets/Icons/BoxIcon";

type Props = {
  star: number;
  iconSize?: number;
};

const FiveStars: React.FC<Props> = ({ star, iconSize }) => {
  const halfStars = star < 5 && star % 1 > 0 ? 1 : 0;
  const emptyStars = 5 - Math.trunc(star > 5 ? 5 : star) - halfStars;
  const color = useToken("colors", "secondary500");
  return (
    <Box
      sx={{
        flexDirection: "row",
      }}
    >
      {[...Array(Math.trunc(star > 5 ? 5 : star))].map((_, index) => (
        <BoxIcon
          key={index}
          name="star-alt"
          color={color}
          width={iconSize}
          height={iconSize}
        ></BoxIcon>
      ))}
      {halfStars > 0 && (
        <BoxIcon
          name="star-half"
          color={color}
          width={iconSize}
          height={iconSize}
        ></BoxIcon>
      )}
      {emptyStars > 0 &&
        [...Array(emptyStars)].map((_, index) => (
          <BoxIcon
            name="star"
            key={index}
            color={color}
            width={iconSize}
            height={iconSize}
          ></BoxIcon>
        ))}
    </Box>
  );
};

export default FiveStars;
