import * as action from './option_act';
import { clone } from 'helpers/clone';
import config from 'config';

import nock from 'nock';

import {
    ACT, 
    createMockStore,
    mockOptions as mdata, //CLONE THIS... clone killed intellisense in the .js file
} from 'tester';

const url = `${config.api}/option`;

const mstore=createMockStore();
const data_L=mdata.response; //clone(mdata.response); //CLONE or tests might get affected


nock(url)
    .get()
    .reply(200,data_L);

describe("option actions", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        mstore.clearActions();
    })

    //Retrieve
    it("should List all values", () => {
        const pass = {
            type: ACT.options.list,
            payload: data_L
        };

        //mhttp.onGet(`${url}`).reply(200, mdata);
        mstore.dispatch(action.actOption_L(1));

        const act = mstore.getActions()[0];

        return act.payload.then(res => {
            const test = {
                type: act.type,
                payload: res //stripping out the xtra request info
            }
            expect(test).toEqual(pass);
        });
    });

});