import * as actions from '../actions/actionTypes';

export default function myReducer(state = [], action) {

    switch (action.type) {
        case actions.ADD_CARD: {
            console.log(">> step2: Reducers: add card");
            return [...state, action.payload];
        }
 
        case actions.DEL_CARD: {
            console.log(">> step2: Reducers: delete card: " + state);
            let res = state.filter((c) => c.id !== action.payload);
            return res;
        }

        case actions.GET_CARDS: {
            console.log(">> step2: Reducers: get cards");
            state = action.payload;
            console.log([...state])
            return [...state];
        }

        default:{
            // console.log("in default");
            return state;
        }
    }
}