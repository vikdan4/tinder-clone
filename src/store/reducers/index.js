import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { matchesReducer } from "./matchesReducer";
import { pagingReducer } from "./pagingReducer";
import { profilesReducer } from "./profilesReducers";

export const rootReducer = combineReducers({
    auth: authReducer,
    paging: pagingReducer,
    profiles: profilesReducer,
    matches: matchesReducer,
});
