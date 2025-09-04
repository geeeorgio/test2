import React from 'react';
import { StyleSheet } from 'react-native';
import { MainTabs } from 'src/types/navigation';

import FactsScreen from 'src/screens/Facts/FactsScreen';
import HomeScreen from 'src/screens/Home/HomeScreen';
import InfoScreen from 'src/screens/Info/InfoScreen';
import MapScreen from 'src/screens/Map/MapScreen';
import PlaceScreen from 'src/screens/Place/PlaceScreen';
import SavedScreen from 'src/screens/Saved/SavedScreen';

const MainTabsNavigator = () => {
  return (
    <MainTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <MainTabs.Screen name="HomeScreen" component={HomeScreen} />
      <MainTabs.Screen name="FactsScreen" component={FactsScreen} />
      <MainTabs.Screen name="MapScreen" component={MapScreen} />
      <MainTabs.Screen name="PlaceScreen" component={PlaceScreen} />
      <MainTabs.Screen name="SavedScreen" component={SavedScreen} />
      <MainTabs.Screen name="InfoScreen" component={InfoScreen} />
    </MainTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarGradient: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tabBarInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default MainTabsNavigator;
