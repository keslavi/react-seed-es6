import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { ContainerFullWidth, Row, Col, Input } from "components";

import _ from "lodash";

import { useForm, useController } from "react-hook-form";

import { actTask_R, actOption_L } from "store";

import { TextareaDebug } from "components";

const Task0 = (props) => {
  const { item, option, actTask_R, actOption_L } = props;
  const prm = useParams();

  const {
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    actTask_R(prm.id || 1);
    //we could be refreshing directly from link so need to include
    if (_.isEmpty(option)) {
      actOption_L();
    }
    //eslint-disable-next-line
  }, []);

  const onSubmit = (values) => {
    console.log(values);
  };

  if (_.isEmpty(item) || _.isEmpty(option)) {
    return <div data-testid="task-noitem">Loading...</div>;
  }

  const attributes = {
    //viewMode,
    useController,
    control,
    //onValueChange
  };

  return (
    <div data-testid="task">
      <h4>Task</h4>
      <TextareaDebug hidden value={{ item, option }} />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContainerFullWidth>
          <Row>
            {/* <Col is INSIDE Input> */}
            <Input 
              name="id" 
              label="Id" 
              value={item.id} 
              {...attributes} 
            />
          </Row>
          <Row>
            {/* <Col is INSIDE Input> */}
            <Input
              name="subject"
              label="Subject"
              value={item.subject}
              {...attributes}
            />
            <Input
              name="body"
              label="Body"
              value={item.body}
              {...attributes}
            />
          </Row>
          <Row>
          <Input
              name="status"
              label="Status"
              value={item.status}
              options={option.status}
              {...attributes}
            />
            <Input
              name="result"
              label="Result"
              value={item.result}
              options={option.result}
              {...attributes}
            />
          </Row>
        </ContainerFullWidth>
        <Row>
          <Col>
            <button type='submit'>Submit</button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.task,
    option: state.options?.task,
  };
};

export const Task = connect(mapStateToProps, {
  actTask_R,
  actOption_L,
})(Task0);

export default Task;
