import React from "react";
import { G, Svg, TSpan, Text } from "react-native-svg";

/*
<?xml version="1.0" encoding="UTF-8"?>
<svg id="katman_2" data-name="katman 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.85 28.1">
  <defs>
    <style>
      .cls-1 {
        fill: #4594d0;
      }

      .cls-1, .cls-2 {
        font-family: Verdana, Verdana;
        font-size: 24px;
      }

      .cls-2 {
        fill: #faa41a;
      }
    </style>
  </defs>
  <g id="Layer_1" data-name="Layer 1">
    <text class="cls-2" transform="translate(0 20.81)"><tspan x="0" y="0">turistik</tspan></text>
    <text class="cls-1" transform="translate(83.79 20.82)"><tspan x="0" y="0">rota</tspan></text>
  </g>
</svg>
*/

const LogoVerticalSvg = () => {
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

const LogoSvg = () => {
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

export default LogoVerticalSvg;
