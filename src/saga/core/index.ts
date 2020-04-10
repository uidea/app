import { call, put, takeEvery, fork } from "redux-saga/effects";
import { ActionTypes } from "../../action/core";

function* init(payload: any) {
    // const param
    // const { res } = yield call()
    yield setTimeout(()=>{
        console.log("this is test log");
    },1000)
}


export function* watchModalDialog() {
    yield takeEvery(ActionTypes.INIT, init);
}
const sagas = [fork(watchModalDialog)]
export default sagas;

