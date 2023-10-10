import { createIconSet } from "@expo/vector-icons";

const glyphMap = { "icon-name": 1234, test: "∆" };

const CustomIcon = createIconSet(glyphMap, "fontFamily", "boxicons.ttf");

type Props = {
  name: string;
  size: number;
  color: string;
};

const BoxIcons: React.FC<Props> = ({ name, size, color }) => {
  return <CustomIcon name={name as any} size={size} color={color} />;
};

export default BoxIcons;
