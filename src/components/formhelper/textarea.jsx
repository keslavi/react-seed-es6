/************************************** 
 
!!IMPORTANT: TODO Rewrite with https://mui.com/base-ui/react-textarea-autosize/

***************************************/

import { cleanParentProps, colProps } from "./helper";
import { useController } from "react-hook-form";
import { Col } from "components/grid";

export const Textarea = (props) => {
  const rows = props.rows || 10;
  const cols = props.cols || 100;

  const { field, fieldState } = useController(props);

  return (
    <Col {...colProps(props)}>
      {props.label && <label>{props.label}</label>}
      <br />
      <textarea
        {...cleanParentProps(props)}
        {...field}
        rows={rows}
        cols={cols}
      />
      {fieldState.error && (
        <label className={"validation-error-message"}>
          <br />
          {fieldState.error.message}
        </label>
      )}
    </Col>
  );
};
