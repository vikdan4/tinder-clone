import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MatchesScreen from "../Screens/MatchesScreen/MatchesScreen";
import AccountScreen from "../Screens/AccountScreen/AccountScreen";
import ProfilesScreen from "../Screens/ProfilesScreens/ProfilesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tab.Screen
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name="ios-flame"
                        size={30}
                        color={focused ? "#f6c" : "gray"}
                    />
                ),
            }}
            name="Profiles"
            component={ProfilesScreen}
        />
        <Tab.Screen
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name="heart"
                        size={30}
                        color={focused ? "#f6c" : "gray"}
                    />
                ),
            }}
            name="Matches"
            component={MatchesScreen}
        />
        <Tab.Screen
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name="person"
                        size={30}
                        color={focused ? "#f6c" : "gray"}
                    />
                ),
            }}
            name="Account"
            component={AccountScreen}
        />
    </Tab.Navigator>
);

export default TabNavigator;
