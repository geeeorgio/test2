import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LogoImg = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../assets/images/LOADER.png')}
      resizeMode="cover"
    />
  );
};

export default LogoImg;

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
});
