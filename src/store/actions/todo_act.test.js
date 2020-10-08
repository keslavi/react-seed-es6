import * as actions from './todo_act';
import { ACT } from '../_action-constants';
import { mhttp, mstore } from '../mockstore';
import config from '../../config';

import { mockTodo as mdata } from '../mock';
import { act } from 'react-dom/test-utils';

const url = `${config.api}/todo`;
mhttp.onGet(url).reply(200, mdata.response.list);



describe("todo actions", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        mstore.clearActions();
    })

    //Create

    //Retrieve
    it("should retrieve a single record", () => {
        const pass = {
            type: ACT.todo.retrieve,
            payload: mdata.response.retrieve
        };

        mhttp.onGet(`${url}/1`).reply(200, mdata.response.retrieve);
        mstore.dispatch(actions.actTodo_R(1));

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
            type: ACT.todo.update,
            payload: mdata.response.update
        };

        const values = mdata.response.update;

        mhttp.onPut(`${url}`).reply(200, mdata.response.update);
        mstore.dispatch(actions.actTodo_U(values));

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
            type: ACT.todo.delete,
            payload: mdata.response.delete
        };

        const values = mdata.request.delete;

        mhttp.onPost(`${url}`).reply(200, mdata.response.delete);
        mstore.dispatch(actions.actTodo_D(values));

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