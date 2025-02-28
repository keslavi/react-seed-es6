import { useEffect } from "react";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import { useNavigate, /*NavLink,*/ useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { store } from "store";

//prettier-ignore
import { 
  NavSticky,
  Col, 
  Input, 
  Row, 
  TextareaDebug, 
} from "components";

//prettier-ignore
import { 
  resolver, 
  errorNotification 
} from "./validation";

export const Task = () => {
  const item = store.use.task();
  const taskRetrieve = store.use.taskRetrieve();
  const taskUpsert = store.use.taskUpsert();
  const option = store.use.option();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    taskRetrieve(id);
  }, []);

  // React hook form and validation***********************
  const {
    control,
    formState: { errors },
    //getValues,
    handleSubmit,
    reset,
    setValue,
    //watch,
  } = useForm({
    resolver,
    //mode:"onChange"
  });
  const attributes = { control, errors };
  useEffect(() => {
    if (errors) {
      errorNotification(errors);
    }
  }, [errors]);
  // end React hook form and validation***********************

  useEffect(() => {
    if (!isEmpty(item)) {
      reset(item);
    }
  }, [item]);

  const onSubmit = (values) => {
    //note:  values can't get here prior to form & business validation
    toast.info(
      <div>
        Submit clicked
        <br />
        <textarea
          rows={5}
          cols={30}
          defaultValue={JSON.stringify(values, null, 2)}
        ></textarea>
      </div>
    );

    taskUpsert(values);
  };

  const onDelete = () => {
    const values = { ...item };
    //actTask_D(values);
    navigate("/dev/tasks");
  };

  const onCancel = () => {
    //actTask_Clear();
    navigate("/dev/tasks");
  };

  if (isEmpty(item) || isEmpty(option)) return <div>loading...</div>;
  return (
    <>
      <br /> {/* account for navSticky */}
      <br /> {/* account for navSticky */}
      <Row>
        <Col xs={12}>
          <h4>Task</h4>
        </Col>
      </Row>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hidden">
          <Row>
            <div className="hidden"> Col is INSIDE Input</div>
            <Input name="id" {...attributes} />
          </Row>
        </div>
        <Row>
          <div className="hidden"> Col is INSIDE Input</div>
          <Input
            //size={{xs:4,xm:7}} //size={4} muiv6 Grid2 uses size
            name="subject"
            //info="header|body" //ToDo: get info icon working
            {...attributes}
          />
        </Row>
        <Row>
          <Input name="body" label="Body" {...attributes} />
        </Row>

        <Row>
          <Input
            name="status"
            label="Status"
            options={option.task.status}
            {...attributes}
          />
          {/* <Select name="status" label="Status" options={option.status}  {...attributes} /> */}
          <Input
            name="result"
            label="Result"
            options={option.task.result}
            {...attributes}
          />
          <Input datepicker name="dfrom" label="From" {...attributes} />
        </Row>
        <Row>
          <Input name="address.line1" label="address" {...attributes} />
        </Row>
        <Row>
          <Input name="address.line2" {...attributes} />
        </Row>
        <Row>
          <Input name="address.line3" {...attributes} />
        </Row>
        <Row>
          <Col>
            <input type="submit" value="Submit" />
            &nbsp;&nbsp;
            <input type="button" onClick={() => onCancel()} value="Cancel" />
            &nbsp;&nbsp;
            <input type="button" onClick={() => onDelete()} value="Delete" />
          </Col>
        </Row>
        <NavSticky>
          <Button id="btnSave" type="submit" variant="contained">
            Save
          </Button>
        </NavSticky>
      </form>
      <TextareaDebug value={{ item, option }} />
    </>
  );
};
export default Task;
