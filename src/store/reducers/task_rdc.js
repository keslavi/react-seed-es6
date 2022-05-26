import ACT from '../_action-constants';
import { toast } from 'react-toastify';

const task = (state = {}, action) => {
    switch (action.type) {
        case ACT.task.create:
            //redux promise and axios returns the portion we want as .data            
            toast.success(`Created ${action.payload.data.subject}`)
            return action.payload.data;
        case ACT.task.retrieve:
            //redux promise and axios returns the portion we want as .data            
            return action.payload.data;
        case ACT.task.update:
            //redux promise and axios returns the portion we want as .data            
            toast.success(`Updated ${action.payload.data.subject}`)
            return action.payload.data;
        case ACT.task.delete:
            if (action.payload.data.delete===true){
                toast.success(`Deleted ${action.payload.data.subject}`);
            } else {
                toast.error('failed to delete ${action.payload.data.subject}');
            }
            return {};
        case ACT.task.clearSelected:
            return {};
        default:
            return state;
    }
}

export default task;
