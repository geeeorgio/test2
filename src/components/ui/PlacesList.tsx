import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from 'src/constants/colors';

import DATA from '../../services/data.json';

import PlaceListItem from './PlaceListItem';

const PlacesList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <PlaceListItem item={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>

      <LinearGradient
        colors={COLORS.blurGradient}
        style={styles.gradient}
        pointerEvents="none"
      />
    </View>
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
});
