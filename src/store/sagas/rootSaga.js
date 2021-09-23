import { spawn } from "redux-saga/effects";
import {
    watchGetMatchesSaga,
    watchGetProfiles,
    watchGetTokenSaga,
    watchSetReaction,
} from "./sagas";

export default function* rootSaga() {
    yield spawn(watchGetProfiles);
    yield spawn(watchSetReaction);
    yield spawn(watchGetMatchesSaga);
    yield spawn(watchGetTokenSaga);
}
