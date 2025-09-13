import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './navigation/RootNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
