// app\screens\MenuScreen.js
import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { getDishes } from "../redux/actionCreators";

// =========== mapStateToProps =========//
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
    };
};

// ============ mapDispatchToProps =========//
const mapDispatchToProps = (dispatch) => {
    return {
        getDishes: () => dispatch(getDishes()),
    };
};

// ====================== MenuScreen ==================//
const MenuScreen = (props) => {
    // ================ useEffect ==================//
    useEffect(() => {
        props.getDishes();
    });
    // console.log(props);

    // ================== return ====================//
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button
                title="Press"
                onPress={() => props.navigation.navigate("Dish Detail")}
            />
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
