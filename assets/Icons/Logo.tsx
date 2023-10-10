import { Image } from "@gluestack-ui/themed";
import React from "react";

const Logo = () => {
  return (
    <Image
      source={require("../../assets/tr.png")}
      fadeDuration={0}
      style={{ width: 20, height: 20 }}
      alt={"logo"}
    ></Image>
  );
};

const VerticalLogo = () => {
  return (
    <Image
      source={require("../../assets/vertical-logo.png")}
      fadeDuration={0}
      style={{ width: 222.666666667, height: 47 }}
      alt={"logo"}
    ></Image>
  );
};

Logo.Vertical = VerticalLogo;

export default Logo;
