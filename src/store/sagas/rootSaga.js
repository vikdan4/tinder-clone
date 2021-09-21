import { spawn } from "redux-saga/effects";
import {
    watchGetMatchesSaga,
    watchGetProfiles,
    watchSetReaction,
} from "./sagas";

export default function* rootSaga() {
    yield spawn(watchGetProfiles);
    yield spawn(watchSetReaction);
    yield spawn(watchGetMatchesSaga);
}
