declare module "react-native-markdown-renderer" {
  import { Component } from "react";
  import { StyleProp, TextStyle, ViewStyle } from "react-native";

  interface MarkdownStyles {
    [key: string]: StyleProp<TextStyle | ViewStyle>;
  }

  interface MarkdownProps {
    children: string;
    styles?: MarkdownStyles;
    rules?: any;
  }

  export default class Markdown extends Component<MarkdownProps> {}

  export const getUniqueID: () => string;
}
