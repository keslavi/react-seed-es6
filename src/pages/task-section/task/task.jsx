import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useForm, useController } from "react-hook-form";
import _ from "lodash";

import { errorNotification,resolver } from "./validation/formvalidation";

import { ContainerFullWidth, Row, Col, Input } from "components";
import { TextareaDebug } from "components";
import { toast } from "react-toastify";

/*
  code exercise: 
  add a subtask section from the store:  
    add a button below submit
    when button below submit is clicked, 
      call the subtask action
      display results in a table

      bonus: 
        use the option object to convert the subtask status to it's lookup value
          (you can view the option object in TextAreaDebug)
        format the date as mm/dd/yyyy
*/

import { 
  actTask_C, 
  actTask_R,
  actTask_U,
  actTask_D,
  actTask_Clear,
  actOption_L,
} from "store";

const Task0 = (props) => {
  const { 
    item,
    subtasks,     
    option, 
    actTask_C, 
    actTask_R,
    actTask_U,
    actTask_D,
    actTask_Clear,    
    actOption_L,
  } = props;
  const prm = useParams();
  const navigate=useNavigate();

  const {
    handleSubmit,
    control,
    //watch,
    reset,
    //getValues,
    formState: { errors },
  } = useForm({
    resolver,
    //mode:"onChange"
  });

  useEffect(() => {
    actTask_R(prm.id || 1);
    //we could be refreshing directly from link so need to include
    if (_.isEmpty(option)) {
      actOption_L();
    }
    //eslint-disable-next-line
  }, []);

  useEffect(()=>{
    if (!_.isEmpty(item)){
      reset(item);
      //toast.info('form reset');
    }
  },[item])

  const onSubmit = (values) => {
    //note:  values can't get here prior to form & business validation
    toast.info(<div>
      Submit clicked<br/>
      <textarea rows={5} cols={30} defaultValue={JSON.stringify(values,null,2)}></textarea>
    </div>);

    if (values.id===0){
      actTask_C(values)
    } else {
      actTask_U(values);
    }
  };

  const onDelete =()=>{
    const values= {...item}; 
    actTask_D(values);
    navigate('/tasks');
  }

  const onCancel =()=>{
    actTask_Clear();
    navigate('/tasks');
  }  

  if (_.isEmpty(item) || _.isEmpty(option)) {
    return <div data-testid="task-noitem">Loading...</div>;
  }

  errorNotification(errors);

  const attributes = {
    //viewMode,
    useController,
    control,
    //onValueChange
  };

  return (
    <div data-testid="task">
      <h4>Task</h4>
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
          <Row>
          <Col>
            <input type='submit' value='Submit'/>&nbsp;&nbsp;
            <input type='button' onClick={()=>onCancel()} value='Cancel'/>&nbsp;&nbsp;
            <input type='button' onClick={()=>onDelete()} value='Delete'/>&nbsp;&nbsp;
          </Col>
        </Row>
        </ContainerFullWidth>
      </form>      <TextareaDebug value={{ item, option }} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.task,
    option: state.options?.task,
    subtasks: state.subtasks,
  };
};

export const Task = connect(mapStateToProps, {
  actTask_C, 
  actTask_R,
  actTask_U,
  actTask_D,
  actTask_Clear,  
  actOption_L,
})(Task0);

export default Task;
