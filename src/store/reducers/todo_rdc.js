import ACT from '../_action-constants';

const todo = (state = {}, action) => {
    switch (action.type) {
        case ACT.todo.create:
            /* falls through */
        case ACT.todo.retrieve:
            /* falls through */
        case ACT.todo.update:
            //redux promise and axios returns the portion we want as .data            
            return action.payload.data;
        case ACT.todo.delete:
        case ACT.todo.clearSelected:
            return {};
        default:
            return state;
    }
}

export default todo;
