import { Reducer } from "redux";
import { ActionTypes } from "../../action/core";

export interface coreManage {
    id: string;
}

const initialState: coreManage = {
    id: '1',
}

const reducer: Reducer<coreManage> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_INIT:
            return   { ...state, id: '2' };
        default:
            return state;
    }
}

export { reducer as coreReducer }
