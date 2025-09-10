import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from 'src/constants/colors';
import { Place } from 'src/types/api';
import CustomIcon from './CustomIcon';

interface PlacesRankProps {
  item: Place;
}

const PlacesRank = ({ item }: PlacesRankProps) => {
  return (
    <View style={styles.ranking}>
      {Array.from({ length: 5 }).map((_, index) => (
        <CustomIcon
          key={index}
          name="star"
          width={17}
          height={17}
          fill={item?.rating > index ? COLORS.accent : COLORS.white}
        />
      ))}
    </View>
  );
};

export default PlacesRank;

const styles = StyleSheet.create({
  ranking: {
    flexDirection: 'row',
    gap: 5,
  },
});
