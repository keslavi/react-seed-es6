import React from 'react';
import config from '../config';
import {clone} from '../helpers';

export const TextareaDebug = (props) => {
    if (!config.debug) return (<span></span>);

    const o = clone(props.value || {});
    //remove the history property if it exists    
        delete o.history;

    return (
        <div>
            Debug:<br/>
            <textarea 
            readOnly
            rows='10'
            cols='100'
            value={JSON.stringify(o,null,2)}
            ></textarea>
        </div>
    );
}

//export default TextareaDebug;
