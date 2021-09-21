import { UPDATE_PAGENUMBER } from "../actions/actionTypes";

const initialState = {
    pageNumber: 0,
};

export const pagingReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PAGENUMBER: {
            return {
                pageNumber: action.payload,
            };
        }
        default:
            return state;
    }
};
