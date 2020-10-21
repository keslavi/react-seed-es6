import ACT from '../_action-constants';
import { mockOptions as mdata } from '../mock';

import rdc from './options_rdc';
import _ from 'lodash';

//clone just abstracts JSON.parse(JSON.stringify()foo), which creates a deep clone
//needed because passing variables directly was modifying the test data due to byref
import { clone } from '../../helpers';

describe('options reducer', () => {

    //Empty
    it('should return an initial empty state', () => {
        const pass = {};
        const test = rdc({}, { type: 'non related', payload: {} });

        expect(test).toEqual(pass);
    });

    //List
    it('should return List of items', () => {
        const pass = clone(mdata);
        const test = rdc({}, { type: ACT.options.list, payload: {data:pass} });  //wrap because axios will return as {data: res.body}

        expect(test).toEqual(pass);
    });

});
