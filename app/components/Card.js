// app\components\Card.js
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Card = (props) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: props.item.image }}
                style={styles.image}
            ></Image>
            <View style={styles.details}>
                <Text style={styles.title}>{props.item.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 20,
        // shadow effect
        elevation: 5,
    },
    details: {
        padding: 25,
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        marginBottom: 7,
        fontSize: 20,
    },
});

export default Card;
