import {combineReducers} from 'redux';

import spinner from './spinner_rdc';
import todos from './todos_rdc';
import todo from './todo_rdc';
import options from './options_rdc';


const rootReducer = combineReducers({
    spinner,
    options,
    todos, //array of todo items, flattened to [{'1',{id:1, ...},{'2',{id:2, ...}]
    todo, 
})

export default rootReducer;
