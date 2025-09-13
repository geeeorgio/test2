import React from 'react';

import CustomTabBar from 'src/components/ui/CustomTabBar';
import FactsScreen from 'src/screens/Facts/FactsScreen';
import HomeScreen from 'src/screens/Home/HomeScreen';
import InfoScreen from 'src/screens/Info/InfoScreen';
import SavedScreen from 'src/screens/Saved/SavedScreen';
import { MainTabs } from 'src/types/navigation';

import PlacesNavigator from './PlacesNavigator';

const MainTabsNavigator = () => {
  return (
    <MainTabs.Navigator
      screenOptions={{
        sceneStyle: { backgroundColor: 'transparent' },
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <MainTabs.Screen name="HomeScreen" component={HomeScreen} />
      <MainTabs.Screen name="PlaceScreen" component={PlacesNavigator} />
      <MainTabs.Screen name="FactsScreen" component={FactsScreen} />
      <MainTabs.Screen name="SavedScreen" component={SavedScreen} />
      <MainTabs.Screen name="InfoScreen" component={InfoScreen} />
    </MainTabs.Navigator>
  );
};

export default MainTabsNavigator;
