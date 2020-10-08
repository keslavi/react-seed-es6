import {store} from '../store';
import ACT from '../_action-constants';


export function actSpinner(active = false) { 
    store.dispatch ({
        type: ACT.spinner,
        payload: active ? 1 : -1 //increment and decrement in reducer
    })
}

