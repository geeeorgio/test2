import Layout from 'src/components/layout/Layout';
import MapScreen from 'src/screens/Map/MapScreen';
import { RootStack } from 'src/types/navigation';
import MainTabsNavigator from './MainTabsNavigator';
import PlaceDetailScreen from 'src/screens/Place/PlaceDetailScreen';

const RootNavigator = () => {
  return (
    <Layout>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
        }}
      >
        {/* <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        /> */}
        <RootStack.Screen name="MainTabs" component={MainTabsNavigator} />
        <RootStack.Screen name="MapScreen" component={MapScreen} />
        <RootStack.Screen
          name="PlaceDetailScreen"
          component={PlaceDetailScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
          }}
        />
      </RootStack.Navigator>
    </Layout>
  );
};

export default RootNavigator;
