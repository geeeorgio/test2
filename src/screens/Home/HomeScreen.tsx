import React from 'react';
import { View } from 'react-native';

import CustomText from 'src/components/ui/CustomText';
import GradientContainer from 'src/components/ui/GradientContainer';
import GuidePannel from 'src/components/ui/GuidePannel';

import { styles } from './styles';

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
