import {rawTasks as raw} from './tasks-raw';
import {options} from '../options/options-raw';
import config from 'config';
import {transformList} from 'store/reducers/tasks_rdc';

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
      task:{}
    },
    state: {
      options,
      tasks: transformList(raw),
      task: raw[0]
    }
  },
  response: {
    list:raw,
    retrieve:raw[0]
  }
};


