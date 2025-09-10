import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from 'src/constants/colors';
import MaterialTabs from 'src/navigation/MaterialTabs';
import DATA from '../../services/data.json';
import CustomText from './CustomText';
import GradientContainer from './GradientContainer';
import PlacesRank from './PlacesRank';

interface PlaceDetailsProps {
  id: string;
}

const PlaceDetails = ({ id }: PlaceDetailsProps) => {
  const item = DATA.find((item) => item.id === id);
  if (!item) {
    return <CustomText>Oups nothing to render</CustomText>;
  }

  return (
    <GradientContainer>
      <View style={styles.container}>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            resizeMode="cover"
            source={require('../../assets/images/places/ChampagneTaittinger.png')}
          />
        </View>
        <View style={styles.description}>
          <CustomText extraStyle={styles.text}>{item?.name}</CustomText>
          <PlacesRank item={item} />
        </View>
        <CustomText extraStyle={styles.cordsText}>
          {`${item.coordinates.latitude}, ${item.coordinates.longitude}`}
        </CustomText>
        <View style={styles.tabsContainer}>
          <MaterialTabs
            description={item.description}
            funFact={item.funFact}
            interestingFact={item.interestingFact}
          />
        </View>
      </View>
    </GradientContainer>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  container: { padding: 16 },
  imgWrapper: { width: '100%', height: 196 },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  description: {
    flexDirection: 'row',
    paddingTop: 17,
    justifyContent: 'space-between',
  },
  text: { fontWeight: 500, fontSize: 16 },
  ranking: { flexDirection: 'row', gap: 5 },
  cordsText: {
    color: COLORS.coordinatesTransparent,
    fontWeight: 700,
    fontSize: 12,
    marginVertical: 25,
  },
  tabsContainer: {
    flex: 1,
  },
  tabsNav: {},
});
