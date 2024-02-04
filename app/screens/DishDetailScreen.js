// app\screens\DishDetailScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "../components/Icon";
import { connect } from "react-redux";
import { addToFavourites } from "../redux/actionCreators";

// ============== mapStateToProps =============================//
// fetch data
const mapStateToProps = (state) => {
    return {
        favourites: state.favourites,
    };
};

//=================== mapDispatchToProps ============================//
// dispatch/sends data to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        addToFavourites: (dish) => dispatch(addToFavourites(dish)),
    };
};

// ========================= DishDetail ==========================//
const DishDetailScreen = (props) => {
    // received from navigation.navigate() er 2nd param
    const dish = props.route.params.dish;

    // =============== already favourited? ========//
    // js some() true/false return kore
    const isFavourite = props.favourites.some((item) => item.id === dish.id);

    // ================ add to favourite ==============//
    const markFavourites = (dish) => {
        if (isFavourite) {
            alert("Already Added to favourites!");
        } else {
            props.addToFavourites(dish);
        }
    };

    let iconName = "heart-outline";
    if (isFavourite) {
        iconName = "heart-sharp";
    }

    return (
        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View style={styles.details}>
                <Icon
                    name={iconName}
                    color="#F53B50"
                    size={39}
                    iconStyle={{ padding: 10 }}
                    action={() => markFavourites(dish)}
                />
                <Text>{dish.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
    },
    details: {
        padding: 10,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(DishDetailScreen);
