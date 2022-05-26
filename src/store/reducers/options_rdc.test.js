import {
    ACT,
    clone,
  } from "tester";
  
import {mockOptions as mdata} from 'tester';

import rdc from './options_rdc';
import _ from 'lodash';

describe('options reducer', () => {

    //Empty
    it('should return an initial empty state', () => {
        const pass = {};
        const test = rdc({}, { type: 'non related', payload: {} });

        expect(test).toEqual(pass); 
    });

    //List
    it('should return List of items', () => {
        const pass = clone(mdata.store.state.options);
        const test = rdc({}, { type: ACT.options.list, payload: {data:pass} });  //wrap because axios will return as {data: res.body}

        expect(test).toEqual(pass);
    });

});
