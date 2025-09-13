import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import type { MaterialParamsList } from 'src/types/navigation';

type MaterialFactsRoteProps = RouteProp<MaterialParamsList, 'Fact'>;

const MaterialFacts = () => {
  const route = useRoute<MaterialFactsRoteProps>();

  const { funFact, interestingFact } = route.params;

  return (
    <View>
      <Text>{funFact || interestingFact}</Text>
    </View>
  );
};

export default MaterialFacts;

const styles = StyleSheet.create({});
