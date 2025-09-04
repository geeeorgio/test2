import { COLORS } from 'src/constants/colors';
import { IconNames, ICONS } from 'src/constants/icons';

interface IconsProps {
  name: IconNames;
  width: number;
  height: number;
  stroke?: string;
  fill?: string;
}

const CustomIcon = ({
  name,
  width = 30,
  height = 30,
  stroke = COLORS.white,
  fill = COLORS.white,
}: IconsProps) => {
  const SelectedIcon = ICONS[name];

  if (!SelectedIcon) return null;

  return (
    <SelectedIcon width={width} height={height} stroke={stroke} fill={fill} />
  );
};

export default CustomIcon;
