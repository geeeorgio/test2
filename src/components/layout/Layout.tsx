import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ImageBackground
      source={require('../../assets/images/BCKG2.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
