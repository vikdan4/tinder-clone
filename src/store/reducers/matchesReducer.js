import { SAVE_MATCHES } from "../actions/actionTypes";

const initialState = {
    matches: [],
};

export const matchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MATCHES: {
            return {
                matches: action.payload,
            };
        }
        default:
            return state;
    }
};
