import React, { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from 'src/constants/colors';
import GradientContainer from './GradientContainer';

interface InfoPannelProps {
  children: ReactNode;
}

const InfoPannel = ({ children }: InfoPannelProps) => {
  return (
    <GradientContainer extraStyle={styles.main}>
      <Image
        style={styles.guideImg}
        source={require('../../assets/images/ASSISTANT2.png')}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        {children}
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logoImg}
            source={require('../../assets/images/LOGO2.png')}
            resizeMode="cover"
          />
        </View>
      </View>
    </GradientContainer>
  );
};

export default InfoPannel;

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  guideImg: {
    position: 'absolute',
    left: -12,
    top: -19,
    width: 263,
    height: 383,
    transform: [{ rotateY: '180deg' }],
    borderRadius: 22,
    zIndex: 12,
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
    marginLeft: 143,
    paddingTop: 27,
    paddingRight: 14,
    gap: 56,
  },
  logoWrapper: {
    alignSelf: 'flex-end',
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.44,
    shadowRadius: 6.27,

    elevation: 10,
  },
  logoImg: {
    width: 164,
    height: 164,
    borderRadius: 22,
  },
});
