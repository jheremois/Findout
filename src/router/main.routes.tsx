import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainMap from '@screens/MainMap';
import ProfileDetaills from '@screens/Profile/ProfileDetaills';
import { AppColors } from '@src/shared/styles/AppDefaults';
const Tab = createMaterialTopTabNavigator();

function MainRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarPressColor: AppColors.black,
                tabBarActiveTintColor: AppColors.blue,
                tabBarInactiveTintColor: AppColors.whiteLow,
                tabBarStyle: {backgroundColor: AppColors.gray},
                tabBarIndicatorStyle: {backgroundColor: AppColors.blue, height: 2.3},
            }}
        >
            <Tab.Screen 
                name="Explore" component={MainMap}
                
            />
            <Tab.Screen 
                name="Profile" component={ProfileDetaills}
            />
        </Tab.Navigator>
    )
}

export default MainRoutes