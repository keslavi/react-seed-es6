import {
  ACT,
  clone,
} from "tester";

import {mockTasks as mdata} from 'tester';

import rdc from "./tasks_rdc";
import _ from "lodash";



/* run a single test or single test file: 
   https://stackoverflow.com/questions/42827054/how-do-i-run-a-single-test-using-jest

   type w, in pattern type filename

*/

describe("tasks reducer", () => {
  //Empty
  it("should return an initial empty state", () => {
    const pass = {};
    const test = rdc({}, { type: "non related", payload: {} });

    expect(test).toEqual(pass);
  });

  //Create
  it("should Create an item", () => {
    const item = clone(mdata.store.state.task);
    item.id = 5;
    item.body = "created";

    const pass = clone(mdata.store.state.tasks);
    pass["5"] = item;
    pass["5"].id = 5;

    // redux promise returns Axios full request... add 'data' property
    const test = rdc(clone(mdata.store.state.tasks), {
      type: ACT.task.create,
      payload: { data: pass["5"] },
    });

    expect(test).toEqual(pass);
  });

  //Retrieve
  it("should Retrieve an Item and modify the List ", () => {
    // note that retrieve affects both the tasks AND the task,
    // it updates the list with the retrieved item
    const state = clone(mdata.store.state.tasks);

    const item = clone(state["2"]);
    item.subject = "retrieved";

    const pass = clone(state);
    pass["2"] = item;

    // console.log('*********************');
    // console.log('** Retrieve state:', JSON.stringify(state, null, 2));
    // console.log('*********************');

    const test = rdc(state, {
      type: ACT.task.retrieve,
      payload: { data: item },
    });

    // console.log('*********************');
    // console.log('** Retrieve List:', JSON.stringify(test, null, 2));
    // console.log('*********************');

    expect(test).toEqual(pass);
  });

  //Update
  it("should Update the values of an existing item", () => {
    // note that update affects both the tasks AND the task,
    // it updates the list with the retrieved item
    const state = clone(mdata.store.state.tasks);

    const item = clone(state["3"]);
    item.subject = "updated";

    const pass = clone(state);
    pass["3"] = item;

    const test = rdc(state, { type: ACT.task.update, payload: { data: item } });

    // console.log('*********************');
    // console.log('** Update list:', JSON.stringify(test, null, 2));
    // console.log('*********************');

    expect(test).toEqual(pass);
  });

  //Retrieve
  it("should delete an Item from the List ", () => {
    // note that retrieve affects both the tasks AND the task,
    // it updates the list with the retrieved item
    const state = clone(mdata.store.state.tasks);

    const item = clone(state["2"]);
    item.subject = "deleted";

    const pass=undefined;

    // console.log('*********************');
    // console.log('** Retrieve state:', JSON.stringify(state, null, 2));
    // console.log('*********************');

    const test = rdc(state, {
      type: ACT.task.delete,
      payload: { data: item },
    });

    // console.log('*********************');
    // console.log('** Retrieve List:', JSON.stringify(test, null, 2));
    // console.log('*********************');

    expect(test["2"]).toEqual(pass);
  });


  //List
  it("should return List of items", () => {
    const pass = clone(mdata.store.state.tasks);
    const test = rdc({}, { type: ACT.task.list, payload: mdata.response.list });

    expect(test).toEqual(pass);
  });
});
