// app\screens\MenuScreen.js
import React, { useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { connect } from "react-redux";
import { getDishes } from "../redux/actionCreators";
import MenuItem from "../components/MenuItem";

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
    }, []);
    // console.log(props);

    // ================== return ====================//
    return (
        <View>
            <FlatList
                data={props.dishes}
                renderItem={({ item }) => (
                    <MenuItem
                        item={item}
                        selectDish={() =>
                            // navigate er second praram e j kono data pass kora jabe next page e
                            props.navigation.navigate("Dish Detail", {
                                dish: item,
                            })
                        }
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
