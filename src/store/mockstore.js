import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
//import rootSaga from './sagas';

/* **********************************************************/
// can't get nock going with axios, ECONNREFUSED

import axios from '../store/_helpers/axios';
import adapter from 'axios/lib/adapters/http';
import config from '../config';
axios.defaults.host= config.api;
axios.defaults.adapter = adapter;

import nock from 'nock';
export const Nock=nock;
/************************************************************* */

//const saga = createSagaMiddleware();

/**
 * @description Mocks http calls
 */


const middleware = [];

/**
 * @description store created with middleware (such as saga)
 */
export const createMockStore = configureStore(middleware);
/**
 * @description create an empty store
 */
export const mstore = createMockStore({});

//export const createMockStore = configureStore([promise,saga]);

//saga.run(rootSaga);





