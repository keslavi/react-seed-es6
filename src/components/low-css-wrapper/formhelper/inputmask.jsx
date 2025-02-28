import { cleanParentProps,colProps } from "./helper";
import { useController} from "react-hook-form";
import { Col } from "..";

/*eslint react/prop-types: 0 */
export const TextField = (props) => {
  const {label}  = props;
  const { field,fieldState } = useController(props);
  return (
    <Col {...colProps(props)}>
      {label && <label>{label}</label>}<br/>
      <input  {...cleanParentProps(props)} {...field} />
      <br/><label className="validation-error-message">not implemented</label>
      {fieldState.error && <label className="validation-error-message"><br/>{fieldState.error.message}</label>}
    </Col>
  );
};
