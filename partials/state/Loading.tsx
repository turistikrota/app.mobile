import { Spinner } from "@gluestack-ui/themed";
import React from "react";

type Props = {
  value: boolean;
  color?: string;
};

const Loading: React.FC<React.PropsWithChildren<Props>> = ({
  value,
  children,
  color,
}) => {
  if (value) return <Spinner color={color} />;
  return <>{children}</>;
};

export default Loading;
