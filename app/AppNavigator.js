// app\AppNavigator.js
// controls all navigation fuctionalities
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import DishDetailScreen from "./screens/DishDetailScreen";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetailScreen} />
        </Stack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        // initialRouteName="Home" means first app open e "Home" ashbe
        <Drawer.Navigator
            initialRouteName="Home"
            // hides Navbar
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />

            {/* navigator nesting, drawer er vitor stack call */}
            <Drawer.Screen name="Menu" component={MenuStack} />
        </Drawer.Navigator>
    );
};

export default AppNavigator;
