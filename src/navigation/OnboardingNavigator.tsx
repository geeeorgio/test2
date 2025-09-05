import OnboardingScreen from 'src/screens/Onboarding/OnboardingScreen';
import OnboardingScreen1 from 'src/screens/Onboarding/OnboardingScreen1';
import OnboardingScreen2 from 'src/screens/Onboarding/OnboardingScreen2';
import OnboardingScreen3 from 'src/screens/Onboarding/OnboardingScreen3';
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
      <OnboardingStack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
