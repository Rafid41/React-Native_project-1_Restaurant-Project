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
    axios
        .get("http://localhost:3000/dishes")
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
};
