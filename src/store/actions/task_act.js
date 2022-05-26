import axios from '../_helpers/axios';
import { ACT } from '../_action-constants';
import config from '../../config';
import { clone } from 'helpers';

const url = `${config.api}/task`;

// Create
export function actTask_C(values) {
    const req = axios.post(`${url}`, values);
    return {
        type: ACT.task.create,
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
        type: ACT.task.retrieve,
        payload: res
    };
}

// Update
export function actTask_U(values) {
    // Note: a particular backend I'm building towards uses get/post for everything :(
    // const req = axios.put(`${url}`, values);
    const req = axios.post(`${url}`, values); 

    return {
        type: ACT.task.update,
        payload: req
    };
}

// Delete
export function actTask_D(values0) {
    const values=clone(values0);
    values.delete='delete';
    const req = axios.post(`${url}`, values);
    return {
        type: ACT.task.delete,
        payload: req
    };
}

// List
export function actTask_L(values = {}) {
    //redux-saga example... passing the saga action on
    const ret = { type: ACT.task.listSaga, payload: values }
    return ret;
}

// Clear Selected
export function actTask_Clear(values = {}) {
    return { 
        type: ACT.task.clearSelected, 
        payload: {} 
    };
}

