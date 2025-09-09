import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from 'src/constants/colors';
import { Place } from 'src/types/api';
import { RootStackNavigationProp } from 'src/types/navigation';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';
import CustomText from './CustomText';
import GradientContainer from './GradientContainer';

interface PlaceListItemProps {
  item: Place;
}

const PlaceListItem = ({ item }: PlaceListItemProps) => {
  const navigation = useNavigation<RootStackNavigationProp>();

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
            <View style={styles.ranking}>
              {Array.from({ length: 5 }).map((_, index) => (
                <CustomIcon
                  key={index}
                  name="star"
                  width={17}
                  height={17}
                  fill={item.rating > index ? COLORS.accent : COLORS.gray}
                />
              ))}
            </View>
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
