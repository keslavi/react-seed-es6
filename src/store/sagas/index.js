import {takeLatest, all} from 'redux-saga/effects';
import {sagToDo_L} from './todo_saga';
import {ACT} from '../_action-constants';


function* actionWatcher(){
    yield takeLatest(ACT.todo.listSaga, sagToDo_L);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}

