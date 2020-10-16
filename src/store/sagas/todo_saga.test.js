import {expectSaga} from 'redux-saga-test-plan';
import * as sagas from './todo_saga';
import {ACT} from '../_action-constants';
import {mockTodo as mdata} from '../mock';
import config from '../../config';

import {mhttp} from '../mockhttp';
const url = `${config.api}/todo`;

describe ("todo saga", () => {
    beforeEach(()=>{
        jest.resetAllMocks();
    })

    it("should return a list of todos", async()=> {
        //TODO: switch this to nock
        mhttp.onGet(url).reply(200,mdata.response.list);

        const pass = { 
            type:ACT.todo.list,
            payload: mdata.response.list
        }

        const init = { 
            type: ACT.todo.listSaga, 
            payload: {}
        }

        return expectSaga(sagas.sagToDo_L, init)
            .put(pass)
            .run()
    })
})

