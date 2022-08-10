import {combineReducers} from 'redux';

import spinner from './spinner_rdc';
import tasks from './tasks_rdc';
import task from './task_rdc';
import options from './options_rdc';
import subtasks from './subtask_rdc';


const rootReducer = combineReducers({
    spinner,
    options,
    tasks, //array of task items, flattened to [{'1',{id:1, ...},{'2',{id:2, ...}]
    task,
    subtasks,
})

export default rootReducer;
