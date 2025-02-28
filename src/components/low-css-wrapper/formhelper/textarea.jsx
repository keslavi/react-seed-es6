import { cleanParentProps,colProps } from "./helper";
import { useController} from "react-hook-form";
import { Col } from "..";

/*eslint react/prop-types: 0 */
export const Textarea = (props) => {
  const {label}  = props;
  const rows = props.rows || 10;
  const cols = props.cols || 100;
  const { field,fieldState } = useController(props);
  return (
    <Col {...colProps(props)}>
      {label && <label>{label}</label>}<br/>
      <textarea {...cleanParentProps(props)} {...field} rows={rows} cols={cols} />
      {fieldState.error && <label className="validation-error-message"><br/>{fieldState.error.message}</label>}
    </Col>
  );
};
