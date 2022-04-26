import * as actions from './option_act';
import { ACT } from '../_action-constants';
import { mstore } from '../mockstore';
import {mhttp} from '../mockhttp';

import config from '../../config';
import { mockOptions as mdata } from '../mock';
import { act } from 'react-dom/test-utils';
import {clone} from '../../helpers';

const url = `${config.api}/option`;

mhttp.onGet(url).reply(200, mdata);

describe("option actions", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        mstore.clearActions();
    })

    //Retrieve
    it("should List all values", () => {
        const pass = {
            type: ACT.options.list,
            payload: mdata //this doesn't need to be as complex as the task mock
        };

        //mhttp.onGet(`${url}`).reply(200, mdata);
        mstore.dispatch(actions.actOption_L(1));

        const act = mstore.getActions()[0];

        return act.payload.then(res => {
            const test = {
                type: act.type,
                payload: res.data //stripping out the xtra request info
            }
            expect(test).toEqual(pass);
        });
    });

});