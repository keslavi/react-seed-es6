import mockAdapter from 'axios-mock-adapter';
import axios from './_helpers/axios';


/**
 * @description Mocks http calls... deprecate this for nock
 */
export const mhttp = new mockAdapter(axios);



