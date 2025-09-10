import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from 'src/components/ui/CustomText';
import CustomButton from 'src/components/ui/CustomButton';
import CustomIcon from 'src/components/ui/CustomIcon';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MaterialParamsList } from 'src/types/navigation';

type MaterialDetailsRoteProp = RouteProp<MaterialParamsList, 'Details'>;

const MaterialDetails = () => {
  const route = useRoute<MaterialDetailsRoteProp>();
  const { description } = route.params;

  return (
    <View style={styles.container}>
      <CustomText>{description}</CustomText>

      <View style={styles.btnContainer}>
        <CustomButton handlePress={() => console.log('first')}>
          <CustomText>Open on map</CustomText>
        </CustomButton>
        <CustomButton handlePress={() => console.log('first')}>
          <CustomIcon name="SavedScreen" width={20} height={20} />
        </CustomButton>
        <CustomButton handlePress={() => console.log('first')}>
          <CustomIcon name="share" width={20} height={20} />
        </CustomButton>
      </View>
    </View>
  );
};

export default MaterialDetails;

const styles = StyleSheet.create({
  container: { flex: 1 },
  btnContainer: { flexDirection: 'row', width: '100%' },
});
