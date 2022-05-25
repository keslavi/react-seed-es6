import * as action from "./option_act";
import { clone } from "helpers/clone";
import config from "config";

import {
  ACT,
  createMockStore,
  mhttp, //import from here because it's setting extra axios defaults
  mockOptions as mdata, //CLONE THIS... clone killed intellisense in the .js file
} from "tester";

const mstore = createMockStore();
const data_L = mdata.response; //clone(mdata.response); //CLONE or tests might get affected


describe("option actions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mstore.clearActions();
  });

  //List
  it("should List all values", () => {

    const pass = {
      type: ACT.options.list,
      payload: data_L,
    };

    mhttp(config.api)
    .get("/option")
    .reply(200,data_L );    
    mstore.dispatch(action.actOption_L(1));

    const act = mstore.getActions()[0];

    return act.payload.then((res) => {
      const test = {
        type: act.type,
        payload: res.data,
      };
      expect(test).toEqual(pass);
    });
  });
});
