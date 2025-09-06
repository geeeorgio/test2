import Layout from 'src/components/layout/Layout';
import MapScreen from 'src/screens/Map/MapScreen';
import { RootStack } from 'src/types/navigation';
import MainTabsNavigator from './MainTabsNavigator';

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
      </RootStack.Navigator>
      <RootStack.Screen name="MapScreen" component={MapScreen} />
    </Layout>
  );
};

export default RootNavigator;
