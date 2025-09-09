import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from 'src/constants/colors';
import { IconNames } from 'src/constants/icons';
import CustomIcon from '../ui/CustomIcon';
import GradientContainer from './GradientContainer';

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <GradientContainer extraStyle={styles.gradientWrapper}>
      <View style={styles.tabBarContent}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const name = route.name as IconNames;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.btn, isFocused && styles.active]}
              accessibilityRole="button"
              accessibilityState={{ selected: isFocused }}
              accessibilityLabel={options.tabBarAccessibilityLabel}
            >
              <CustomIcon
                name={name}
                width={30}
                height={30}
                stroke={isFocused ? COLORS.primaryDark : COLORS.white}
                fill={isFocused ? COLORS.primaryDark : COLORS.white}
              />
            </PlatformPressable>
          );
        })}
      </View>
    </GradientContainer>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  gradientWrapper: {
    position: 'absolute',
    bottom: 28,
    left: 7,
    right: 7,
  },
  tabBarContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  btn: {
    padding: 17,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: COLORS.accent,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.44,
    shadowRadius: 7,

    elevation: 10,
  },
});
