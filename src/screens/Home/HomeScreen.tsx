import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from 'src/components/ui/CustomText';

import GradientContainer from 'src/components/ui/GradientContainer';
import GuidePannel from 'src/components/ui/GuidePannel';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <GuidePannel />

      <GradientContainer extraStyle={styles.mapWrapper}>
        <View>
          <CustomText extraStyle={{ color: 'white' }}>Map</CustomText>
        </View>
      </GradientContainer>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, gap: 24 },
  mapWrapper: { flex: 0.4 },
});
