import { connectRouter, RouterState } from 'connected-react-router';
import { History } from "history";
import { coreReducer, coreManage as coreState } from "../reducer/core";
import { combineReducers } from 'redux';

export interface IAppRootState {
    // history: History,
    router: RouterState,
    core: coreState,
}

export default (history: History) => (
    combineReducers({
        router: connectRouter(history),
        core: coreReducer
    }))


