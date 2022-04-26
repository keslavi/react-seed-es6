import {rawTasks as raw} from './tasks-raw';
import {options} from '../options/options-raw';
import config from 'config';

//in case we need to mock the action call
//'data' is added by axios so we need it to simulate the http call
export const mockActionResponse = config.mockApiData ? clone({data:raw}) : null;
export default mockActionResponse;

//clone in case testing changes a value
export const mockTasks = {
  store: {
    init: {
      options: {},
      tasks:{},
    },
    data: {
      options,
      tasks: raw,
    }
  },
  response:raw, //http response
};


