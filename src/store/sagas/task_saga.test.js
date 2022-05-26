import {expectSaga} from 'redux-saga-test-plan';
import * as sagas from './task_saga';
 
  import {
    ACT,
    config,
    // clone,
    // createMockStore,
    mhttp, //import from here because it's setting extra axios defaults
  } from "tester";
  
  import {mockTasks as mdata} from 'tester';

describe ("task saga", () => {
    beforeEach(()=>{
        jest.resetAllMocks();
    })

    it("should return a list of tasks", async()=> {
        mhttp(config.api)
        .get("/task")
        .reply(200, mdata.response.list);

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

