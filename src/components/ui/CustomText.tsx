import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { StyleSheet, Text } from 'react-native';

import { COLORS } from 'src/constants/colors';
import { FONTS } from 'src/constants/fonts';

interface CustomTextProps {
  extraStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}

const CustomText = ({ extraStyle, children }: CustomTextProps) => {
  return <Text style={[styles.default, extraStyle]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  default: {
    fontFamily: FONTS.main,
    color: COLORS.white,
  },
});
