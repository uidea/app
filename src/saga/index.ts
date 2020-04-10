import { all } from "redux-saga/effects";
import sagas from "../saga/core";


export default function* rootSaga() {
    yield all([
        ...sagas,
    ])
}