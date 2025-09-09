import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from 'src/components/ui/CustomText';

const PlaceDetailScreen = () => {
  const route = useRoute();

  return (
    <View>
      <CustomText>{route.name}</CustomText>
    </View>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({});
