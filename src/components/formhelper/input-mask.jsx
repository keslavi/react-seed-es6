//import { TextField as MuiTextField } from "@mui/material";
import { cleanParentProps, colProps } from "./helper";
import { useController } from "react-hook-form";

import { Col } from "components";

export const InputMask = (props) => {
  const { field, fieldState } = useController(props);
  return (
    <Col {...colProps(props)}>
      {label && <label>{label}</label>}
      <br />
      <input {...cleanParentProps(props)} {...field}/>
      <label className="validation-error-message">
        formhelper/InputMask not fully implemented
      </label>
      {fieldState.error && (
        <label classname="validation-error-message">
          <br />
          {fieldState.error.message}
        </label>
      )}
    </Col>
  );
};
