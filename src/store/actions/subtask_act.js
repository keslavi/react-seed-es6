// import axios from '../_helpers/axios';
import { ACT } from '../_action-constants';
// import config from 'config';
// import { clone } from 'helpers';

//const url = `${config.api}/SubTask`;

// Create
// export function actSubTask_C(values) {
//     const req = axios.post(`${url}`, values);
//     return {
//         type: ACT.SubTask.create,
//         payload: req
//     };
// }

// Retrieve
export function actSubtask_L(id = '') {
    // example of redux-promise... the request is resolved in the reducer

    //const api=`${url}/${id}`;
    //console.log('*****actToDo_R.get',api);
    //const res = axios.get(api);

    const payload = [
        {
            id: 9,
            name: "subtask a",
            description: `description a for task ${id}`,
            status: "1",
            date: new Date(),
        },
        {
            id: 10,
            name: "subtask b",
            description: `description b for task ${id}`,
            status: "2",
            date: new Date(),
        },
        {
            id: 11,
            name: "subtask c",
            description: `description c for task ${id}`,
            status: "3",
            date: new Date(),
        },
    ]

    return {
        type: ACT.subtask.list,
        payload
    };
}

/*
// Update
export function actSubTask_U(values) {
    // Note: a particular backend I'm building towards uses get/post for everything :(
    // const req = axios.put(`${url}`, values);
    const req = axios.post(`${url}`, values); 

    return {
        type: ACT.SubTask.update,
        payload: req
    };
}

// Delete
export function actSubTask_D(values0) {
    const values=clone(values0);
    values.delete='delete';
    const req = axios.post(`${url}`, values);
    return {
        type: ACT.SubTask.delete,
        payload: req
    };
}

// List
export function actSubTask_L(values = {}) {
    //redux-saga example... passing the saga action on
    const ret = { type: ACT.SubTask.listSaga, payload: values }
    return ret;
}

// Clear Selected
export function actSubTask_Clear(values = {}) {
    return { 
        type: ACT.SubTask.clearSelected, 
        payload: {} 
    };
}

*/