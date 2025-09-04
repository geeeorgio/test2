import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const LogoImg = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/LOGO2.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default LogoImg;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: 213,
    height: 213,
    alignSelf: 'center',
    borderRadius: 44,
    marginTop: 96,
  },
  logo: {
    width: '100%',
    height: 'auto',
    resizeMode: 'contain',
  },
});
