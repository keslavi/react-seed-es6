import axios from '../_helpers/axios';
import { ACT } from '../_action-constants';
import config from '../../config';

const url = `${config.api}/todo`;

// Create
export function actTask_C(values) {
    const req = axios.post(`${url}`, values);
    return {
        type: ACT.todo.create,
        payload: req
    };
}

// Retrieve
export function actTask_R(id = '') {
    // example of redux-promise... the request is resolved in the reducer


    const api=`${url}/${id}`;
    //console.log('*****actToDo_R.get',api);
    const res = axios.get(api);

    return {
        type: ACT.todo.retrieve,
        payload: res
    };
}


// Update
export function actTask_U(values) {
    // Note: a particular backend I'm building towards uses get/post for everything :(
    // const req = axios.put(`${url}`, values);
    const req = axios.post(`${url}`, values); 

    return {
        type: ACT.todo.update,
        payload: req
    };
}

// Delete
export function actTask_D(values) {
    const req = axios.post(`${url}`, values);
    return {
        type: ACT.todo.delete,
        payload: req
    };
}

// List
export function actTask_L(values = {}) {
    //redux-saga example... passing the saga action on
    const ret = { type: ACT.todo.listSaga, payload: values }
    return ret;
}

// Clear Selected
export function actTaskClearSelected(values = {}) {
    return { 
        type: ACT.todo.clearSelected, 
        payload: {} 
    };
}

