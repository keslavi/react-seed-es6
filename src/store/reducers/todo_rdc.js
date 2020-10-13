import ACT from '../_action-constants';

export default function (state = {}, action) {

    switch (action.type) {
        case ACT.todo.create:
        case ACT.todo.retrieve:
        case ACT.todo.update:
            //redux promise returns the portion we want as .data            
            return action.payload.data;
        case ACT.todo.delete:
        case ACT.todo.clearSelected:
            return {};
        default:
            return state;
    }
}
