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
import VideoList from './Screens/SignedIn/VideoList';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="VideoListScreen" component={VideoList} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsSignedIn(!!user);
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case 'Home': iconName = focused ? 'home-variant' : 'home-variant-outline'; break;
                case 'Apparel': iconName = focused ? 'format-list-bulleted-square' : 'format-list-checkbox'; break;
                case 'Notification': iconName = focused ? 'alarm-light' : 'alarm-light-outline'; break;
                case 'ProfileStack': iconName = focused ? 'account' : 'account-outline'; break;
                default: iconName = 'circle';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2FBBF0',
            tabBarInactiveTintColor: '#7A8FA6',
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Tab.Screen name="Apparel" component={Apparel} options={{ headerShown: false }} />
          <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
          <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false, title: 'Profile' }} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="signIn">
          <Stack.Screen name="signIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="signUp" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}