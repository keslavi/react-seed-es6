import {expectSaga} from 'redux-saga-test-plan';
import * as sagas from './task_saga';
import {ACT} from '../_action-constants';
import {mockTask as mdata} from '../mock';
import config from '../../config';

import {mhttp} from '../mockhttp';
const url = `${config.api}/task`;

describe ("task saga", () => {
    beforeEach(()=>{
        jest.resetAllMocks();
    })

    it("should return a list of tasks", async()=> {
        //TODO: switch this to nock
        mhttp.onGet(url).reply(200,mdata.response.list);

        const pass = { 
            type:ACT.task.list,
            payload: mdata.response.list
        }

        const init = { 
            type: ACT.task.listSaga, 
            payload: {}
        }

        return expectSaga(sagas.sagToDo_L, init)
            .put(pass)
            .run()
    })
})

