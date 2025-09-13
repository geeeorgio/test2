import React from 'react';
import { StyleSheet, View } from 'react-native';

import LogoImg from 'src/components/ui/LogoImg';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LogoImg />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
