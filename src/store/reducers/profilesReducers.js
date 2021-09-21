import { SAVE_PROFILES, SLICE_PROFILES } from "../actions/actionTypes";

const initialState = {
    profiles: [],
};

export const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PROFILES: {
            return {
                profiles: state.profiles.concat(action.payload),
            };
        }
        case SLICE_PROFILES: {
            return {
                profiles: state.profiles.slice(1),
            };
        }
        default:
            return state;
    }
};
