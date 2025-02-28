import { useEffect } from "react";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import { useNavigate, /* NavLink,*/ useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStore } from "../slice/store-zustand";

import { ProfileMl } from "./profile-ml/profile-ml";
import { ProfilePb } from "./profile-pb/profile-pb";

import {
  Col,
  Input,
  //AutoComplete, //ALTERNATE to singe Input
  //TextField,    //ALTERNATE to singe Input
  Row,
  TextareaDebug,
} from "components";

import { resolver, errorNotification } from "./validation";

export const Contact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    contact,
    option,
    contactRetrieve,
    contactUpsert,
    contactClear,
    loading,
    error,
    errorMsg,
  } = useStore();
  const item = contact;

  // React hook form and validation***********************
  const {
    control,
    formState: { errors },
    //getValues,
    handleSubmit,
    reset,
    //setValue,
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
    contactRetrieve(id);
  }, []); //[dispatch]);

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
    contactUpsert(values);
  };

  const onDelete = () => {
    const deleteValues = { id: item.id, delete: "delete" };
    contactUpsert(deleteValues);
    navigate("/dev/contacts");
  };

  const onCancel = () => {
    contactClear();
    navigate("/dev/contacts");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {errorMsg}</div>;
  if (isEmpty(item)) return <div>loading...</div>;

  return (
    <>
      <div>
        <h4>
          Contact: {item.nameFirst} {item.nameLast} ({item.profile})
        </h4>
      </div>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hidden">
          <Row>
            <div className="hidden"> Col is INSIDE Input</div>
            <Input name="id" {...attributes} />
          </Row>
        </div>
        <Row>
          <Input name="nameLast" label="Last Name" {...attributes} />
          <Input name="nameFirst" label="First Name" {...attributes} />
          <Input name="phone" label="Phone" {...attributes} />
        </Row>
        <Row>
          <Input
            name="TypeContact"
            label="Type of Contact"
            options={option.type}
            {...attributes}
          />
        </Row>
        <fieldset>
          <legend>Profile section:</legend>
          <ProfileMl attributes={attributes} item={item} option={option} />
          <ProfilePb attributes={attributes} item={item} option={option} />
        </fieldset>
        <Row>
          <Col>
            <input type="submit" value="Submit" />
            &nbsp;&nbsp;
            <input type="button" onClick={() => onCancel()} value="Cancel" />
            &nbsp;&nbsp;
            <input type="button" onClick={() => onDelete()} value="Delete" />
          </Col>
        </Row>
      </form>
      <TextareaDebug value={{ item, option }} />
    </>
  );
};
export default Contact;
