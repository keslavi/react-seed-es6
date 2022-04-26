import ACT from '../_action-constants';
import { mockTask as mdata } from '../mock';

import rdc from './task_rdc';

//clone just abstracts JSON.parse(JSON.stringify()foo), which creates a deep clone
//needed because passing variables directly was modifying the test data due to byref
import { clone } from '../../helpers';



/* run a single test or single test file: 
   https://stackoverflow.com/questions/42827054/how-do-i-run-a-single-test-using-jest

   type w, in pattern type filename

*/

describe('task reducer', () => {

    //Empty
    it('should return an initial empty state', () => {
        const pass = {};
        const test = rdc({}, { type: 'non related', payload: {} });

        expect(test).toEqual(pass);
    });


    //change this if the reducer is modified
    //Create
    //Retrieve
    //Update
    it('should return Upserted Item', () => {
        const pass = clone(mdata.store.post.task);

        const test = rdc({}, {
            type: ACT.task.create,
            payload: {data: pass}
        });

        expect(test).toEqual(pass);
    });

    it('should delete or clear an item', () => {
        const pass= {};

        const payload = clone(mdata.store.post.task);
        payload.id = 5;  //id doesn't matter because the action does all that.

        const test = rdc(clone(mdata.store.post.task),{
            type: ACT.task.clearSelected,
            payload
        })

        expect (test).toEqual(pass);
    });

});
