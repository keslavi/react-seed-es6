import ACT from '../_action-constants';

export default function (state = {}, action) {
    switch (action.type) {
        case ACT.todo.create:
            console.log('*** REDUCER CREATE', action);

            return action.payload.data;
        case ACT.todo.retrieve:
            console.log('*** REDUCER retrieve', action);
            return action.payload.data;
        case ACT.todo.update:
            //redux promise returns the portion we want as .data            
            // console.log('*********************');
            // console.log('***', action);
            // console.log('*********************');
            console.log('*** REDUCER UPDATE', action);

            return action.payload.data;
        case ACT.todo.delete:
        case ACT.todo.clearSelected:
            return {};
        default:
            return state;
    }
}
