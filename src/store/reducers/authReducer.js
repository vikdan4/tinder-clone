import { SET_LOGGED_IN } from "../actions/actionTypes";

const initialState = {
    isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_IN: {
            return {
                isLoggedIn: action.payload,
            };
        }
        default:
            return state;
    }
};
