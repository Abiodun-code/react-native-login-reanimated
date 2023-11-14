
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { RootStack } from './src/types/stackParam';
import SignScreen from './screens/SignScreen';


const Stack = createNativeStackNavigator<RootStack>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign" component={SignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
