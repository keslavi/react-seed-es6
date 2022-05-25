import { 
  actTask_C,
  actTask_R,
  actTask_U,
  actTask_D,
  actTask_L,
} from "./task_act";

import {
  ACT,
  config,
  clone,
  createMockStore,
  mhttp, //import from here because it's setting extra axios defaults
} from "tester";

import {mockTasks as mdata} from 'tester';

const mstore = createMockStore();

describe("task actions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mstore.clearActions();
  });

  //Create
//   it("should Create a new record", () => {
//     //kinda a BS test but best I can think of
//     const item = clone(mdata.response.retrieve);
// //    console.log ('item?:', mdata.response.retrieve);
//     item.id=4;
//     item.subject = "created";

//     const pass = {
//       type: ACT.task.create,
//       item,
//     };

//     mhttp(config.api)
//     .post("/task")
//     .reply(200, item);

//     mstore.dispatch(actTask_C(item));

//     const act = mstore.getActions()[0];

//     return act.payload.then((res) => {
//       const test = {
//         type: act.type,
//         payload: res.data,
//       };
//       expect(test).toEqual(pass);
//     });
//   });

  //Retrieve
  it("should retrieve a single record", () => {
    const pass = {
      type: ACT.task.retrieve,
      payload: mdata.response.retrieve,
    };

    mhttp(config.api)
    .get("/task/1")
    .reply(200, mdata.response.retrieve);
    
    mstore.dispatch(actTask_R(1));

    const act = mstore.getActions()[0];

    return act.payload.then((res) => {
      const test = {
        type: act.type,
        payload: res.data, 
      };
      expect(test).toEqual(pass);
    });
  });

  // Update
/*
  it("should update a record", () => {
    const pass = {
      type: ACT.todo.update,
      payload: mdata.response.update,
    };

    const values = mdata.response.update;

    mhttp.onPut(`${url}`).reply(200, mdata.response.update);
    mhttp.onPost(`${url}`).reply(200, mdata.response.update);
    mstore.dispatch(actions.actTodo_U(values));

    const act = mstore.getActions()[0];

    return act.payload.then((res) => {
      const test = {
        type: act.type,
        payload: res.data, //stripping out the xtra request info
      };
      expect(test).toEqual(pass);
    });
  });
  */

  // Delete
/*  it("should delete a record", () => {
    const pass = {
      type: ACT.todo.delete,
      payload: mdata.response.delete,
    };

    const values = mdata.request.delete;

    mhttp.onPost(`${url}`).reply(200, mdata.response.delete);
    mstore.dispatch(actions.actTodo_D(values));

    const act = mstore.getActions()[0];

    return act.payload.then((res) => {
      const test = {
        type: act.type,
        payload: res.data, //stripping out the xtra request info
      };
      expect(test).toEqual(pass);
    });
  });
  */

    //List (call saga, check saga test for List)
    it("should call List Saga", () => {
      const values={}
      const pass = { 
        type: ACT.task.listSaga, 
        payload: values 
      }
  
      mstore.dispatch(actTask_L());
  
      const act = mstore.getActions()[0];

      const test=act;

      expect (test).toEqual(pass);
    });

});
