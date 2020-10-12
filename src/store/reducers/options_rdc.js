import _ from 'lodash';
import ACT from '../_action-constants';

//TODO: cheating, finish the backend and full store for options
import { mockOptions as initialState } from '../mock';


export default function (state = initialState, action) {

    /*
     note: returns a flattened array using the id as a key
     arguably useful when you want to see item.1 ( or item[1] ) instead of playing array games
     also helps during updates and deletes
    */

    switch (action.type) {
        case ACT.options.list:
            return action.payload;
        default:
            return state;
    }
}
