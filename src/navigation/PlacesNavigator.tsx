import CustomIcon from 'src/components/ui/CustomIcon';
import { COLORS } from 'src/constants/colors';
import PlaceDetailScreen from 'src/screens/Place/PlaceDetailScreen';
import PlaceScreen from 'src/screens/Place/PlaceScreen';
import { PlacesStack } from 'src/types/navigation';

const PlacesNavigator = () => {
  return (
    <PlacesStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <PlacesStack.Screen
        name="MainPlaceScreen"
        component={PlaceScreen}
        options={{ headerShown: false }}
      />
      <PlacesStack.Screen
        name="PlaceDetailScreen"
        component={PlaceDetailScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerStatusBarHeight: 0,
          headerBackButtonDisplayMode: 'generic',
          headerBackTitleStyle: {
            color: COLORS.white,
            fontWeight: 600,
            fontSize: 20,
            paddingLeft: 12,
          },
          headerBackTruncatedTitle: 'Recomended place',
          headerBackImage: () => (
            <CustomIcon name="back" width={36} height={36} />
          ),
        }}
      />
    </PlacesStack.Navigator>
  );
};

export default PlacesNavigator;
