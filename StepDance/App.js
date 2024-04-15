import React from 'react';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signIn">
        <Stack.Screen 
            name="signIn" 
            component={SignIn} 
            options={{ headerShown: false }} // Set headerShown inside options object
          />
          <Stack.Screen 
            name="signUp" 
            component={SignUp} 
            options={{ headerShown: false }} // Set headerShown inside options object if needed
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
