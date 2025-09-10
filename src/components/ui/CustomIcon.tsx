import { COLORS } from 'src/constants/colors';
import { IconName, ICONS } from 'src/constants/icons';

interface IconsProps {
  name: IconName;
  width: number;
  height: number;
  stroke?: string;
  fill?: string;
}

const CustomIcon = ({
  name,
  width = 24,
  height = 24,
  stroke = COLORS.white,
  fill = COLORS.white,
}: IconsProps) => {
  const iconData = ICONS.find((item) => item.name === name);
  if (!iconData) return;

  const IconComponent = iconData.component;

  if (iconData.type === 'fill') {
    return <IconComponent width={width} height={height} fill={fill} />;
  }

  return (
    <IconComponent
      width={width}
      height={height}
      stroke={stroke}
      strokeWidth={2}
    />
  );
};

export default CustomIcon;
