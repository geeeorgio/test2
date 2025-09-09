import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from 'src/components/ui/CustomText';
import GuidePannel from 'src/components/ui/GuidePannel';
import PlacesList from 'src/components/ui/PlacesList';

const PlaceScreen = () => {
  return (
    <View style={styles.container}>
      <GuidePannel>
        <CustomText extraStyle={styles.guide}>
          Here are my favorite locations that you will definitely love.
        </CustomText>
      </GuidePannel>

      <CustomText extraStyle={styles.header}>Recomended place</CustomText>
      <PlacesList />
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  guide: {
    fontSize: 14,
    fontWeight: 500,
  },
  header: {
    fontWeight: 600,
    fontSize: 20,
    marginTop: 35,
    marginBottom: 20,
  },
  list: { flex: 1 },
});
