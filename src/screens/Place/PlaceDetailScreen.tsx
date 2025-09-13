import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import PlaceDetails from 'src/components/ui/PlaceDetails';
import type { PlacesStackParamsList } from 'src/types/navigation';

type PlaceDetailRouteProp = RouteProp<
  PlacesStackParamsList,
  'PlaceDetailScreen'
>;

const PlaceDetailScreen = () => {
  const route = useRoute<PlaceDetailRouteProp>();
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <PlaceDetails id={id} />
    </SafeAreaView>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
