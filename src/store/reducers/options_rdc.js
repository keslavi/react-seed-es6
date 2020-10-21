import ACT from '../_action-constants';

//TODO: cheating, finish the backend and full store for options
//import { mockOptions as initialState } from '../mock';


export default function (state = {}, action) {
    switch (action.type) {
        case ACT.options.list:
            return action.payload.data;
        default:
            return state;
    }
}
