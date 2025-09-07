import React from 'react';
import { Alert, Share, StyleSheet, View } from 'react-native';
import CustomButton from 'src/components/ui/CustomButton';
import CustomIcon from 'src/components/ui/CustomIcon';
import CustomText from 'src/components/ui/CustomText';
import GradientContainer from 'src/components/ui/GradientContainer';
import InfoPannel from 'src/components/ui/InfoPannel';
import { COLORS } from 'src/constants/colors';

const InfoScreen = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Look what i got!',
        url: 'https://example.com',
        title: 'Share link',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with', result.activityType);
        } else {
          console.log('Shared!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Closed share window');
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <InfoPannel>
        <CustomText extraStyle={styles.text}>
          I, Annette, invite you to the world of French wine and unforgettable
          moments. Here you will find the best places, stories and secrets that
          will make your trip special.
        </CustomText>
      </InfoPannel>

      <GradientContainer extraStyle={styles.btnWrapper}>
        <View style={styles.btns}>
          <CustomButton extraStyle={styles.share} handlePress={onShare}>
            <CustomText extraStyle={styles.btnText}>Share app</CustomText>
            <CustomIcon
              name="share"
              height={25}
              width={25}
              fill={COLORS.black}
            />
          </CustomButton>

          <CustomButton
            extraStyle={styles.rate}
            handlePress={() => console.log('first')}
          >
            <CustomText extraStyle={styles.btnText}>Rate app</CustomText>
          </CustomButton>
        </View>
      </GradientContainer>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 600,
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
    gap: 9,
    paddingVertical: 34,
  },
  share: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 16,
    paddingHorizontal: 33,
  },
  rate: {
    paddingVertical: 16,
    paddingHorizontal: 33,
  },
  btnText: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: 600,
  },
});
