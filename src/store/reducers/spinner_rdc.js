import {ACT} from '../_action-constants';

export default function (state = {count:0, active:false}, action) {
    switch (action.type){ 
        case ACT.spinner:
            const count = state.count += action.payload;
            const active = count >0;
            const ret = {count,active};
            return ret;
        default:
            return state;
    }
}

