import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style.css'
import _ from 'lodash';
import { actOption_L } from '../store';
import {TextareaDebug} from './';

export const InitState = (props) => {
    const {
        options, 
        actOption_L,
    } = props;


    useEffect(() => {
        if (!_.isEmpty(options)) return;

        actOption_L();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (_.isEmpty(options)) {
        return (
            <div id='initializeStore'>Initializing Data...</div>
        )
    }

    return (
        <span className='hidden'>
            {render(options)}
        </span>
    )
}

const mapStateToProps = (state) => {
    return {
        options: state.options
    }
}

export default connect(mapStateToProps, {
    actOption_L,
})(InitState);


// ********************************************************************
const render = (options) => {
    return (
        <div id='storeInitialized'>
            <TextareaDebug value={options}/>
        </div>
    )
}