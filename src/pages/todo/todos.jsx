import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css'
import _ from 'lodash';
import { actTodo_L } from '../../store';

import {
    Button,
    Col,
    Row,
    Table,
} from 'reactstrap';


export const Todos = (props) => {
    const {
        items,      //from mapStateToProps
        options,    //from mapStateToProps for dropdowns
        history,    //to change to the Retrieve Page
        actTodo_L,  //from action function in connect statement... pre wrapped with dispatch
    } = props;


    useEffect(() => {
        actTodo_L();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (_.isEmpty(items) | _.isEmpty(options)) {
        return (
            <div id='noItems'>Loading...</div>
        )
    }

    return (
        <div>
            <h3>ToDos</h3>
            {renderList(items,options,history)}

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        items: state.todos,
        options: state.options
    }
}

export default connect(mapStateToProps, {
    actTodo_L,
})(withRouter(Todos));
//understanding connect is very import, it cleans up code considerably
//and does away with manual dispatches... actions are wrapped in dispatch automatically




// ********************************************************************
const renderList = (items, options, history) => {

    const select = (item) => {
        history.push(`/todo/${item.id}`);
    }

    return (
        <div id='hasItems'>
            <Row>
                <Col xs='12'>
                    <div className='float-right'>
                        <Button id='addItem' color='success' onClick={()=>select({id:0})}>+</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs='12'>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Subject</th>
                                <th>Status</th>
                                <th>Result</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_.map(items, (item) => {
                                return (
                                    <tr
                                        key={item.id}
                                        id={`tr-${item.id}`}
                                        className='todo-row'
                                        onClick={() => select(item)}
                                    >
                                        <td>{item.id}</td>
                                        <td>{item.subject}</td>
                                        <td>{options.todo.status[item.status].text}</td>
                                        <td>{options.todo.result[item.result].text}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}