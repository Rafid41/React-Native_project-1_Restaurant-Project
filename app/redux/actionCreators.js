// app\redux\actionCreators.js
import * as actionTypes from "./actionTypes";
import axios from "axios";

export const loadDishes = (dishes) => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    };
};

export const getDishes = () => (dispatch) => {
    // axios e link er last e ".json" ditei hbe
    axios
        .get(
            "https://restaurant-project-reactnative-default-rtdb.asia-southeast1.firebasedatabase.app/dishes.json"
        )
        .then((response) => {
            // store in redux
            // goes to reducer
            dispatch(loadDishes(response.data));
            console.log("data leak");
        })
        .catch((err) => console.log(err));
};

export const addToFavourites = (dish) => {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        payload: dish,
    };
};

export const removeFavourite = (dish) => {
    return {
        type: actionTypes.REMOVE_FAVOURITE,
        payload: dish,
    };
};
