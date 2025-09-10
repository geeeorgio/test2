import { COLORS } from 'src/constants/colors';
import MaterialDetails from 'src/screens/Place/MaterialDetails';
import MaterialFacts from 'src/screens/Place/MaterialFacts';
import { MaterialTab } from 'src/types/navigation';

interface MaterialTabsProps {
  description: string;
  interestingFact?: string;
  funFact?: string;
}

const MaterialTabs = ({
  description,
  interestingFact,
  funFact,
}: MaterialTabsProps) => {
  return (
    <MaterialTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.lightGray,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.accent,
          height: 3,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <MaterialTab.Screen
        name="Details"
        options={{ title: 'Description' }}
        component={MaterialDetails}
        initialParams={{ description }}
      />
      <MaterialTab.Screen
        name="Fact"
        options={{ title: 'Facts' }}
        component={MaterialFacts}
        initialParams={{ funFact, interestingFact }}
      />
    </MaterialTab.Navigator>
  );
};

export default MaterialTabs;
