import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import mockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import promise from 'redux-promise';

const saga = createSagaMiddleware();

/**
 * @description Mocks http calls
 */
export const mhttp = new mockAdapter(axios);

const middleware = [ saga];

/**
 * @description store created with middleware (such as saga)
 */
export const createMockStore = configureStore(middleware);
/**
 * @description create an empty store
 */
export const mstore = createMockStore({});

export const mstorePromise = configureStore(promise,saga);

saga.run(rootSaga);





