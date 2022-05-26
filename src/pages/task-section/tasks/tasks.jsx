import React, { useEffect } from "react";
//https://reactrouter.com/docs/en/v6/getting-started/overview
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import './style.scss';

import { 
  actTask_L, 
  actOption_L 
} from "store";

import { TextareaDebug } from "components";

const Tasks0 = (props) => {
  const { items, option, actTask_L, actOption_L } = props;

  useEffect(() => {
    actTask_L();
    if (_.isEmpty(option)) {
      actOption_L();
    }
    //eslint-disable-next-line
  },[]);

  if (_.isEmpty(items) || _.isEmpty(option)) {
    return <div data-testid="tasks-noitems">Loading...</div>;
  }
  
  const optionText=(option,value)=>{
    const ret =option.find(x=>x.value===value).text;
    return ret;
  }

  const renderItems = (data) => {
    //was demonstrating usage of a non-array object,
    //flipping it back for 'normal' display syntax
    const tasks = Object.keys(items).map((x) => items[x]);
    return tasks.map((item) => (
      <tr key={item.id}>
        <td><NavLink to={`/tasks/${item.id}`}>{item.id}</NavLink></td>
        <td>{item.subject}</td>
        <td>{item.body}</td>
        <td>{optionText(option.status,item.status)}</td>
        <td>{optionText(option.result,item.result)}</td>
      </tr>
    ));
  };

  return (
    <div data-testid="tasks">
      <h4>Tasks</h4>
      <br />
      <NavLink to={`/tasks/0`}>Add New</NavLink>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Body</th>
            <th>Status</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{renderItems(items)}</tbody>
      </table>
      <TextareaDebug value={{ option, items }} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.tasks,
    option: state.options?.task,
  };
};

export const Tasks = connect(mapStateToProps, {
  actTask_L,
  actOption_L,
})(Tasks0);

export default Tasks;
