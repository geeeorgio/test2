import React, { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from 'src/constants/colors';
import CustomText from './CustomText';
import GradientContainer from './GradientContainer';

interface GuidePannelProps {
  children?: ReactNode;
}

const GuidePannel = ({ children }: GuidePannelProps) => {
  return (
    <View>
      <Image
        style={styles.guideImg}
        source={require('../../assets/images/ASSISTANT2.png')}
        resizeMode="cover"
      />
      <GradientContainer extraStyle={styles.guideWrapper}>
        <CustomText extraStyle={styles.guide}>Your guide</CustomText>
        <CustomText extraStyle={[styles.guide, styles.guideTransparent]}>
          Your guide
        </CustomText>
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
      </GradientContainer>
    </View>
  );
};

export default GuidePannel;

const styles = StyleSheet.create({
  guideImg: {
    position: 'absolute',
    left: 2,
    top: -44,
    width: 220,
    height: 326,
    transform: [{ rotateY: '180deg' }],
    borderBottomLeftRadius: 28,
    zIndex: 111,
  },
  guideWrapper: {
    marginTop: 84,
  },
  guide: {
    color: COLORS.semiTransparentWhite,
    fontWeight: 600,
    fontSize: 48,
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingHorizontal: 17,
    paddingTop: 20,
  },
  guideTransparent: {
    position: 'absolute',
    top: 50,
    left: 5,
    color: COLORS.maxTransparentWhite,
  },
  text: {
    alignSelf: 'flex-end',
    fontSize: 24,
    paddingRight: 17,
    fontWeight: 500,
    marginBottom: 8,
  },
  logoWrapper: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    paddingRight: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

    elevation: 7,
  },
  logoImg: {
    width: 66,
    height: 66,
    borderRadius: 22,
  },
});
