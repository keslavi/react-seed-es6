import {combineReducers} from 'redux';

import spinner from './spinner_rdc';
import todos from './todos_rdc';
import options from './options_rdc';


const rootReducer = combineReducers({
    spinner,
    options,
    todos,
})

export default rootReducer;
