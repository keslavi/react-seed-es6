import { cleanParentProps,colProps } from "./helper";
import { useController} from "react-hook-form";
import { Col } from "..";

/*eslint react/prop-types: 0 */
export const TextField = (props) => {
  const {label}  = props;
      
  const { field,fieldState } = useController({...props,...{defaultValue:props.defaultValue ||''}});

  return (
    <Col {...colProps(props)}>
      {label && <label className={fieldState.error ? "validation-error-message":""}>{label}</label>}<br/>
      <input  {...cleanParentProps(props)} {...field}/>
      {fieldState.error && <label className="validation-error-message"><br/>{fieldState.error.message}</label>}
    </Col>
  );
};
