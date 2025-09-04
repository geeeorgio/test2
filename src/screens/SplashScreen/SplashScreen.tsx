import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogoImg from 'src/components/ui/LogoImg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LogoImg />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
