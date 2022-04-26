import ACT from '../_action-constants';

const task = (state = {}, action) => {
    switch (action.type) {
        case ACT.task.create:
            /* falls through */
        case ACT.task.retrieve:
            /* falls through */
        case ACT.task.update:
            //redux promise and axios returns the portion we want as .data            
            return action.payload.data;
        case ACT.task.delete:
        case ACT.task.clearSelected:
            return {};
        default:
            return state;
    }
}

export default task;
