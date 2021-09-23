import { CLEAR_TOKEN, SAVE_TOKEN } from "../actions/actionTypes";

const initialState = {
    token: undefined,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TOKEN: {
            return {
                token: action.payload,
            };
        }
        case CLEAR_TOKEN: {
            return {
                token: undefined,
            };
        }
        default:
            return state;
    }
};
