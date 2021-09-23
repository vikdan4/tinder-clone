import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { apiService } from "../../data/service";
import {
    authActions,
    matchesActions,
    pagingActions,
    profilesActions,
} from "../actions/actionCreators";
import {
    GET_MATCHES,
    GET_PROFILES,
    GET_TOKEN,
    SET_REACTION,
} from "../actions/actionTypes";
import { profilesSelectors } from "../selectors/profilesSelector";

function* getProfileSaga() {
    let pageNumber = yield select(profilesSelectors.pageNumber);
    const users = yield call(apiService.getProfiles, pageNumber);
    yield put(pagingActions.updatePageNumber(++pageNumber));
    yield put(profilesActions.saveProfiles(users));
}

export function* watchGetProfiles() {
    yield takeEvery(GET_PROFILES, getProfileSaga);
}

function* setReactionSaga(action) {
    const users = yield select(profilesSelectors.profiles);
    if (users.length < 5) yield getProfileSaga();
    yield call(apiService.addReaction, {
        firstId: 77,
        secondId: users[0].id,
        liked: action.payload,
    });
    yield put(profilesActions.sliceProfiles());
}

export function* watchSetReaction() {
    yield takeEvery(SET_REACTION, setReactionSaga);
}

function* getMatchesSaga(action) {
    const matches = yield call(apiService.findMatches, action.payload);
    yield put(matchesActions.saveMatches(matches));
}

export function* watchGetMatchesSaga() {
    yield takeEvery(GET_MATCHES, getMatchesSaga);
}

function* getTokenSaga(action) {
    console.log(action.payload);
    const token = yield call(apiService.getToken, action.payload);
    console.log(token);
    yield put(authActions.saveToken(token));
}

export function* watchGetTokenSaga() {
    yield takeEvery(GET_TOKEN, getTokenSaga);
}
