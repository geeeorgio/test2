import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from 'src/constants/colors';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bonjour!</Text>
      <Text style={styles.welcome}>
        My name is Annette, and I will be your guide on a journey through the
        wine regions of France. We will visit the most famous wineries,
        picturesque villages and castles, where every drop of wine has its own
        story.
      </Text>
      <Image source={require('../../assets/images/ASSISTANT2.png')} />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontWeight: 700,
    fontSize: 24,
    textTransform: 'uppercase',
    color: COLORS.white,
  },
  welcome: {
    fontWeight: 400,
    fontSize: 16,
    color: COLORS.white,
  },
});
