import { cleanParentProps,colProps } from "./helper";
import { useController} from "react-hook-form";
import { Col } from "..";

/*eslint react/prop-types: 0 */
export const DateField = (props) => {
  const {label}  = props;
  const { field,fieldState } = useController(props);
  return (
    <Col {...colProps(props)}>
      {label && <label>{label}</label>}<br/>
      <input  type="date"{...cleanParentProps(props)} {...field} />
      {fieldState.error && <label className="validation-error-message"><br/>{fieldState.error.message}</label>}
    </Col>
  );
};
