import React from "react";
import { toast } from 'react-toastify';
import _ from 'lodash';
//import { addError } from "../";


// handle any company specific validation schemas

// potentially changing action byref
export default function (res) {

    //keeping as action in case of future modification
    const action = { type: '', payload: {} };
    let msg = null;
    let netDetails = null;
    let rrid = null;
    let httperrorRes = null;

    // handle network errors
    const data = res.data;

    if (res.status < 200 || res.status > 299) {
        action.type = 'apiError';
        rrid = `http ${res.status}`;
        msg = data.ErrorUIMessage;

        if (!_.isEmpty(data)) {
            httperrorRes = data;
            netDetails = data.ErrorDetails;
        }
        message(action.type, msg, netDetails, rrid, httperrorRes);
        //addErrorToStore(action.type, msg, netDetails, rrid);
        return Promise.reject(`http error ${res.status}`);
    }

    // handle company specific success:false errors
    if (_.has(data, 'Success') && !data.Success) {
        action.type = 'apiError';
        rrid = data.RRID;
        msg = data.ErrorUIMessage;
        netDetails = data.ErrorDetails;
        //addErrorToStore(action.type, msg, netDetails, rrid);
        message(action.type, msg, netDetails, rrid);
        return Promise.reject('Success is false');
    }

    if (_.has(data, 'success') && !data.success) {
        action.type = 'apiError';
        rrid = data.rrid;
        msg = data.errorUIMessage;
        netDetails = data.errorDetails;
        //addErrorToStore(action.type, msg, netDetails, rrid);
        message(action.type, msg, netDetails, rrid);
        return Promise.reject('Success is false');
    }

    if (_.has(data, 'Status') && typeof (data.Status) === 'string' && data.Status.toLowerCase() !== 'success') {
        action.type = 'apiError';
        //rrid = data.rrid;
        msg = data.ErrorUIMessage;
        netDetails = data.ErrorDetail;

        message(action.type, msg, netDetails);
        return Promise.reject('Status is false');
    }

    return res;
}

// function //addErrorToStore(name, message, stack, rrid = null) {
//     if (rrid) {
//         message = 'rrid: ' + rrid + ' ' + message;
//     }
//     //make the basic properties match an http error
//     const err = {
//         name,
//         message,
//         stack
//     }
//     addError(err);
// }

function message(actionType, msg, netDetails, rrid, httperrorRes = null) {
    toast.error(
        <span>
            <div><b>Error Type:</b>{actionType}</div>
            {!_.isEmpty(msg) ? <div>{msg}</div> : ''}
            {!_.isEmpty(rrid) ? <div><br /><b>RRID: </b>{rrid}</div> : ''}
            {!_.isEmpty(netDetails) ?
                <span>
                    <div><br /><b>Details:</b></div>
                    {netDetails.split('at').map(x => (<div>{x}</div>))}
                </span> : ''}
            {!_.isEmpty(httperrorRes) ? <div><div><br /><b>Details</b></div>httperrorRes</div> : ''}
        </span>
        , {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-wide',
            autoClose: false
        });
}

export function messageHttpError(error) {
    const url = error.config.url;
    const method = error.config.method;
    const msg = error.message;

    toast.error(
        <span>
            <div><b>url:</b> {url}</div>
            <div><b>method:</b> {method}</div>
            {!_.isEmpty(msg) ? <div>{msg}</div> : ''}
        </span>
        , {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-wide',
            autoClose: false
        });

    // "error: {
    //     "message": "Request failed with status code 404",
    //     "name": "Error",
    //     "stack": "Error: Request failed with status code 404\n    at createError (http://localhost:3000/static/js/1.chunk.js:4085:15)\n    at settle (http://localhost:3000/static/js/1.chunk.js:4301:12)\n    at XMLHttpRequest.handleLoad (http://localhost:3000/static/js/1.chunk.js:3608:7)",
    //     "config": {
    //       "url": "/server-net/api/ztodo",
    //       "method": "get",
    //       "headers": {},
    //       "transformRequest": [
    //         null
    //       ],
    //       "transformResponse": [
    //         null
    //       ],
    //       "timeout": 0,
    //       "xsrfCookieName": "XSRF-TOKEN",
    //       "xsrfHeaderName": "X-XSRF-TOKEN",
    //       "maxContentLength": -1
    //     }
    //   }"    
}
