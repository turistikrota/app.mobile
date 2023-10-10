import { Image } from "@gluestack-ui/themed";
import React from "react";

const SvgComponent = () => {
  return (
    <Image
      source={require("../../assets/tr.png")}
      fadeDuration={0}
      style={{ width: 20, height: 20 }}
    ></Image>
  );
};

export default SvgComponent;
