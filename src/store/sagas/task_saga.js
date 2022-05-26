import { put } from 'redux-saga/effects';

import axios from '../_helpers/axios';
import { ACT } from '../_action-constants';
import { config } from '../../config';

const url = `${config.api}/task`;

//retrieve all records (??task: add criteria)
export function* sagToDo_L(values = {}) {
    const ret = yield axios.get(url).then(res => {
        return res.data;
    });

    yield put({ type: ACT.task.list, payload: ret });
}

