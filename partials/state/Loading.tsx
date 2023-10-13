import { Spinner } from "@gluestack-ui/themed";
import React from "react";

type Props = {
  value: boolean;
};

const Loading: React.FC<React.PropsWithChildren<Props>> = ({
  value,
  children,
}) => {
  if (value) return <Spinner />;
  return <>{children}</>;
};

export default Loading;
