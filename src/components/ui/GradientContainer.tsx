import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from 'src/constants/colors';

interface GradientContainerProps {
  colors?: string[];
  extraStyle?: StyleProp<ViewStyle>;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  children?: ReactNode;
}

const GradientContainer = ({
  colors = COLORS.gradient,
  extraStyle,
  start = { x: 0.5, y: 0 },
  end = { x: 0.5, y: 1 },
  children,
}: GradientContainerProps) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.gradientContainer, extraStyle]}
      start={start}
      end={end}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: 22,
  },
});
