import React, { useContext, useEffect } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { showToast } from '@src/helpers/consts';
import { AppColors } from '@src/shared/styles/AppDefaults';
import FriendsChats from "@screens/Friends/FriendsChats"
import MainRoutes from './main.routes';
import FriendChat from '@src/screens/Friends/FriendChat';
import EditProfile from '@src/screens/Profile/EditProfile';
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.black,
    color: AppColors.white
  },
};

function AppRoutes() {
    
    return (
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="app" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="app" component={MainRoutes} />
            <Stack.Screen name="friendsChats" component={FriendsChats} />
            <Stack.Screen name="friendChat" initialParams={{ user: String }} component={FriendChat} />
            <Stack.Screen name="editProfile" component={EditProfile} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes