import _ from 'lodash';
import ACT from '../_action-constants';

const tasks = (state = {}, action) => {

    /*
     note: returns a flattened array using the id as a key
     arguably useful when you want to see item.1 ( or item[1] ) instead of playing array games
     also helps during updates and deletes
    */

    //note: redux promise returns the body as .data
    switch (action.type) {
        case ACT.task.create:
            return {
                ...state,
                [action.payload.data.id]: action.payload.data
            }
        case ACT.task.retrieve:
            return {
                ...state,
                [action.payload.data.id]: action.payload.data
            }
        case ACT.task.update:
            return {
                ...state,
                [action.payload.data.id]: action.payload.data
            }
        case ACT.task.delete:
            return _.omit(state, action.payload)
        case ACT.task.list:
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
}

export default tasks;
