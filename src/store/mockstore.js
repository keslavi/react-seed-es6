import configureStore from 'redux-mock-store';
import { compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import mockAdapter from 'axios-mock-adapter';
import axios from '../store/_helpers/axios';
import promise from 'redux-promise';
import Nock from 'nock';

axios.defaults.adapter = require ('axios/lib/adapters/http');

const saga = createSagaMiddleware();

/**
 * @description Mocks http calls
 */
//export const mhttp = new mockAdapter(axios);

export const nock=Nock;

const middleware = [saga];

/**
 * @description store created with middleware (such as saga)
 */
export const createMockStore = configureStore(middleware);
/**
 * @description create an empty store
 */
export const mstore = createMockStore({});

//export const createMockStore = configureStore([promise,saga]);

saga.run(rootSaga);





