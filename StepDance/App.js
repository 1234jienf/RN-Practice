import React,{useEffect, useState} from 'react';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/SignedIn/Home';
import Apparel from './Screens/SignedIn/Apparel';
import Profile from './Screens/SignedIn/Profile';
import Notification from './Screens/SignedIn/Notification';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from './Firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [isSignedIn,setIsSignedIn] = useState(false);
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console
      if (user) {
          setIsSignedIn(true);
          console.log("User is signed in");
      } else {
          setIsSignedIn(false);
          console.log("No user signed in");
      }
  });

  // Cleanup subscription on unmount
  return () => unsubscribe();
  },[])
    if(isSignedIn == true){
      return(
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home-variant'
                    : 'home-variant-outline';
                } else if (route.name === 'Apparel') {
                  iconName = focused ? 'format-list-bulleted-square' : 'format-list-checkbox';
                }
                else if (route.name === 'Notification') {
                  iconName = focused ? 'alarm-light' : 'alarm-light-outline';
                }
                else {
                  iconName = focused ? 'account' : 'account-outline';
                }
    
                // You can return any component that you like here!
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#2FBBF0',
              tabBarInactiveTintColor: '#7A8FA6',
            })}
          >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Apparel' component={Apparel} />
            <Tab.Screen name='Notification' component={Notification} />
            <Tab.Screen name='Profile' component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      )
    }
    else
    {
      return(
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
      ) 
    }
}
