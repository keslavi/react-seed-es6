import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

// import { createLogger } from 'redux-logger';
// const logger = createLogger();

const saga = createSagaMiddleware();

export const store =
    createStore(
        rootReducer,
        compose(
            //i don't like having logger running all the time
            //keep the console clean as possible to assist in debugging
            applyMiddleware(promise, saga) //, logger)
        )
    );

saga.run(rootSaga);

export default store;


