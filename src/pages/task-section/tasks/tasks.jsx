import React, {useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import {actTask_L,actOption_L} from 'store';

import { TextareaDebug } from 'components';

const Tasks0 = (props) => {
  const {items,options,actTask_L,actOption_L} = props;

  useEffect (()=>{
    actTask_L();
    if (_.isEmpty(options)) {
      actOption_L();
    }
  })

  const renderItems=(items) => {
    return (
      <>
      {items.array.forEach(element => {
        
      })}
      </>
    )
  }

  if (_.isEmpty(items) || _.isEmpty(options)) {
    return (
    <div data-testid='tasks-noitems'>
      Loading...
    </div>
    );
  }

  return (
  <div data-testid='tasks'>
    <h4>Tasks</h4>
    <TextareaDebug value={{options,items}}/><br/>
    <table>
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Subject
          </th>
          <th>
            Body
          </th>
          <th>
            Status
          </th>
          <th>
            Result
          </th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  );
}

const mapStateToProps = (state) => {
  return {
      items: state.tasks,
      options: state.options?.task
  }
}

export const Tasks=connect(mapStateToProps, {
  actTask_L,actOption_L
})(Tasks0);

export default Tasks;


