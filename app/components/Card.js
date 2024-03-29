// app\components\Card.js
import React from "react";
import { View, StyleSheet, Image, Text, Pressable, Alert } from "react-native";
import { connect } from "react-redux";
import { removeFavourite } from "../redux/actionCreators";

// ================ mapDishpatchToProps =====================//
const mapDishpatchToProps = (dispatch) => {
    return {
        removeFavourite: (dish) => dispatch(removeFavourite(dish)),
    };
};

const Card = (props) => {
    const removeFav = () => {
        // react Native Alert, have extra functionality , better for asking questions
        Alert.alert(
            "Delete Favourite?",
            "Are you sure you want to delete the favorite dish " +
                props.item.name +
                "?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancelled!"),
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => props.removeFavourite(props.item),
                },
            ],
            { cancelable: false }
        );
    };
    return (
        <Pressable onLongPress={() => removeFav()}>
            <View style={styles.card}>
                <Image
                    source={{ uri: props.item.image }}
                    style={styles.image}
                ></Image>
                <View style={styles.details}>
                    <Text style={styles.title}>{props.item.name}</Text>
                </View>
            </View>
        </Pressable>
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

export default connect(null, mapDishpatchToProps)(Card);
