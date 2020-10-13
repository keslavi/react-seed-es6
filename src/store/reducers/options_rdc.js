import ACT from '../_action-constants';

//TODO: cheating, finish the backend and full store for options
import { mockOptions as initialState } from '../mock';


export default function (state = initialState, action) {
    switch (action.type) {
        case ACT.options.list:
            return action.payload;
        default:
            return state;
    }
}
