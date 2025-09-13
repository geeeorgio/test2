import type { ReactNode } from 'react';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { COLORS } from 'src/constants/colors';

import CustomText from './CustomText';
import GradientContainer from './GradientContainer';

interface GuidePannelProps {
  children?: ReactNode;
}

const GuidePannel = ({ children }: GuidePannelProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.guideImg}
        source={require('../../assets/images/ASSISTANT2.png')}
        resizeMode="cover"
      />

      <View style={styles.content}>
        {children ? (
          children
        ) : (
          <CustomText extraStyle={styles.text}>Annette</CustomText>
        )}

        <View style={styles.logoWrapper}>
          <Image
            style={styles.logoImg}
            source={require('../../assets/images/LOGO2.png')}
            resizeMode="cover"
          />
        </View>
      </View>

      <GradientContainer extraStyle={styles.guideWrapper}>
        <View style={styles.transparentWrapper}>
          <CustomText extraStyle={styles.guide}>Your guide</CustomText>
          <CustomText extraStyle={[styles.guide, styles.guideTransparent]}>
            Your guide
          </CustomText>
          <CustomText extraStyle={[styles.guide, styles.guideMaxTransparent]}>
            Your guide
          </CustomText>
        </View>
      </GradientContainer>
    </View>
  );
};

export default GuidePannel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  guideImg: {
    width: 208,
    height: 288,
    transform: [{ rotateY: '180deg' }],
    borderBottomLeftRadius: 28,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: 16,
    gap: 8,
    paddingRight: 17,
  },
  text: {
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 500,
  },
  logoWrapper: {
    alignItems: 'flex-end',
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.44,
    shadowRadius: 7,

    elevation: 10,
  },
  logoImg: {
    width: 66,
    height: 66,
    borderRadius: 22,
  },
  guideWrapper: {
    position: 'absolute',
    top: 84,
    width: '100%',
  },
  transparentWrapper: {
    paddingTop: 20,
    paddingBottom: 8,
  },
  guide: {
    color: COLORS.semiTransparentWhite,
    fontWeight: 600,
    fontSize: 48,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  guideTransparent: {
    color: COLORS.transparentWhite,
  },
  guideMaxTransparent: {
    color: COLORS.maxTransparentWhite,
  },
});
