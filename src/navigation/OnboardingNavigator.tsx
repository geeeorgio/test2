import OnboardingScreen from 'src/screens/Onboarding/OnboardingScreen';
import { OnboardingStack } from 'src/types/navigation';

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <OnboardingStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
