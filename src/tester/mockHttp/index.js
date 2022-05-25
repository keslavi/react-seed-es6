import nockImport from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import config from "config";

axios.defaults.host=config.httpHost;
axios.defaults.adapter = httpAdapter;

export const mhttp=nockImport;

/**
 * @description generically mock all http calls to prevent errors
 */
// export const httpOverride= (nockhttp)=> {
//   nockhttp('http://localhost')
//   .filteringPath(function(path){return "/"})
//   .get('/').reply(200, {})
//   .post('/').reply(200, {});
// }







