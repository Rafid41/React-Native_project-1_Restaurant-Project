// app\AppNavigator.js
// controls all navigation fuctionalities
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import DishDetailScreen from "./screens/DishDetailScreen";
import { View, Text } from "react-native";

const AppNavigator = () => {
    return (
        <View>
            <HomeScreen />
        </View>
    );
};

export default AppNavigator;
