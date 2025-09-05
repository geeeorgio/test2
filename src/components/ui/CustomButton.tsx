import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Insets } from 'react-native';
import { COLORS } from 'src/constants/colors';

interface CustomButtonProps {
  children: ReactNode;
  handlePress: () => void;
  isDisabled?: boolean;
  distance?: Insets;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const CustomButton = ({
  children,
  handlePress,
  isDisabled = false,
  distance = { top: 10, bottom: 10, left: 10, right: 10 },
  variant = 'primary',
  fullWidth = false,
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        pressed && styles.btnPressed,
        isDisabled && styles.btnDisabled,
        variant === 'primary' ? styles.prime : styles.secondary,
        fullWidth && { alignSelf: 'stretch' },
      ]}
      onPress={handlePress}
      disabled={isDisabled}
      hitSlop={distance}
    >
      {children}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnPressed: {
    opacity: 0.7,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  prime: {
    backgroundColor: COLORS.accent,
    borderRadius: 15,
    paddingVertical: 27,
    paddingHorizontal: 56,
  },
  secondary: { backgroundColor: COLORS.white, borderRadius: 21 },
});
