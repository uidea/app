import rootSaga from '../saga';
import rootReducer from "../reducer";
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";


//middleware setup
const middleware: any = [];
export const history = createHashHistory({
    hashType: 'noslash',
})

const sagaMiddleware = createSagaMiddleware();
middleware.push(routerMiddleware(history));
middleware.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga);