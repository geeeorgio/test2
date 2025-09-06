import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import GradientContainer from 'src/components/ui/GradientContainer';
import { COLORS } from 'src/constants/colors';
import { FONTS } from 'src/constants/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.guideImg}
        source={require('../../assets/images/ASSISTANT2.png')}
        resizeMode="cover"
      />
      <GradientContainer extraStyle={styles.guideWrapper}>
        <Text style={styles.guide}>Your guide</Text>
        <Text style={[styles.guide, styles.guideTransparent]}>Your guide</Text>
        <Text style={styles.text}>Annette</Text>

        <View style={styles.logoWrapper}>
          <Image
            style={styles.logoImg}
            source={require('../../assets/images/LOGO2.png')}
            resizeMode="cover"
          />
        </View>
      </GradientContainer>
      <GradientContainer extraStyle={styles.mapWrapper}>
        <View>
          <Text style={{ color: 'white' }}>Map</Text>
        </View>
      </GradientContainer>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 19 },
  guideWrapper: {
    marginTop: 115,
  },
  guideImg: {
    position: 'absolute',
    left: 18,
    top: 1,
    width: 232,
    height: 312,
    transform: [{ rotateY: '180deg' }],
    borderBottomLeftRadius: 28,
    zIndex: 111,
  },
  guide: {
    color: COLORS.semiTransparentWhite,
    fontWeight: 600,
    fontSize: 48,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONTS.main,
    paddingTop: 20,
    paddingHorizontal: 17,
  },
  guideTransparent: {
    position: 'absolute',
    top: 50,
    left: 5,
    color: COLORS.maxTransparentWhite,
  },
  text: {
    color: COLORS.white,
    alignSelf: 'flex-end',
    fontSize: 24,
    paddingRight: 17,
    fontWeight: 500,
    fontFamily: FONTS.main,
    marginBottom: 8,
  },
  logoWrapper: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    paddingRight: 16,
    shadowColor: 'rgba(0, 0, 0, 0.44)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

    elevation: 7,
  },
  logoImg: {
    width: 66,
    height: 66,
    borderRadius: 22,
    shadowColor: 'rgba(0, 0, 0, 0.44)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5,

    elevation: 7,
  },
  mapWrapper: {
    marginTop: 20,
  },
});
