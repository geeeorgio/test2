import React, { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Insets,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { COLORS } from 'src/constants/colors';

interface CustomButtonProps {
  children: ReactNode;
  handlePress: () => void;
  isDisabled?: boolean;
  distance?: Insets;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
}

const CustomButton = ({
  children,
  handlePress,
  isDisabled = false,
  distance = { top: 10, bottom: 10, left: 10, right: 10 },
  variant = 'primary',
  fullWidth = false,
  extraStyle,
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        extraStyle,
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
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.44,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btnPressed: {
    opacity: 0.8,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  prime: {
    backgroundColor: COLORS.accent,
    borderRadius: 15,
  },
  secondary: {
    backgroundColor: COLORS.white,
    borderRadius: 21,
  },
});
