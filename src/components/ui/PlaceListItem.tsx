import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { COLORS } from 'src/constants/colors';
import type { Place } from 'src/types/api';
import type { PlacesStackNavigationProp } from 'src/types/navigation';

import CustomButton from './CustomButton';
import CustomText from './CustomText';
import GradientContainer from './GradientContainer';
import PlacesRank from './PlacesRank';

interface PlaceListItemProps {
  item: Place;
}

const PlaceListItem = ({ item }: PlaceListItemProps) => {
  const navigation = useNavigation<PlacesStackNavigationProp>();

  const handleOpen = (id: string) => {
    navigation.navigate('PlaceDetailScreen', { id });
  };

  return (
    <GradientContainer extraStyle={styles.wrapper}>
      <View style={styles.main}>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            source={require('../../assets/images/places/ChampagneTaittinger.png')}
            resizeMode="cover"
          />
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.palceInfo}>
            <CustomText extraStyle={styles.title}>{item.name}</CustomText>
            <PlacesRank item={item} />
          </View>
          <CustomButton
            extraStyle={styles.btn}
            handlePress={() => handleOpen(item.id)}
          >
            <CustomText extraStyle={styles.btnText}>Open</CustomText>
          </CustomButton>
        </View>
      </View>
    </GradientContainer>
  );
};

export default PlaceListItem;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
  },
  main: {
    padding: 16,
    alignItems: 'flex-start',
    gap: 17,
  },
  imgWrapper: {
    width: '100%',
    height: 107,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  descriptionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  palceInfo: {
    flex: 1,
    flexShrink: 1,
    gap: 10,
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
  },
  ranking: {
    flexDirection: 'row',
    gap: 5,
  },
  btn: {
    paddingHorizontal: 27,
  },
  btnText: {
    color: COLORS.primaryDark,
    fontWeight: 600,
    fontSize: 15,
  },
});
