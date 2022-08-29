import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { colors } from './config/constants';
import Chats from './screens/Chats';
import Settings from './screens/Settings';

const chatsStack = createStackNavigator();

 const ChatsScreen = () => {
  return (
    <chatsStack.Navigator headerMode="none">
      <chatsStack.Screen name='chats' component={Chats}/>
    </chatsStack.Navigator>
  )
}

const settingStack= createStackNavigator();

const SettingsScreen = () => {
  return (
    <settingStack.Navigator headerMode="none">
      <settingStack.Screen name="settings" component={Settings}/>
    </settingStack.Navigator>
  )
}


const tabs = createBottomTabNavigator();

const TabsScreen=()=> {
  return (  
    <tabs.Navigator headerPosition="center"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Chats') {
          iconName = focused
            ? 'chatbubbles'
            : 'chatbubbles-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.secondary,
    })}
    >
      <tabs.Screen name="Chats" component={ChatsScreen}/>
      <tabs.Screen name="Settings" component={SettingsScreen}/>
    </tabs.Navigator>
  );
}

const mainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <mainStack.Navigator headerMode="none">
        <mainStack.Screen name="Tabs" component={TabsScreen}/>
      </mainStack.Navigator>
    </NavigationContainer>
  )
};
export default App;

