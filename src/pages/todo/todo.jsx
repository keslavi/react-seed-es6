import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css'
import _ from 'lodash';
import { 
    actTodo_C,
    actTodo_R,
    actTodo_U,
    actTodo_D,
    actTodoClearSelected,
 } from '../../store';

import {
    // Button,
    // Col,
    // Row,
    // Table,
} from 'reactstrap';

import {TextareaDebug} from '../../components';


export const Todo = (props) => {
    const {
        idItem,     //from mapStateToProps via url
        item,       //from mapStateToProps
        options,    //from mapStateToProps for dropdowns
        history,    //to change to the Retrieve Page
        actTodo_C,
        actTodo_R,
        actTodo_U,
        actTodo_D,
        actTodoClearSelected,
    } = props;


    useEffect(() => {
        actTodo_R(idItem);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (_.isEmpty(item) | _.isEmpty(options)) {
        return (
            <div id='noItem'>Loading...</div>
        )
    }

    return (
        <div>
            <h3>ToDo</h3>
            {render(item,options,history)}
        </div> 
    )
}



const mapStateToProps = (state, ownProps) => {
    return {
        idItem: ownProps.match.params.id,
        item: state.todo,
        options: state.options?.todo,
    }
}

export default connect(mapStateToProps, {
    actTodo_C,
    actTodo_R,
    actTodo_U,
    actTodo_D,
    actTodoClearSelected,
})(withRouter(Todo));
//understanding connect is very import, it cleans up code considerably
//and does away with manual dispatches... actions are wrapped in dispatch automatically



// ********************************************************************
const render = (item, options, history) => {
console.log ('TODO:', item);
    return (
        <div id='hasItem'>
            has items
            <TextareaDebug value={{item,options}}/>
  
        </div>
    )
}