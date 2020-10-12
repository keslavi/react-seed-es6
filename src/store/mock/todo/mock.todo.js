import _ from 'lodash';
import { mockOptions as options } from '../mock.options';

export const todo = {
    id: 1,
    subject: "subject a",
    body: "body a",
    status: 1,
    result: 0,
    delete: ''
    // ,
    // options: {
    //   status: [
    //     {
    //       value: 0,
    //       text: "pending"
    //     },
    //     {
    //       value: 1,
    //       text: "in progress"
    //     },
    //     {
    //       value: 2,
    //       text: "completed"
    //     },
    //     {
    //       value: 3,
    //       text: "cancelled"
    //     }
    //   ],
    //   result: [
    //     {
    //       value: 0,
    //       text: ""
    //     },
    //     {
    //       value: 1,
    //       text: "good"
    //     },
    //     {
    //       value: 2,
    //       text: "not good"
    //     },
    //     {
    //       value: 3,
    //       text: "who knows"
    //     }
    //   ]
    // }
};

const todos = [
    {
        "id": 1,
        "subject": "subject a",
        "body": "body a",
        "status": 0,
        "result": 0,
        "delete": null
    },
    {
        "id": 2,
        "subject": "b",
        "body": "body b",
        "status": 2,
        "result": 2,
        "delete": null
    },
    {
        "id": 3,
        "subject": "subject c",
        "body": "body c",
        "status": 2,
        "result": 2,
        "delete": null
    }
];

export const mockTodo = {
    store: {
        init: {
            todos: {},
            todo: {}
        },
        post: {
            todos: _.mapKeys(todos, 'id'),
            todo : todo,
            options
        }
    },
    request: {
        update: {
            id: 1,
            subject: "subject a",
            body: "body b",
            status: 0,
            result: 0
        },
        delete: {
            id: 1,
            subject: "subject a",
            body: "body b",
            status: 0,
            result: 0,
            delete: "delete"
        }
    },
    response: {
        retrieve: {
            id: 1,
            subject: "subject a",
            body: "body a",
            status: 0,
            result: 0,
            delete: null
        },
        update: {
            id: 1,
            subject: "subject a",
            body: "body b",
            status: 0,
            result: 0
        },
        delete: {
            id: 1,
            delete: 'delete',
            subject: null,
            body: null,
            status: null,
            result: null,
        },
        list: todos,
    }
};