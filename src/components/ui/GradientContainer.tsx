import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from 'src/constants/colors';

interface GradientContainerProps {
  colors?: string[];
  extraStyle?: StyleProp<ViewStyle>;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  children: ReactNode;
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
  gradientContainer: { borderRadius: 22 },
});
