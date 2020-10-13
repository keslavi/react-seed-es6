import axios from '../_helpers/axios';
import { ACT } from '../_action-constants';
import config from '../../config';

const url = `${config.api}/todo`;

// Create
export function actTodo_C(values) {
    const req = axios.post(`${url}`, values);
    return {
        type: ACT.todo.create,
        payload: req
    };
}

// Retrieve
export function actTodo_R(id = '') {
    // example of redux-promise... the request is resolved in the reducer
    // best for calls that don't require data manipulation
    const res = axios.get(`${url}/${id}`);
    return {
        type: ACT.todo.retrieve,
        payload: res
    };
}


// Update
export function actTodo_U(values) {
    // Note: a particular backend I'm building towards uses get/post for everything :(
    // const req = axios.put(`${url}`, values);
    const req = axios.post(`${url}`, values); 

    return {
        type: ACT.todo.update,
        payload: req
    };
}

// Delete
export function actTodo_D(values) {
    const req = axios.post(`${url}`, values);
    return {
        type: ACT.todo.delete,
        payload: req
    };
}

// List
export function actTodo_L(values = {}) {
    //redux-saga example... passing the saga action on
    const ret = { type: ACT.todo.listSaga, payload: values }
    return ret;
}

// Clear Selected
export function actTodoClearSelected(values = {}) {
    return { 
        type: ACT.todo.clearSelected, 
        payload: {} 
    };
}

