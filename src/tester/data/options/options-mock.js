import {options} from './options-raw';
import config from 'config';

//in case we need to mock the action call
//'data' is added by axios so we need it to simulate the http call
export const mockActionResponse = config.mockApiData ? clone({data:options}) : null;
export default mockActionResponse;

//clone in case testing changes a value
export const mockOptions = {
  store: {
    init: {
      options: {},
    },
    data: {
      options,
    }
  },
  response:options, //http response
};


