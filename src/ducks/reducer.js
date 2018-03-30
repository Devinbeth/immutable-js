import { fromJS } from 'immutable';

// STATE
const initialState = fromJS({
    pizza: [
        {
            crustType: [],
            cheesType: [],
            meats: {},
            veggies: [],
        }
    ],
    sides: [
        {

        }
    ],
    price: 0,
});

// CONSTANTS
const CHANGE_STATE = 'CHANGE_STATE';

// ACTION BUILDERS


// REDUCER
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 1:
            return null;
        default:
            return null;
    }
}