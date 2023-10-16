import { Avatar, AvatarImage } from "@gluestack-ui/themed";
import React from "react";
import { G, Svg, TSpan, Text } from "react-native-svg";
// @ts-ignore
import MiniLogo from "../minilogo.png";

const Logo = () => {
  return (
    <Svg width="132.85" height="28.1" viewBox="0 0 132.85 28.1" fill="none">
      <G id="Layer_1" data-name="Layer 1">
        <Text
          fill="#FAA41A"
          fontFamily="Verdana"
          fontSize="24"
          transform="translate(0 20.81)"
        >
          <TSpan x="0" y="0">
            turistik
          </TSpan>
        </Text>
        <Text
          fill="#4594D0"
          fontFamily="Verdana"
          fontSize="24"
          transform="translate(83.79 20.82)"
        >
          <TSpan x="0" y="0">
            rota
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
};

type Props = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  borderRadius?:
    | "$full"
    | "$none"
    | "$xs"
    | "$sm"
    | "$md"
    | "$lg"
    | "$xl"
    | "$2xl"
    | "$3xl"
    | undefined;
};

const LogoImage: React.FC<Props> = ({ size = "sm", borderRadius = "$sm" }) => {
  return (
    <Avatar size={size} borderRadius={borderRadius}>
      <AvatarImage
        source={MiniLogo}
        sx={{
          borderRadius: borderRadius,
        }}
      />
    </Avatar>
  );
};

const LogoMini = () => {
  return (
    <Svg width="20.33" height="28.1" viewBox="0 0 20.33 28.1" fill="none">
      <G id="Layer_1" data-name="Layer 1">
        <Text
          fill="#FAA41A"
          fontFamily="Verdana"
          fontSize="24"
          transform="translate(0 20.81)"
        >
          <TSpan x="0" y="0">
            t
          </TSpan>
        </Text>
        <Text
          fill="#4594D0"
          fontFamily="Verdana"
          fontSize="24"
          transform="translate(8.26 20.82)"
        >
          <TSpan x="0" y="0">
            r
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
};

export default LogoImage;
