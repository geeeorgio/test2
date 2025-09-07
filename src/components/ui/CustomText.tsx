import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
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
