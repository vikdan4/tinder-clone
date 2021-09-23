import {
    GET_PROFILES,
    SET_REACTION,
    SAVE_PROFILES,
    UPDATE_PAGENUMBER,
    GET_MATCHES,
    SAVE_MATCHES,
    SLICE_PROFILES,
    GET_TOKEN,
    SAVE_TOKEN,
    CLEAR_TOKEN,
} from "./actionTypes";

const getToken = (authData) => {
    return {
        type: GET_TOKEN,
        payload: authData,
    };
};
const saveToken = (token) => {
    return {
        type: SAVE_TOKEN,
        payload: token,
    };
};
const clearToken = () => {
    return {
        type: CLEAR_TOKEN,
    };
};
export const authActions = {
    getToken,
    saveToken,
    clearToken,
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
