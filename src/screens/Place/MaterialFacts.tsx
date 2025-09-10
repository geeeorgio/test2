import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MaterialParamsList } from 'src/types/navigation';

type MaterialFactsRoteProps = RouteProp<MaterialParamsList, 'Fact'>;

const MaterialFacts = () => {
  const route = useRoute<MaterialFactsRoteProps>();

  const {funFact, interestingFact} = route.params

  return (
    <View>
      <Text>{funFact || interestingFact}</Text>
    </View>
  );
};

export default MaterialFacts;

const styles = StyleSheet.create({});
