import * as actions from './task_act';


import {
    ACT, 
    mockStore,
    mockOptions as mdata,
} from 'tester';

import {mhttp} from '../mockhttp';
import config from '../../config';

import { mockTask as mdata } from '../mock';
import { act } from 'react-dom/test-utils';
import {clone} from '../../helpers';

const url = `${config.api}/task`;

mhttp.onGet(url).reply(200, mdata.response.list);



describe("task actions", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        mstore.clearActions();
    })

    //Create
    it('should Create a new record', () => {
        //kinda a BS test but best I can do
        const item= clone(mdata.store.post.task);
        item.id=0;
        item.subject='created';

        const payload=clone(item);
        payload.id=4;

        const pass = {
            type: ACT.task.create, 
            payload
        }

        mhttp.onPost(`${url}`).reply(200, pass.payload);
        mstore.dispatch(actions.actTask_C(item));

        const act = mstore.getActions()[0];

        return act.payload.then(res => {
            const test = {
                type: act.type,
                payload: res.data //stripping out the xtra request info
            }
            expect(test).toEqual(pass);
        });
    });

    //Retrieve
    it("should retrieve a single record", () => {
        const pass = {
            type: ACT.task.retrieve,
            payload: mdata.response.retrieve
        };

        mhttp.onGet(`${url}/1`).reply(200, mdata.response.retrieve);
        mstore.dispatch(actions.actTask_R(1));

        const act = mstore.getActions()[0];

        return act.payload.then(res => {
            const test = {
                type: act.type,
                payload: res.data //stripping out the xtra request info
            }
            expect(test).toEqual(pass);
        });
    });

    // Update
    it("should update a record", () => {
        const pass = {
            type: ACT.task.update,
            payload: mdata.response.update
        };

        const values = mdata.response.update;

        mhttp.onPut(`${url}`).reply(200, mdata.response.update);
        mhttp.onPost(`${url}`).reply(200, mdata.response.update);
        mstore.dispatch(actions.actTask_U(values));

        const act = mstore.getActions()[0];

        return act.payload.then(res => {
            const test = {
                type: act.type,
                payload: res.data //stripping out the xtra request info
            }
            expect(test).toEqual(pass);
        });
    });

    // Delete
    it("should delete a record", () => {
        const pass = {
            type: ACT.task.delete,
            payload: mdata.response.delete
        };

        const values = mdata.request.delete;

        mhttp.onPost(`${url}`).reply(200, mdata.response.delete);
        mstore.dispatch(actions.actTask_D(values));

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