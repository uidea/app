import { action } from 'typesafe-actions';



export enum ActionTypes {
    INIT = 'INIT',
    SET_INIT = 'SET_INIT',
}












export const init = (payload: any) => action(ActionTypes.INIT, payload);
export const setInit = (payload: any) => action(ActionTypes.SET_INIT, payload);


