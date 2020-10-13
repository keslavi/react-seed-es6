import {takeLatest, all} from 'redux-saga/effects';
import {sagToDo_L} from './todo_saga';
//import {ACT} from '../_action-constants';

const sagL = sagToDo_L;

function* actionWatcher(){
    yield takeLatest("@@todo.list", sagL);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}

