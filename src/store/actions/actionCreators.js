import {
    SET_LOGGED_IN,
    GET_PROFILES,
    SET_REACTION,
    SAVE_PROFILES,
    UPDATE_PAGENUMBER,
    GET_MATCHES,
    SAVE_MATCHES,
    SLICE_PROFILES,
} from "./actionTypes";

const setLoggedStatus = (status) => {
    return {
        type: SET_LOGGED_IN,
        payload: status,
    };
};
export const authActions = {
    setLoggedStatus,
};

const getProfiles = () => {
    return {
        type: GET_PROFILES,
    };
};
const saveProfiles = (profiles) => {
    return {
        type: SAVE_PROFILES,
        payload: profiles,
    };
};
const setReaction = (reaction) => {
    return {
        type: SET_REACTION,
        payload: reaction,
    };
};
const sliceProfiles = () => {
    return {
        type: SLICE_PROFILES,
    };
};
export const profilesActions = {
    getProfiles,
    saveProfiles,
    setReaction,
    sliceProfiles,
};

const getMatches = (id) => {
    return {
        type: GET_MATCHES,
        payload: id,
    };
};
const saveMatches = (matches) => {
    return {
        type: SAVE_MATCHES,
        payload: matches,
    };
};

export const matchesActions = {
    getMatches,
    saveMatches,
};

const updatePageNumber = (newPageNumber) => {
    return {
        type: UPDATE_PAGENUMBER,
        payload: newPageNumber,
    };
};
export const pagingActions = {
    updatePageNumber,
};
