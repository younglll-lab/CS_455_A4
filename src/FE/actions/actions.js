// step 2
import * as actions from "./actionTypes";
import axios from "axios";

export const addCard = (newCard) => {
    console.log(">> in addCard: " + JSON.stringify(newCard));

    return function (dispatch) {
        axios
        .post('http://127.0.0.1:9000/posts', newCard)
        .then( (response) => {
            dispatch(addCardAsync(response.data))
        })
        .catch((reject) => {
            console.log(">> something wrong in addCard", reject);
        });
    };
}

const addCardAsync = (ele) => {
    return {
        type: actions.ADD_CARD,
        payload: ele,
    };
}

export const deleteCard = (idd) => {
    console.log(">> in deleteCard: " + idd);

    return function (dispatch) {
        axios
        .delete("http://127.0.0.1:9000/deletes", { data: { id: idd } })
        .then( (response) => {
            dispatch(deleteCardAsync(response.data))
        })
        .catch((reject) => {
            console.log(">> something wrong in deleteCard", reject);
        });
    }
}

const deleteCardAsync = (resId) => {
    return {
        type: actions.DEL_CARD,
        payload: resId,
    };
}

export const getCards = () => {
    console.log(">> in getCards");

    return function (dispatch) {
        axios
        .get("http://127.0.0.1:9000/gets")
        .then( (response) => {
            dispatch(getCardAsync(response.data))
        })
        .catch((reject) => {
            console.log(">> something wrong in getCard", reject);
        });
    }
}

const getCardAsync = (res) => {
    console.log("get Card async" + res);
    return {
        type: actions.GET_CARDS,
        payload: res,
    };
}