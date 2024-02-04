// app\components\Icon.js
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Icon = () => {
    return (
        <TouchableOpacity style={{ paddingRight: 15 }}>
            <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
    );
};

export default Icon;
